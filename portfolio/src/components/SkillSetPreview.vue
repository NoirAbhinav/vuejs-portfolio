<template>
    <AnimationCommon name="fadeDown" :duration="0.5" class="skillset-title">
        <DescriptionTitle :header="skills.header" />
    </AnimationCommon>
    <AnimationCommon name="fadeDown" :duration="0.5" class="skill">
        <SkillSet :skillset="skills.skillset" />
    </AnimationCommon>
</template>
  
<script>
import AnimationCommon from './AnimationCommon.vue';
import DescriptionTitle from './DescriptionTitle.vue';
import SkillSet from './SkillSet.vue';
export default {
    props: {
        skills: {
            type: Array,
            required: true
        }
    },
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
  