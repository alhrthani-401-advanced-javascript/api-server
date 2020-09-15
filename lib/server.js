'use strict';

const express = require('express');
const app = express();
const logger = require('./middleware/logger.js');
const timeStamp = require('./middleware/timeStamp.js');
const handle404 = require('./middleware/404.js');
const handle500 = require('./middleware/500.js');


require('dotenv').config()

// Global MiddleWare : app.use on the level of my application
app.use(express.json());
app.use(handle404);
app.use(handle500);
app.use(timeStamp);
app.use(logger);


/**********products routes*****************/
//uses the object in the body of the request to create a new “record”
app.post('/products', (req, res) => {
   
})

app.get('/products', (req, res) => {
    res.send('you clicked products')
})

app.get('/products/:id', (req, res) => {})

//uses the object in the body to replace the record with the :id specified
app.put('/products/:id', (req, res) => {})

//deletes the record with the :id
app.delete('/products/:id', (req, res) => {})


/**********categories routes*****************/
//uses the object in the body of the request to create a new “record”
app.post('/categories', (req, res) => {
   
})

app.get('/categories', (req, res) => {
    res.send('you clicked categories')
})

app.get('/categories/:id', (req, res) => {})

//uses the object in the body to replace the record with the :id specified
app.put('/categories/:id', (req, res) => {})

//deletes the record with the :id
app.delete('/categories/:id', (req, res) => {})


// route middleware
// we can add as many route middlewares as we want


app.get('/fruit', getBrowser, square(5), (req, res)=> {
    console.log("req.browser ----> ", req.browser);
    console.log("req.number ----> ", req.number);
    res.status(200).send('Banana');
});

app.get('/fruit', getBrowser, square(5), (req, res)=> {
    console.log("req.browser ----> ", req.browser);
    console.log("req.number ----> ", req.number);
    res.status(200).send('Banana');
});

app.get('/cat1',  response);

app.get('/cat2', (req, res)=> {
    console.log("req.number ----> ", req.number);
    res.status(200).send('Meow2');
});

function response(req,res) {
    res.status(200).send('Meow');
}

app.get('/cat', square(5) , (req,res) => {
    console.log("req.browser --->>>> ", req.browser)
    console.log("req.number ----> ", req.number);
    res.status(200).send('Meow');
});

app.get('/bad', (req, res)=> {
    throw new Error("bad Request .... ");
});

// 404 page not found
app.use('*', notFoundHandler);
app.use(errorHandler);

// GLobal Middleware on the level of my app
function notFoundHandler(req, res, next) {
    res.status(404).send('404 Not Found');
}

function getBrowser(req, res, next) {  
   req.browser =  req.headers['user-agent']; // info about my browser
   next();
}

function getTimeStamp(req, res, next) {  
    req.requestTime=2019;
    next();
 }

// curried route middleware 
function square(n) {
    return (req, res, next) => {

        if (typeof n !== "number") {
            throw new Error("custom error !!! ")
            // next("not a number !!!!");
        } else {
            req.number = n * n ;
            next();
        }
    }
}

// we have to have 4 arguments for the error Handler
function errorHandler(err, req, res, next) {
    console.log("asdasdsad ::::::: errorHandler")
    res.status(500);
    res.json({ error: err });
  }

  


module.exports = {
    server: app, 
    start: PORT => {
        PORT=process.env.PORT||8080;
        app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))
    }
};