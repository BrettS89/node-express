const express = require('express');
const app = express();

const artistRoutes = require('./routes/artist');

app.use('/artist', artistRoutes);

app.get('/', (req, res) => {
  res.send('api');
});

module.exports = app;
