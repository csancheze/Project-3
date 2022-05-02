const mongoose = require('mongoose');

const { Schema } = mongoose;

const statusSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Status = mongoose.model('Status', statusSchema);

module.exports = Status;
