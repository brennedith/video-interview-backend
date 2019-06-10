const express = require('express');

const { hasAuth } = require('./middlewares');
const Account = require('../models/Account');

const router = express.Router();

// CREATE
router.post('/', hasAuth, (req, res, next) => {
  res.send('dashboard');
});

// READ
router.get('/', hasAuth, (req, res, next) => {
  res.send('dashboard');
});
router.get('/:id', hasAuth, (req, res, next) => {
  res.send('dashboard');
});

// UPDATE
router.patch('/:id', hasAuth, (req, res, next) => {
  res.send('dashboard');
});

// DELETE
router.delete('/:id', hasAuth, (req, res, next) => {
  res.send('dashboard');
});

module.exports = router;
