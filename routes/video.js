const express = require('express');

const { hasAuth } = require('./middlewares');
const Video = require('../models/Video');

const router = express.Router();

// CREATE
router.post('/', hasAuth, (req, res, next) => {
  res.send('api');
});

// READ
router.get('/', hasAuth, (req, res, next) => {
  res.send('api');
});
router.get('/:id', hasAuth, (req, res, next) => {
  res.send('api');
});

// UPDATE
router.patch('/:id', hasAuth, (req, res, next) => {
  res.send('api');
});

// DELETE
router.delete('/:id', hasAuth, (req, res, next) => {
  res.send('api');
});

module.exports = router;
