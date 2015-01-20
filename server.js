var http = require('http');
var utils = require('util');
var Twit = require('twit');
var config1 = require('./node_modules/twit/config1')

function wordGrab() {
  http.get('http://randomword.setgetgo.com/get.php', function(res) {
    res.on('data', function(buf) {
      var msg = String(buf);
      if (msg.indexOf('\n'))
        console.log(msg.slice(0, -1));
    });
  });
}

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

module.exports = server;

if (!module.parent) {
  server.listen(3000, function() {
    console.log('Listening on port 3000');
    setInterval(function() {
      wordGrab()}, 10000 
    );
  });
}

