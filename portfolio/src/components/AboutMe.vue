<template>
    <AnimationCommon name="fadeDown" :duration="1" class="about">
        <div class="about-me">
            <h3>About Me</h3>
            <p class="description">{{ description }}</p>
        </div>
    </AnimationCommon>
</template>
  
<script>
import 'vue2-animate/dist/vue2-animate.min.css';
import AnimationCommon from './AnimationCommon.vue';

export default {
    data() {
        return {
            description: "I'm a passionate developer excited about creating meaningful projects!",
            isScrolledIn: false,
        };
    },
    components: { AnimationCommon }
};
</script>
  
<style scoped>
.about {
    height: 20vh;
}

.about-me {
    text-align: center;

}

.about-me h2 {
    font-size: 28px;
    margin-bottom: 10px;
    color: #000;
}

.about-me .description {
    font-size: 16px;
    color: #000;
}

/* Apply the animation classes from vue2-animate */
.fadeRight {
    animation-duration: 1s;
}
</style>
  