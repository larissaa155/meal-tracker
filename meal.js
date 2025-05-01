const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  date: Date,
});

module.exports = mongoose.model('Meal', MealSchema);
