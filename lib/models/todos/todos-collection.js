'use strict';

const schema = require('./todos-schema.js');
const Model = require('../mongo-model.js');

class Todo extends Model {
  constructor() {
    super(schema);
  }
   
}

module.exports = new Todo();