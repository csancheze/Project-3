const mongoose = require('mongoose');

const { Schema } = mongoose;

const RangeOfDays = require('./RangeOfDays')

const eventSchema = new Schema({
 username: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Pet'
    }
  ],
  petSitter: {
    type: Schema.Types.ObjectId,
    ref: 'PetSitter'
  },

  daysOfEvent:[RangeOfDays.schema],

  price: {
    type: Number,
    required: true,
    min: 0.99
  },

  status: {
    type: Schema.Types.ObjectId,
    ref: 'Status'
  },

  petsRating: [ {
    type:Number,
  } ],
  petSitterRating: {
    type: Number
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
