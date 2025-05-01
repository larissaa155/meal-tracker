<template>
  <div class="home">
    <h1>Welcome to the Meal Tracker!</h1>
    <div class="form-container">
      <h2>Enter Your Information</h2>
      <input
        v-model="height"
        type="number"
        placeholder="Height (cm)"
        required
        class="input-field"
      />
      <input
        v-model="age"
        type="number"
        placeholder="Age"
        required
        class="input-field"
      />
      <button @click="submitProfile" class="submit-btn">
        Calculate Calorie Needs
      </button>

      <div v-if="calories">
        <h3>Your Daily Needs</h3>
        <p><strong>Calories:</strong> {{ calories }} kcal</p>
        <p><strong>Protein:</strong> {{ protein }} g</p>
        <p><strong>Carbs:</strong> {{ carbs }} g</p>
        <p><strong>Fat:</strong> {{ fat }} g</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      height: "",
      age: "",
      calories: null,
      protein: null,
      carbs: null,
      fat: null,
    };
  },
  methods: {
    async submitProfile() {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/user", 
          {
            height: this.height,
            age: this.age,
          }
        );
        
        this.calories = response.data.calories;
        this.protein = response.data.protein;
        this.carbs = response.data.carbs;
        this.fat = response.data.fat;
      } catch (error) {
        console.error("Error submitting profile:", error);
      }
    },
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

.form-container {
  margin: 0 auto;
  max-width: 400px;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-btn {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.submit-btn:hover {
  background-color: #218838;
}

h3 {
  margin-top: 20px;
  color: #333;
}
</style>
