const http = require('http');
const express = require('express');
const app=express();

const hostname = '127.0.0.1';
const port = 3000;
const indexRouteController=require('./routes/indexRoute');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World 2');
});
app.use('/', indexRouteController);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});