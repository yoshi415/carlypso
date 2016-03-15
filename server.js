'use strict';

const express = require('express');
const app = express();
const http = require('https');
const request = require('request');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const port = process.env.PORT || 5000;
const baseUrl = 'https://interview.carlypso.com/';

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/count', function(req, res) {
  handleReq('count', req, res)
});

app.get('/listings', function(req, res) {
  let index = req.query.offset || 10;
  let limit = req.query.limit || 8;
  let route = `listings?offset=${Number(index)}&limit=${Number(limit)}`;
  handleReq(route, req, res)
});


function handleReq(route, req, res) {
  let url = baseUrl + route;
  request.get(url, function(err, resp, body) {
    if (!err && res.statusCode === 200) {
      res.send(body);
    }
  });
} 

app.listen(port);
console.log(`Listening on localhost:${port}`);