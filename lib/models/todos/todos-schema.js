'use strict';

const mongoose = require('mongoose');

const todo = mongoose.Schema({  
  item: { type: String,required:true},
  difficulty: { type: Number,required:true},
  time: { type: String,required:true},
  assignedto: { type: String,required:true},
  complete  : { type: Boolean,required:true},


});

module.exports = mongoose.model('todo', todo);


