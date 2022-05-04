const mongoose = require('mongoose');

const { Schema } = mongoose;

const healthSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Health = mongoose.model('Health', healthSchema);

module.exports = Health;

/*
healthy
sick
special needs
*/