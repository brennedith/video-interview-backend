const express = require('express');

const router = express.Router();

// CREATE
router.post('/', (req, res, next) => {
  res.send('api');
});

// READ
router.get('/', (req, res, next) => {
  res.send('api');
});
router.get('/:id', (req, res, next) => {
  res.send('api');
});

// UPDATE
router.patch('/:id', (req, res, next) => {
  res.send('api');
});

// DELETE
router.delete('/:id', (req, res, next) => {
  res.send('api');
});

module.exports = router;
