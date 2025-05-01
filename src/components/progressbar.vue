<template>
    <div>
      <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['progress'],
  };
  </script>
  
  <style>
  .progress-bar {
    height: 20px;
    background-color: green;
  }
  </style>
  