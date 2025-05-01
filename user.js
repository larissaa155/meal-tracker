const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  height: Number,
  age: Number,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
});

module.exports = mongoose.model('User', UserSchema);
