const { Schema } = require('mongoose');

const rangeOfDaysSchema = new Schema({
  start: {
    type: Date
  },
  end:{
    type: Date
  }
});

const RangeOfDays = mongoose.model('RangeOfDays', rangeOfDaysSchema); 

module.exports = RangeOfDays;
