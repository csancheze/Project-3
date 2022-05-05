const { Schema } = require('mongoose');


const petSchema = new Schema({
  petId: {
    type: String,
    required: true,
  }, 
   name: {
    type: String,
    required: true,
    trim: true
  },
  size: {
    type: Schema.Types.ObjectId,
    ref: 'Size',
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  health: {
    type: Schema.Types.ObjectId,
    ref: 'Health',
    required: true
  },
  sociability: {
    type: Schema.Types.ObjectId,
    ref: 'Sociability',
    required: true
  },
  ratings: [
    {
    type: Number
    }
  ]
});


module.exports = petSchema;
