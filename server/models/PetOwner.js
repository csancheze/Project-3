const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');


const petOwnerSchema = new Schema({

  _id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String
  },

  petsOwned:  [
    {
      type: Schema.Types.ObjectId,
      ref: 'Pet'
    }
  ],

  eventsOwned: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ],
});

const PetOwner = mongoose.model('PetOwner', petOwnerSchema);

module.exports = PetOwner;
