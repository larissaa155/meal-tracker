const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const User = mongoose.model('User', new mongoose.Schema({
  height: Number,
  age: Number,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
}));

const Meal = mongoose.model('Meal', new mongoose.Schema({
  name: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  date: Date,
}));

// Routes
app.post('/api/user', async (req, res) => {
  const { height, age } = req.body;
  const calories = (height * 10) + (age * 6.25); // Simple formula for example purposes
  const protein = calories * 0.3;
  const carbs = calories * 0.4;
  const fat = calories * 0.3;

  const user = new User({ height, age, calories, protein, carbs, fat });
  await user.save();
  res.json({ calories, protein, carbs, fat });
});

app.post('/api/meal', async (req, res) => {
  const { name, calories, protein, carbs, fat } = req.body;
  const meal = new Meal({ name, calories, protein, carbs, fat, date: new Date() });
  await meal.save();
  res.json(meal);
});

app.get('/api/meal', async (req, res) => {
  const meals = await Meal.find();
  res.json(meals);
});

// Server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
