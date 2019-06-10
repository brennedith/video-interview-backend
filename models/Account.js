const mongoose = require('mongoose');

const { Schema } = mongoose;

const accountSchema = new Schema(
  {
    slug: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true,
      default: 15
    },
    credentials: {
      host: {
        type: String,
        required: true
      },
      user: {
        type: String,
        required: true
      },
      password: {
        type: String,
        require: true
      },
      secure: {
        type: Boolean,
        required: true,
        default: true
      }
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Account', accountSchema);
