const mongoose = require('mongoose');

const { Schema } = mongoose;

const sociabilitySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Sociability = mongoose.model('Sociability', sociabilitySchema);

module.exports = Sociability;

/*
Asocial
Social
*/