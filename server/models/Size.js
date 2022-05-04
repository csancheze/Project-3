const mongoose = require('mongoose');

const { Schema } = mongoose;

const sizeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Size = mongoose.model('Size', sizeSchema);

module.exports = Size;

/* 
small
Medium
Large
Extra Large
*/
