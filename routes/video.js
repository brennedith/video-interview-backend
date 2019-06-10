const express = require('express');
const router = express.Router();

// CREATE
router.get('/', (req, res, next) => {
  res.send('api');
});

// READ
// UPDATE
// DELETE

module.exports = router;
