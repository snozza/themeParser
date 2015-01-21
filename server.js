var http = require('http');
var utils = require('util');
var Twit = require('twit');
var config1 = require('./node_modules/twit/config1');
var request = require('request')

function wordGrab() {
  http.get('http://randomword.setgetgo.com/get.php', function(res) {
    res.on('data', function(buf) {
      var msg = String(buf);
      if (msg.indexOf('\n')) {
        console.log(msg.slice(0, -1));
        twit.get('search/tweets', { q: msg.slice(0, -1), count: 1 }, function(err, data, response) {
          if (data.statuses[0]) {
            sendTweet(data.statuses[0].text)
          }
        })
      }
    });
  });
}

function sendTweet(tweet) {
  request.post("http://localhost:4567/new", {form: {body: tweet}}, function(err, res, body) {
    console.log(body)
  })
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
  var twit = new Twit(config1);
  server.listen(3000, function() {
    console.log('Listening on port 3000');
    setInterval(function() {
      wordGrab()}, 10000 
    );
  });
}

