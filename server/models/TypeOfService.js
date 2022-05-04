const mongoose = require('mongoose');

const { Schema } = mongoose;

const typeOfServiceSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const TypeOfService = mongoose.model('TypeOfService', typeOfServiceSchema);

module.exports = TypeOfService;

/*
Baths
Walks
Photos and Videos
Garden
*/