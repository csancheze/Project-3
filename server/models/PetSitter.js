const mongoose = require('mongoose');

const { Schema } = mongoose;


const petSitterSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String
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
  socialReady: [ {
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

  daysOff: [
    {
      type: Schema.Types.ObjectId,
      ref: 'RangeOfDays'
    }
  ],

  eventsOffered: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ],
});

const PetSitter = mongoose.model('PetSitter', petSitterSchema);

module.exports = PetSitter;
