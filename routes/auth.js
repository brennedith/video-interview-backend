const express = require('express');
const passport = require('passport');

const { hasAuth } = require('./middlewares');

const router = express.Router();

router.post('/', passport.authenticate('local'), hasAuth, sendUser);
router.get('/', hasAuth, sendUser);

function sendUser(req, res, next) {
  const { email, name } = req.user;

  return res.status(200).json({ email, name });
}

module.exports = router;
