<template>
  <div id="app">
    <!-- Add the Intro component -->
    <IntroPage />
    <Description />
  </div>
</template>

<script>
import IntroPage from './components/IntroPage.vue';
import Description from './components/Description.vue';

export default {
  name: 'App',
  components: {
    IntroPage,
    Description,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

#app {
  font-family: 'Montserrat', sans-serif;
}
</style>