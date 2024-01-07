<template>
    <AnimationCommon name="fadeDown" :duration="0.5" class="skillset-title">
        <DescriptionTitle :header="'My Skills'" />
    </AnimationCommon>
    <AnimationCommon name="fadeDown" :duration="0.5" class="skill">
        <SkillSet />
    </AnimationCommon>
</template>
  
<script>
import AnimationCommon from './AnimationCommon.vue';
import DescriptionTitle from './DescriptionTitle.vue';
import SkillSet from './SkillSet.vue';
export default {
    components: {
        SkillSet,
        AnimationCommon,
        DescriptionTitle
    },
};
</script>
  
<style>
.skillset-title {
    color: black;
    margin-top: 50px;
}
</style>
  