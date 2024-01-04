<template>
  <div id="app">
    <!-- Add the Intro component -->
    <IntroPage />
    <AboutMe />
  </div>
</template>

<script>
import IntroPage from './components/IntroPage.vue';
import AboutMe from './components/AboutMe.vue';

export default {
  name: 'App',
  components: {
    IntroPage,
    AboutMe,
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
  @import "@/styles/global.scss";
  /* Add styles for the main app container */
}
</style>