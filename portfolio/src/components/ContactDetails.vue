<template>
    <div class="contact-me">
        <h2>Contact Me</h2>
        <div v-for="(value, key) in contactInfo" :key="key">
            <p><strong>{{ key }}:</strong> {{ value }}</p>
        </div>
        <SocialInfo />
    </div>
</template>
    
<script>
import SocialInfo from './SocialInfo.vue';

export default {
    components: { SocialInfo },
    props: {
        contactInfo: {
            type: Object,
            required: true
        }
    },
};
</script>
  
<style scoped>
.contact-me {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: #333;
}

.contact-info {
    margin-top: 20px;
}

.contact-info p {
    margin-bottom: 10px;

}
</style>
  