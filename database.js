const mongoose = require('mongoose');

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useCreateIndex: true },
  err => {
    if (err) return console.log(err);

    console.log('Database connection successfull');
  }
);

module.exports = mongoose;
