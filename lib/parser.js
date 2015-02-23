var http = require('http');
var Twit = require('twit');
var config1 = require('../node_modules/twit/config1');
var request = require('request');
var twit = new Twit(config1);

module.exports = {

  wordGrab: function() {
    http.get('http://randomword.setgetgo.com/get.php', function(res) {
      res.on('data', function(buf) {
        var msg = String(buf);
        console.log(msg);
        if (msg.indexOf('\n')) {
          twit.get('search/tweets', { q: msg.slice(0, -1), count: 1 }, function(err, data, response) {
            if (data.statuses[0] && data.statuses[0].coordinates != null) {
              sendTweet(data.statuses[0].text)
            }
          })
        }
      });
    });
  },

  sendTweet: function(tweet) {
    request.post("http://localhost:4567/new", {form: {body: tweet}}, function(err, res, body) {
      console.log(body)
    })
  }
};