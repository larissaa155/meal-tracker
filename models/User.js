const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  age: Number,
  height: Number,
  weight: Number,
  gender: String,
  activity: String,
});

module.exports = mongoose.model('User', UserSchema);
