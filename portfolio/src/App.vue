<template>
  <div id="app">
    <IntroPage />
    <Description />
    <ExperiencePage />
    <SkillSetPreview />
  </div>
</template>

<script>
import IntroPage from './components/IntroPage.vue';
import Description from './components/Description.vue';
import ExperiencePage from './components/ExperiencePage.vue';
import SkillSetPreview from './components/SkillSetPreview.vue';

export default {
  name: 'App',
  components: {
    IntroPage,
    Description,
    ExperiencePage,
    SkillSetPreview
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