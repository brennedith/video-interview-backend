require('dotenv').config();

const mongoose = require('../database');
const User = require('../models/User');

User.register(
  {
    email: process.env.ADMIN_EMAIL,
    name: process.env.ADMIN_NAME || ''
  },
  process.env.ADMIN_PASSWORD
)
  .then(user => {
    console.log('Admin user created successfully');
    console.log(`Admin email: ${user.email}`);

    closeConnection();
  })
  .catch(error => {
    console.log('There was an error creating admin user');
    console.log(error.message);

    closeConnection();
  });

function closeConnection() {
  mongoose.disconnect();
}
