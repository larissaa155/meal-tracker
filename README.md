# Meal Tracker
A meal tracking web application that calculates personalized calorie and macronutrient goals based on user input (height and age), and allows users to log their daily meals to track nutritional intake in real time.

# Features
* User input for height and age
* Automatic daily calorie & macronutrient needs calculation
* Add meals with nutrition breakdown (calories, protein, carbs, fats)
* Real-time progress toward daily nutritional goals
* Data stored in the MongoDB database
* Responsive and colorful UI using Vue.js
* Node.js + Express backend with REST API

# Tech Stack
* Frontend - Vue.js, Vite
* Backend - Node.js, Express.js
* Database - MongoDB (via Atlas)
* Tools - Git VSCode


# Project Structure
<img width="690" alt="Image 2025-05-01 at 2 24 47 PM" src="https://github.com/user-attachments/assets/efa29702-1792-4446-98c4-46f229f906a4" />



# Project Setup
* Clone the repository -
git clone https://github.com/your-username/meal-tracker.git
cd meal-tracker

* Navigate to project directory -
cd meal-tracker

* Create a .env file in the backend folder -
PORT=5000
MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/mealtracker?retryWrites=true&w=majority


* Start the server -
node server.js

* Frontend Setup -
cd frontend
npm install
npm run serve

