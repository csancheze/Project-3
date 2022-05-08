const { Schema } = require('mongoose');


const petSchema = new Schema({
   name: {
    type: String,
    required: true,
    trim: true
  },
  size: {
    type: String,
    required: true,
    enum: ["Big", "Medium", "Small"],
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  health: {
    type: Schema.Types.ObjectId,
    ref: 'Health'
  },
  sociability: {
    type: Schema.Types.ObjectId,
    ref: 'Sociability'
  },
  ratings: [
    {
    type: Number
    }
  ]
});


module.exports = petSchema;
