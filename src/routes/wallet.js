const router = require('express').Router();
const auth = require('../middleware/auth');
const { requireApprovedMarket } = require('../middleware/market');
const pool = require('../db/pool');
router.get('/', auth, requireApprovedMarket, async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT currency,balance_minor FROM wallets WHERE user_id=$1 ORDER BY currency', [req.user.sub]);
    res.json({ wallets: rows });
  } catch (e) { next(e); }
});
// Deposit/withdrawal execution intentionally remains unavailable until a provider
// adapter, signed webhook verification, reconciliation and licensing are approved.
router.post('/deposit-intent', auth, requireApprovedMarket, (_req, res) => res.status(503).json({ error: 'PAYMENTS_NOT_CONFIGURED', message: 'A gambling-approved local payment provider has not been configured.' }));
router.post('/withdrawal', auth, requireApprovedMarket, (_req, res) => res.status(503).json({ error: 'PAYOUTS_NOT_CONFIGURED', message: 'A gambling-approved payout provider has not been configured.' }));
module.exports = router;
