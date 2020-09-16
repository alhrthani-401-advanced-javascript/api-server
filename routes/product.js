'use strict';

const express = require('express');
const product = require('../lib/models/products/products-collection.js');
const productRouter = express.Router();

productRouter.get('/products', getProduct);

productRouter.get('/products/:id', getProduct);

productRouter.post('/products', postProduct);

productRouter.put('/products/:id', putProduct);

productRouter.delete('/products/:id', deleteProduct);


function getProduct(req, res, next) {
    const id = req.params.id;
    product.get(id).then(data => {
        res.status(200).json(data);
    }).catch(next);
}

function postProduct(req, res, next) {
    console.log("req.body >>> ",req.body)
    product.create(req.body).then(data=>{
        res.status(201).json(data);
    }).catch(err=> {
        // or do .catch(next) like the getFood function
        console.log(err);
        next(err);
    });
}

function putProduct(req, res, next) {
    console.log("req.body >>> ",req.body)
    product.update(req.params.id,req.body).then(data=>{
        res.status(201).json(data);
    }).catch(err=> {
        // or do .catch(next) like the getFood function
        console.log(err);
        next(err);
    });
}

function deleteProduct(req, res, next) {
    console.log("req.body >>> ",req.body)
    product.delete(req.params.id).then(data=>{
        res.status(201).json(data);
    }).catch(err=> {
        // or do .catch(next) like the getFood function
        console.log(err);
        next(err);
    });
}

module.exports = productRouter;