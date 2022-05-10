const mongoose = require('mongoose');

const { Schema } = mongoose;

// const RangeOfDays = require('./RangeOfDays')

const eventSchema = new Schema({
 petOwner: {
    type: Schema.Types.ObjectId,
    ref: 'PetOwner'
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

  daysOfEvent:{
    type: Schema.Types.ObjectId,
    ref: 'RangeOfDays'
  },

  price: {
    type: Number,
    required: true,
    min: 0.99
  },

  status: {
    type: String,
    enum: ["Reserved","Confirmed","Paid","Rejected"],
    default: "Reserved"
  },

  petsRating: [ {
    type:String,
  } ],
  petSitterRating: {
    type: Number
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
