'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');
const timeStamp = require('./middleware/timeStamp.js');
const handle404 = require('./middleware/404.js');
const handle500 = require('./middleware/500.js');
let categoriesArray=[
    {"id":"1", "name":"cat1", "display_name":"category1", "description":"category one"},
    {"id":"2", "name":"cat2", "display_name":"category2", "description":"category two"}];
let productsArray=[
    {"id":"1", "category":"cat1", "name":"prod1", "display_name":"product1", "description":"product one"},
    {"id":"2", "category":"cat1", "name":"prod2", "display_name":"product2", "description":"product two"}];

require('dotenv').config()

// Global MiddleWare : app.use on the level of my application
app.use(express.json());

app.use(timeStamp);
app.use(logger);



/**********products routes*****************/
//uses the object in the body of the request to create a new “record”
app.post('/products', (req, res) => {
    console.log("req.body>>>>> ",req.body);
    productsArray.push(req.body)
    res.send('Done');
})

app.get('/products', (req, res) => {
    res.send(productsArray);
})

app.get('/products/:id', (req, res) => {
    let id=req.params.id;
    let result;
    productsArray.forEach((product)=>{
        if(product.id==id){
            result=product;
        }}) 
        res.send(result);
})

//uses the object in the body to replace the record with the :id specified
app.put('/products/:id', (req, res) => {
    let id=req.params.id;
    let result;
    let newProduct=req.body;
    productsArray.forEach((product,index)=>{
        if(product.id==id){
            productsArray[index]=newProduct;            
            result=productsArray[index];
        }}) 
        res.send(result);
})

//deletes the record with the :id
app.delete('/products/:id', (req, res) => {
    let id=req.params.id;
    productsArray.forEach((product,index)=>{
        if(product.id==id){
            delete productsArray[index];         
        }}) 
        res.send('Deleted');
})


/**********categories routes*****************/
//uses the object in the body of the request to create a new “record”
app.post('/categories', (req, res) => {
    categoriesArray.push(req.body)
    res.send('done');
   })

app.get('/categories', (req, res) => {
    res.send(categoriesArray);
})

app.get('/categories/:id', (req, res) => {
    let id=req.params.id;
    let result;
    categoriesArray.forEach((category)=>{
        if(category.id==id){
            result=category;
        }})  
    res.send(result);
})

//uses the object in the body to replace the record with the :id specified
app.put('/categories/:id', (req, res) => {
    let id=req.params.id;
    let result;
    let newCategory=req.body;
    categoriesArray.forEach((category,index)=>{
        if(category.id==id){
            categoriesArray[index]=newCategory;            
            result=categoriesArray[index];
        }}) 
        res.send(result);
})

//deletes the record with the :id
app.delete('/categories/:id', (req, res) => {
    let id=req.params.id;
    categoriesArray.forEach((category,index)=>{
        if(category.id==id){
            delete categoriesArray[index];         
        }}) 
        res.send('Deleted');
})



app.use(handle404);
app.use(handle500);


// 404 page not found
// app.use('*', notFoundHandler);
// app.use(errorHandler);



  


module.exports = {
    server: app, 
    start: PORT => {
        PORT=process.env.PORT||8080;
        app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))
    }
};