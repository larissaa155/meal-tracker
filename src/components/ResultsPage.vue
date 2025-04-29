<template>
  <div class="page results-page">
    <h1>Your Health Summary</h1>

    <div v-if="bmi">
      <p><strong>BMI:</strong> {{ bmi.toFixed(1) }}</p>
      <p><strong>Calories/day:</strong> {{ calories }}</p>
      <p><strong>Protein:</strong> {{ macros.protein }}g</p>
      <p><strong>Carbs:</strong> {{ macros.carbs }}g</p>
      <p><strong>Fats:</strong> {{ macros.fats }}g</p>
    </div>

    <button @click="$router.push({ name: 'Tracker' })">Track Meals</button>
  </div>
</template>

<script>
export default {
  name: 'ResultsPage',
  computed: {
    bmi() {
      const h = Number(this.$route.query.height);
      const w = Number(this.$route.query.weight);
      return (w / (h * h)) * 703;
    },
    calories() {
      return Math.round(this.$route.query.weight * 15);
    },
    macros() {
      const cals = this.calories;
      return {
        protein: Math.round((cals * 0.3) / 4),
        carbs: Math.round((cals * 0.4) / 4),
        fats: Math.round((cals * 0.3) / 9)
      };
    }
  }
};
</script>
