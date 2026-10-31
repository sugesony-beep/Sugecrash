const pool = require('../db/pool');
const { realMoneyEnabled } = require('../config/env');
const getVerifiedCountry = require('./verified-country');

// Country code must come from a trusted geo-IP service at the edge in production.
// A browser-supplied country header is NOT a security boundary.
async function requireApprovedMarket(req, res, next) {
  try {
    const country = getVerifiedCountry(req);
    if (!country) return res.status(403).json({ error: 'MARKET_UNVERIFIED', message: 'Market location could not be verified.' });
    const { rows } = await pool.query(
      `SELECT m.*, u.account_status, u.kyc_status, u.date_of_birth,
              EXISTS (SELECT 1 FROM self_exclusions sx WHERE sx.user_id=u.id
                AND sx.starts_at <= now() AND (sx.permanent=true OR sx.ends_at IS NULL OR sx.ends_at > now())) AS self_excluded
       FROM market_rules m JOIN users u ON u.id=$2
       WHERE m.country_code=$1`, [country, req.user.sub]
    );
    const market = rows[0];
    if (!market || !market.permitted || !market.real_money_enabled || !realMoneyEnabled) {
      return res.status(403).json({ error: 'MARKET_NOT_ENABLED', message: 'Real-money services are unavailable in this market.' });
    }
    if (market.account_status !== 'active') return res.status(403).json({ error: 'ACCOUNT_UNAVAILABLE' });
    if (market.self_excluded) return res.status(403).json({ error: 'SELF_EXCLUDED' });
    if (market.kyc_status !== 'verified') return res.status(403).json({ error: 'KYC_REQUIRED' });
    const dob = new Date(`${String(market.date_of_birth).slice(0, 10)}T00:00:00.000Z`);
    const today = new Date();
    let age = today.getUTCFullYear() - dob.getUTCFullYear();
    const monthDelta = today.getUTCMonth() - dob.getUTCMonth();
    if (monthDelta < 0 || (monthDelta === 0 && today.getUTCDate() < dob.getUTCDate())) age--;
    if (!Number.isFinite(age) || age < market.min_age) return res.status(403).json({ error: 'AGE_REQUIREMENT_NOT_MET' });
    req.market = market;
    next();
  } catch (error) { next(error); }
}
module.exports = { requireApprovedMarket };
