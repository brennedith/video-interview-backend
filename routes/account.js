const express = require('express');

const { hasAuth } = require('./middlewares');
const Account = require('../models/Account');

const router = express.Router();

// CREATE
router.post('/', hasAuth, (req, res, next) => {
  const { slug, name, text, duration, host, user, password, secure } = req.body;

  const account = {
    slug,
    name,
    text,
    duration: Number(duration),
    credentials: {
      host,
      user,
      password,
      secure: Boolean(secure)
    }
  };

  Account.create(account)
    .then(account => {
      res.status(200).json(account);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// READ
router.get('/', hasAuth, (req, res, next) => {
  Account.find()
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
// READ: public route
router.get('/:slug', (req, res, next) => {
  const { slug } = req.params;

  Account.findOne({ slug })
    .then(account => {
      const { name, duration } = account;

      res.status(200).json({
        name,
        duration
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// UPDATE
router.patch('/:id', hasAuth, (req, res, next) => {
  const { id } = req.params;
  const { slug, name, text, duration, host, user, password, secure } = req.body;

  const account = {
    slug,
    name,
    text,
    duration: Number(duration),
    credentials: {
      host,
      user,
      password,
      secure: Boolean(secure)
    }
  };

  Account.findByIdAndUpdate(id, account, { new: true })
    .then(account => {
      res.status(200).json(account);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// DELETE
router.delete('/:id', hasAuth, (req, res, next) => {
  const { id } = req.params;

  Account.findByIdAndDelete(id)
    .then(account => {
      res.status(200).json(account);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
