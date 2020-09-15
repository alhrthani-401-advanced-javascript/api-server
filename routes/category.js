'use strict';

const express = require('express');
const category = require('../lib/models/categories/categories-collection.js');
const categoryRouter = express.Router();

categoryRouter.get('/categories', getCategory);

categoryRouter.get('/categories/:id', getCategory);

categoryRouter.post('/categories', postCategory);

categoryRouter.put('/categories/:id', putCategory);

categoryRouter.delete('/categories/:id', deleteCategory);


function getCategory(req, res, next) {
    const id = req.params.id;
    category.get(id).then(data => {
        res.status(200).json(data);
    }).catch(next);
}

function postCategory(req, res, next) {
    console.log("req.body >>> ",req.body)
    category.create(req.body).then(data=>{
        res.status(201).json(data);
    }).catch(err=> {
        // or do .catch(next) like the getFood function
        console.log(err);
        next(err);
    });
}

function putCategory(req, res, next) {
    console.log("req.body >>> ",req.body)
    category.update(req.params.id,req.body).then(data=>{
        res.status(201).json(data);
    }).catch(err=> {
        // or do .catch(next) like the getFood function
        console.log(err);
        next(err);
    });
}

function deleteCategory(req, res, next) {
    console.log("req.body >>> ",req.body)
    category.delete(req.params.id).then(data=>{
        res.status(201).json(data);
    }).catch(err=> {
        // or do .catch(next) like the getFood function
        console.log(err);
        next(err);
    });
}
















module.exports = categoryRouter;