var glob = require('glob');
var spawn = require('child_process').spawn;
var app = require('./server');

process.env.NODE_ENV = 'test';
process.env.PORT = 3000;

var server = app.listen(process.env.PORT, function() {
  process.env.URL = 'http://localhost:' + process.env.PORT;
  return glob('test', function(err, filename) {
    var child = spawn('mocha', ['--recursive'].concat(filename));
    child.stdout.on('data', function(msg) {
      return process.stdout.write(msg);
    });
    child.stderr.on('data', function(msg) {
      return process.stderr.write(msg);
    });
    return child.on('exit', function(code) {
      return process.exit(code);
    });
  });
});