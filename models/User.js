const mongoose = require('mongoose');
const PLM = require('passport-local-mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = mongoose.model('User', userSchema);
