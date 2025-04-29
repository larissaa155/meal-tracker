<template>
  <div class="page input-page">
    <h1>Meal Tracker</h1>
    <p>Enter your height and weight:</p>

    <form @submit.prevent="goToResults">
      <input v-model.number="height" type="number" placeholder="Height" required />
      <input v-model.number="weight" type="number" placeholder="Weight" required />
      <button type="submit">See My Results</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'InputPage',
  data() {
    return {
      height: '',
      weight: ''
    };
  },
  methods: {
    goToResults() {
      this.$router.push({
        name: 'Results',
        query: {
          height: this.height,
          weight: this.weight
        }
      });
    }
  }
};
</script>
