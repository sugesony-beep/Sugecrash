const router = require('express').Router();
const pool = require('../db/pool');
const auth = require('../middleware/auth');
const requireAdmin = require('../middleware/admin');
router.use(auth, requireAdmin);
router.get('/overview', async (_req, res, next) => {
  try {
    const [users, markets, payment, funds] = await Promise.all([
      pool.query('SELECT count(*)::int AS total FROM users'),
      pool.query('SELECT count(*)::int AS total, count(*) FILTER (WHERE permitted AND real_money_enabled)::int AS enabled FROM market_rules'),
      pool.query('SELECT count(*)::int AS total FROM payment_providers WHERE enabled AND approved_for_gambling'),
      pool.query('SELECT count(*)::int AS total FROM wallet_ledger')
    ]);
    res.json({ mode: 'development-play-credits-only', realMoneyEnabled: false,
      users: users.rows[0].total, markets: markets.rows[0], approvedPaymentMethods: payment.rows[0].total,
      ledgerEntries: funds.rows[0].total, note: 'No real-money activation is available from this dashboard.' });
  } catch (e) { next(e); }
});
router.get('/markets', async (_req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT country_code,country_name,permitted,real_money_enabled,license_reference,regulator,legal_reviewed_at FROM market_rules ORDER BY country_name');
    res.json({ markets: rows });
  } catch (e) { next(e); }
});
router.get('/payments', async (_req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT provider_key,display_name,country_code,currency,enabled,approved_for_gambling FROM payment_providers ORDER BY country_code,display_name');
    res.json({ providers: rows });
  } catch (e) { next(e); }
});
module.exports = router;
