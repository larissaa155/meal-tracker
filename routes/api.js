const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Meal = require('../models/Meal');
const { calculateNeeds } = require('../utils/calculator');

// Save user and return daily needs
router.post('/user', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  const result = calculateNeeds(req.body);
  res.json(result);
});

// Log a meal
router.post('/meal', async (req, res) => {
  const meal = new Meal(req.body);
  await meal.save();
  res.json({ message: 'Meal added' });
});

// Get meal summary for dashboard
router.get('/summary/:userId', async (req, res) => {
  const meals = await Meal.find({ userId: req.params.userId });
  const summary = meals.reduce((acc, meal) => {
    acc.calories += meal.calories;
    acc.protein += meal.protein;
    acc.carbs += meal.carbs;
    acc.fat += meal.fat;
    return acc;
  }, { calories: 0, protein: 0, carbs: 0, fat: 0 });

  res.json(summary);
});

module.exports = router;
