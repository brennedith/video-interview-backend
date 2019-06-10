var express = require('express');
var router = express.Router();

// CREATE
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// READ
// UPDATE
// DELETE

module.exports = router;
