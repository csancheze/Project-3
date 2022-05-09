const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const rangeOfDaysSchema = new Schema({
  start: {
    type: Date,
    // get: (timestamp) => dateFormat(timestamp),
  },
  end:{
    type: Date,
    // get: (timestamp) => dateFormat(timestamp),
  }
});

const RangeOfDays = model('RangeOfDays', rangeOfDaysSchema); 

module.exports = RangeOfDays;