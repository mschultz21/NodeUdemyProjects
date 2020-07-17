const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('It\'s the first middleware');
  next();
});

app.use((req, res, next) => {
  console.log('It\'s the second middleware');
  next();
});

app.use('/users', (req, res, next) => {
  res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello</h1>');
});

app.listen(3000);