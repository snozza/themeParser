var mongoose = require('mongoose');
var Scheme = mongoose.Schemaa;

var TweetSchema = new Schema({
  _id: String,
  createdAt: Date, 
  content: String, 
  longitude: Number, 
  latitude: Number, 
  userId: String, 
  username: String
});

module.exports = mongoose.model('Tweet', TweetSchema);