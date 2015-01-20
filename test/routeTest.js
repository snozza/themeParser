var expect = require('chai').expect
var http = require('http');

describe('Correct responses from routes', function() {
  
  it('returns ok for for get request to homepage', function(done) {
    http.get('http://localhost:3000', function(res) {
      var string = ''
      res.on('data', function(buf) {
        string += buf;
      }).on('end', function() {
        expect(res.statusCode).to.eql(200);
        expect(string).to.eql('Hello, World!');
        done()
      })
    });
  });

  it('returns error header for get request to other pages', function(done) {
    http.get('http://localhost:3000/uhoh', function(res) {
      expect(res.statusCode).to.eql(404);
      done();
    });
  });
});