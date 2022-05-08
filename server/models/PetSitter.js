const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const RangeOfDays = require('./RangeOfDays')

const petSitterSchema = new Schema({

  _id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: 'TypeOfService'
    }
  ],
  ratePerNight: {
    type: Number,
    required: true,
    min: 0.99
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  sizes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Size'
    }
  ],
  healthReady: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Health',
      required: true
    }
  ],
  socialReady: [{
    type: Schema.Types.ObjectId,
    ref: 'Sociability',
    required: true
  }
  ],
  ratings: [
    {
      type: Number
    }
  ],
  availability: {
    type: Boolean,
    require: true,
    default: false,
  },

  daysOff: [RangeOfDays],

  eventsOffered: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ],
});

const PetSitter = mongoose.model('PetSitter', petSitterSchema);

module.exports = PetSitter;
