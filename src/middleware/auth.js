const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/env');
module.exports = function auth(req, res, next) {
  const token = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'AUTH_REQUIRED' });
  try { req.user = jwt.verify(token, jwtSecret, { algorithms: ['HS256'] }); next(); }
  catch { return res.status(401).json({ error: 'INVALID_TOKEN' }); }
};
