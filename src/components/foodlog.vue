<template>
    <div>
      <input v-model="mealName" placeholder="Meal Name" />
      <input v-model="mealCalories" placeholder="Calories" type="number" />
      <input v-model="mealProtein" placeholder="Protein (g)" type="number" />
      <input v-model="mealCarbs" placeholder="Carbs (g)" type="number" />
      <input v-model="mealFat" placeholder="Fat (g)" type="number" />
      <button @click="logMeal">Log Meal</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        mealName: '',
        mealCalories: '',
        mealProtein: '',
        mealCarbs: '',
        mealFat: '',
      };
    },
    methods: {
      async logMeal() {
        try {
          const response = await axios.post('http://localhost:5000/api/meal', {
            name: this.mealName,
            calories: this.mealCalories,
            protein: this.mealProtein,
            carbs: this.mealCarbs,
            fat: this.mealFat,
          });
          console.log('Meal logged:', response.data);
        } catch (error) {
          console.error('Error logging meal:', error);
        }
      },
    },
  };
  </script>
  