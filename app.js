const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const auth = require('./auth');

const app = express();

app.use(
  session({
    secret: process.env.SECRET,
    cookie: {
      maxAge: 60 * 60 * 1000 // 1 Hour
    },
    resave: true,
    saveUninitialized: false
  })
);
app.use(auth.initialize());
app.use(auth.session());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/video', require('./routes/video'));
app.use('/api/account', require('./routes/account'));
app.get('*', (req, res, next) =>
  res.sendFile(path.join(__dirname + '/public/index.html'))
);

module.exports = app;
