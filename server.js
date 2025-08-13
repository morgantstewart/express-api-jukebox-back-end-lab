const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(logger('dev'));

// Import and use routes
const tracksRouter = require('./controllers/tracks');
app.use('/tracks', tracksRouter);

app.listen(3000, () => {
  console.log('The express app is ready!');
});
