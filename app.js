const http = require('http');
const express = require('express');
const app=express();

const hostname = '127.0.0.1';
const port = 3000;
const indexRouteController=require('./routes/indexRoute');

const server = http.createServer(app);

app.use('/', indexRouteController);
server.listen(port, hostname, () => {
  console.log('Server running at http://${hostname}:${port}/');
});
