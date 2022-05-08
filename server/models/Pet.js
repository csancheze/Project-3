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
  size: {
    type: String,
    required: true,
    enum: ["Big", "Medium", "Small"],
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  health: {
    type: Schema.Types.ObjectId,
    ref: 'Health'
  },
  sociability: {
    type: Schema.Types.ObjectId,
    ref: 'Sociability'
  },
  ratings: [
    {
    type: Number
    }
  ]
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
