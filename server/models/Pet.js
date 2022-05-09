const mongoose = require('mongoose');

const { Schema } = mongoose;

const petSchema = new Schema({
  owner: {
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
    type: String,
    required: true,
    enum: ["Healthy", "Special Care", "HC"],
  },
  sociability: {
    type: String,
    required: true,
    enum: ["Social", "Asocial", "Loner"],
  },
  ratings: [
    {
    type: Number
    }
  ]
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
