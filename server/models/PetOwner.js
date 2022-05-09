const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Pet = require('./Pet');
const eventSchema = require('./Event');




const petOwnerSchema = new Schema({

  _id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
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
      ref: 'eventSchema'
    }
  ],
});

const PetOwner = mongoose.model('PetOwner', petOwnerSchema);

module.exports = PetOwner;
