const { Schema } = require('mongoose');


const rangeOfDaysSchema = new Schema({
  start: {
    type: Date
  },
  end:{
    type: Date
  }
});


module.exports = rangeOfDaysSchema;
