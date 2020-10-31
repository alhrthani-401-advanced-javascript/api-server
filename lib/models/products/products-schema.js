'use strict';

const mongoose = require('mongoose');

const product = mongoose.Schema({    
  category: { type: String,required:true},
  name: {type: String, required: true},
  description: {type: String, required: true},
  img_url: {type: String, required: true},
  price: {type: Number, required: true},
  in_stok: {type: Number, required: true},

});

module.exports = mongoose.model('product', product);


