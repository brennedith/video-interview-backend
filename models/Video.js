const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const videoSchema = new Schema(
  {
    key: {
      type: String,
      unique: true,
      required: true
    },
    account: {
      type: ObjectId,
      ref: 'Account',
      required: true
    },
    filepath: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Video', videoSchema);
