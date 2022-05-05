const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const RangeOfDays = require('./RangeOfDays')

const petSitterSchema = new Schema({
 username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
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

  daysOff:[RangeOfDays],

  eventsOffered: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ],
});

// set up pre-save middleware to create password
petSitterSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
petSitterSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const PetSitter = mongoose.model('PetSitter', petSitterSchema);

module.exports = PetSitter;
