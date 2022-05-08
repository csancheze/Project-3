const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const petSchema = require('./Pet');
const eventSchema = require('./Event');




const petOwnerSchema = new Schema({

  _id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  petsOwned: [petSchema],

  eventsOwned: [
    {
      type: Schema.Types.ObjectId,
      ref: 'eventSchema'
    }
  ],
});

const PetOwner = mongoose.model('PetOwner', petOwnerSchema);

module.exports = PetOwner;
