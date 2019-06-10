function hasAuth(req, res, next) {
  if (!req.isAuthenticated())
    return res.status(403).json({ message: 'Unauthorized' });

  next();
}

exports.hasAuth = hasAuth;
