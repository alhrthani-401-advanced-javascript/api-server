'use strict';

// run ther server and connect to DB

const mongoose = require('mongoose');
const server = require('./lib/server');

// connection details should be .env file
// const MONGOOSE_URL = process.env.MONGOOSE_URL;

// const mongooseOptions = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
// };

// mongoose.connect(MONGOOSE_URL, mongooseOptions);

// connect to cloud DB
// const MONGOOSE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/hopes'; 

const uri = "mongodb+srv://ahmad:hopes2020@cluster0.vagkk.mongodb.net/todos?retryWrites=true&w=majority";
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MongoDB Connected…')
    })
    .catch(err => console.log(err))


server.start(4000);
