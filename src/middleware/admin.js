module.exports = function requireAdmin(req, res, next) {
  if (!req.user || !['admin', 'compliance'].includes(req.user.role)) {
    return res.status(403).json({ error: 'ADMIN_ACCESS_REQUIRED' });
  }
  next();
};
