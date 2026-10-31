const router = require('express').Router();
router.get('/', (_req, res) => res.json({ status: 'ok', service: 'worldwide-crash-casino-api', realMoneyEnabled: false }));
module.exports = router;
