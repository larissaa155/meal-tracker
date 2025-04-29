<template>
    <div class="page tracker-page">
      <h1>Start Tracking Your Meals!🌞</h1>
      <form @submit.prevent="addFood">
        <input v-model="newFood.name" type="text" placeholder="Food name" required />
        <input v-model.number="newFood.calories" type="number" placeholder="Calories" required />
        <button type="submit">Add Food</button>
      </form>
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
      <ul>
        <li v-for="(item, index) in foodList" :key="index">
          {{ item.name }} - {{ item.calories }} cal
        </li>
      </ul>
    </div>
  </template>
  <script>
  export default {
    name: 'TrackerPage',
    data() {
      return {
        foodList: [],
        newFood: {
          name: '',
          calories: 0
        },
        goalCalories: 1700
      };
    },
    computed: {
      totalCalories() {
        return this.foodList.reduce((total, item) => total + item.calories, 0);
      },
      progress() {
        return Math.min((this.totalCalories / this.goalCalories) * 100, 100);
      }
    },
    methods: {
      addFood() {
        this.foodList.push({ ...this.newFood });
        this.newFood.name = '';
        this.newFood.calories = 0;
      }
    }
  };
  </script>
  