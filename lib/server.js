'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const router = require('../routes/api.js');
// const productRoutes = require('../routes/product.js');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


const logger = require('./middleware/logger.js');
const timeStamp = require('./middleware/timeStamp.js');
const handle404 = require('./middleware/404.js');
const handle500 = require('./middleware/500.js');

require('dotenv').config();

// Global MiddleWare : app.use on the level of my application
app.use(express.json());

app.use(timeStamp);
app.use(logger);

//app.use('/api/v1', categoryRoutes);
app.use('/', router);
//app.use('/api/v1', productRoutes);
// app.use('/', productRoutes);

app.use(handle404);
app.use(handle500);

module.exports = {
  server: app,
  start: PORT => {
    PORT = process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  },
};