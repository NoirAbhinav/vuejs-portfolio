<template>
    <div class="about-me">
        <p v-html="aboutText" class="about-paragraph"></p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            aboutText: "I am a recent graduate in Computer Science specializing in Cyber-Physical Systems. Currently, I am leveraging my skills as a Backend Engineer/Data Scientist at Affinsys AI, where I contribute to crafting scalable campaign management and recommendation systems. My journey in technology began at 16, sparking an enduring passion that led me to pursue this dynamic career.<br><br>My approach to learning has always been hands-on, delving into various projects to grasp new concepts swiftly. I've dived into areas that initially held minimal appeal, such as backend development using frameworks like Django and FastAPI, web development employing Vue.js and React, and even ventured into DevOps with Docker, Grafana, and Prometheus. This portfolio stands as a testament to my commitment to mastering diverse skill sets. Embracing challenges is second nature to me; each hurdle presents an opportunity to learn, fostering continuous growth and innovation in my work."
        };
    }
};
</script>
  
<style>
.about-me {
    padding: 20px;
    padding-right: 60px;
    width: 60%;
    /* Using Montserrat font */
    font-weight: 500;
    font-size: 14px;
    color: #333;
    text-align: left;
}
</style>
  