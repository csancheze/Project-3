const { Schema } = require('mongoose');

const RangeOfDays = require('./RangeOfDays')

const eventSchema = new Schema({
  eventId: {
    type: String,
    required: true,
  }, 

 username: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'petSchema'
    }
  ],
  petSitter: {
    type: Schema.Types.ObjectId,
    ref: 'PetSitter'
  },

  daysOfEvent:[RangeOfDays],

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
    type:String,
  } ],

  petSitterRating: {
    type: Number
  }
});


module.exports = eventSchema;
