const router = require('express').Router();
const pool = require('../db/pool');
router.get('/', async (_req, res, next) => {
  try {
    const { rows } = await pool.query(`SELECT count(*)::int AS count,
      (SELECT count(*)::int FROM payment_providers p JOIN market_rules m USING(country_code)
       WHERE p.enabled=true AND p.approved_for_gambling=true AND m.permitted=true AND m.real_money_enabled=true) AS "approvedPaymentMethods"
      FROM market_rules`);
    res.json(rows[0]);
  } catch (e) { next(e); }
});
router.get('/:countryCode', async (req, res, next) => {
  try {
    const code = String(req.params.countryCode).toUpperCase();
    if (!/^[A-Z]{2}$/.test(code)) return res.status(400).json({ error: 'INVALID_COUNTRY_CODE' });
    const { rows } = await pool.query('SELECT country_code,country_name,permitted,real_money_enabled,min_age,kyc_required,license_reference,regulator,legal_reviewed_at FROM market_rules WHERE country_code=$1', [code]);
    if (!rows[0]) return res.status(404).json({ error: 'MARKET_NOT_CONFIGURED' });
    res.json(rows[0]);
  } catch (e) { next(e); }
});
router.get('/:countryCode/payment-methods', async (req, res, next) => {
  try {
    const code = String(req.params.countryCode).toUpperCase();
    if (!/^[A-Z]{2}$/.test(code)) return res.status(400).json({ error: 'INVALID_COUNTRY_CODE' });
    const { rows } = await pool.query(`SELECT provider_key,display_name,currency FROM payment_providers p JOIN market_rules m USING(country_code) WHERE p.country_code=$1 AND p.enabled=true AND p.approved_for_gambling=true AND m.permitted=true AND m.real_money_enabled=true`, [code]);
    res.json({ countryCode: code, methods: rows });
  } catch (e) { next(e); }
});
module.exports = router;
