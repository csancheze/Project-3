const mongoose = require('mongoose');

const { Schema } = mongoose;

const petSchema = new Schema({
  human: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  Size: {
    type: Schema.Types.ObjectId,
    ref: 'Size',
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  health: {
    type: Schema.Types.ObjectId,
    ref: 'Health',
    required: true
  },
  sociability: {
    type: Schema.Types.ObjectId,
    ref: 'Sociability',
    required: true
  },
  ratings: [
    {
    type: Number
    }
  ]
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
