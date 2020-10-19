'use strict';

const express = require('express');
const router = express.Router();

const category = require('../lib/models/categories/categories-collection.js');
const product = require('../lib/models/products/products-collection.js');
const todo = require('../lib/models/todos/todos-collection.js');



router.get('/api/v1/:model', handleGetAllItems);
router.post('/api/v1/:model', handlePostItem);
router.put('/api/v1/:model/:id', handlePutItem);
router.delete('/api/v1/:model/:id', handleDeleteItem);


router.param('model', getModel);


// How will we get the right Model? 
/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
function getModel(req, res, next) {
  let model = req.params.model;
  switch (model) {
  case 'categories':
    req.model = category;
    next();
    break;
  case 'products':
    req.model = product;
    next();
    break;
    case 'todos':
      req.model = todo;
      next();
      break;
  default:
    next('Invalid Model!!! ');
    break;
  }
}
/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
function handleGetAllItems(req, res, next) {
  console.log('req.model: ', req.model);
  req.model.get().then(results => {
    let count = results.length;
    res.json({ count, results });
  });
}
/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
function handlePostItem(req, res, next) {
  req.model.create(req.body).then(result => {
    res.json(result);
  }).catch(next);
}
/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
function handlePutItem(req, res, next) {
  req.model.update(req.params.id, req.body).then(result => {
    res.json(result);
  }).catch(next);
}
/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {next} next 
 */
function handleDeleteItem(req, res, next) {
  console.log('param id: ', req.params.id);
  req.model.delete(req.params.id).then(result => {
    res.json(result);
  }).catch(next);
}

module.exports = router;