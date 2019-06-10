const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  res.send('login');
});
router.get('/', (req, res, next) => {
  res.send('login');
});

module.exports = router;
