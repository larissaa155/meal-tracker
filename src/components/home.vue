<template>
    <div>
      <input v-model="height" placeholder="Height (cm)" type="number" />
      <input v-model="age" placeholder="Age" type="number" />
      <button @click="saveUserProfile">Save Profile</button>
      <div v-if="calories">
        <p>Calories: {{ calories }} kcal</p>
        <p>Protein: {{ protein }} g</p>
        <p>Carbs: {{ carbs }} g</p>
        <p>Fat: {{ fat }} g</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        height: '',
        age: '',
        calories: null,
        protein: null,
        carbs: null,
        fat: null,
      };
    },
    methods: {
      async saveUserProfile() {
        try {
          const response = await axios.post('http://localhost:5000/api/user', {
            height: this.height,
            age: this.age,
          });
          this.calories = response.data.calories;
          this.protein = response.data.protein;
          this.carbs = response.data.carbs;
          this.fat = response.data.fat;
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  