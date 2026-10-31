const router = require('express').Router();
const auth = require('../middleware/auth');
const { requireApprovedMarket } = require('../middleware/market');
router.post('/bets', auth, requireApprovedMarket, (_req, res) => res.status(503).json({ error: 'WAGERING_ENGINE_NOT_ENABLED', message: 'Wagering is disabled until licensed-market certification and independent game testing are complete.' }));
module.exports = router;
