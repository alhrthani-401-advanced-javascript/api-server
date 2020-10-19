'use strict';

const mongoose = require('mongoose');

const todo = mongoose.Schema({  
  text: { type: String,required:true},
  difficulty: { type: Number,required:true,default:0},
  due: { type: Date,required:true},
  assignee: { type: String,required:true},
  complete  : { type: Boolean,required:true ,default:false},

});

module.exports = mongoose.model('todo', todo);


