<template>
  <div id="app">
    <!-- Add the Intro component -->
    <IntroPage />
  </div>
</template>

<script>
import IntroPage from './components/IntroPage.vue';

export default {
  name: 'App',
  components: {
    IntroPage,
  },
};
</script>

<style>
/* Add global styles if needed */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
#app {
  /* Add styles for the main app container */
}
</style>