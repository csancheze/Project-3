const mongoose = require('mongoose');

const { Schema } = mongoose;

const typeOfPetSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const TypeOfPet = mongoose.model('TypeOfPet', typeOfPetSchema);

module.exports = TypeOfPet;
