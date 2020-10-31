'use strict';

const mongoose = require('mongoose');

const product = mongoose.Schema({    
  category: { type: String,required:true},
  name: {type: String, required: true},
  description: {type: String, required: true},
  img: {type: String, required: true},
  price: {type: Number, required: true},
  inStock: {type: Number, required: true},
  display_name: {type: String, required: false},


});

module.exports = mongoose.model('product', product);