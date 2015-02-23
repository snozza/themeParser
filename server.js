var http = require('http');
var utils = require('util');
var mongoose = require('mongoose');
var wordGrab = require('./lib/parser').wordGrab;

var dbURI = process.env.MONGOHQ_URL || 'mongodb://localhost/twitter_development'
var db = mongoose.connect(dbURI);


var server = http.createServer(function(req, res) {
  if (req.method === 'GET') {
    if (req.url === '/') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('Hello, World!');
    res.end();
    } else if (req.url == '/fun') {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.end('Well...you wanted this page');
    } else {
      res.writeHead(404, {'Content-Type' : 'text/html'});
      res.end('Oops! Diddy not found');
    }
  }
});

if (!module.parent) {
  server.listen(3000, function() {
    console.log('Listening on port 3000');
    setInterval(function() {
      wordGrab()}, 20000 
    );
  });
}

module.exports = server;

