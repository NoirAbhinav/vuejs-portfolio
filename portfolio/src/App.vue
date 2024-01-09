<template>
  <div id="app">
    <IntroPage :data="data.IntroPage" />
    <Description :data="data.Description" />
    <ExperiencePage :education="data.Experience.education" :professional="data.Experience.professional" />
    <SkillSetPreview :skills="data.Skills" />
  </div>
</template>

<script>
import jsonData from '@/data.json';
import IntroPage from './components/IntroPage.vue';
import Description from './components/Description.vue';
import ExperiencePage from './components/ExperiencePage.vue';
import SkillSetPreview from './components/SkillSetPreview.vue';

export default {
  name: 'App',
  data() {
    return {
      data: jsonData,
    };
  },
  components: {
    IntroPage,
    Description,
    ExperiencePage,
    SkillSetPreview,
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