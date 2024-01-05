<template>
    <div class="about-me">
        <p v-html="aboutText" class="about-paragraph"></p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            aboutText: "I am a recent graduate specializing in Cyber Physical Systems, currently engaged as a Backend Engineer and Data Scientist at Affinsys AI, where I contribute to constructing scalable campaign management and recommendation systems. Holding a bachelor's degree in Computer Science, my journey in technology commenced at the age of 16 when I decided to pursue it as my lifelong career.<br><br>My passion for technology has been the driving force behind my continuous learning and growth. I possess a proactive approach to acquiring new skills, often delving into hands-on projects to expedite my understanding. This method has proven remarkably effective, propelling me to grasp diverse areas such as backend development using frameworks like Django or FastAPI, web development with Vue.js and React, and even venturing into DevOps tools like Docker, Grafana, and Prometheus. This portfolio stands testament to my dedication to embracing new challenges as catalysts for learning. I thrive on these opportunities, acknowledging that each hurdle presents a chance to expand my knowledge, even in realms that might not directly align with my objectives but foster a curious and adaptable mindset."
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
  