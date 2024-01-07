<template>
    <div class="contact-me">
        <h2>Contact Me</h2>
        <div class="contact-info">
            <p><strong>Email:</strong> abhinavbbps2000@email.com</p>
            <p><strong>Phone:</strong> +917827598718</p>
            <p><strong>City:</strong> Delhi-NCR</p>
            <SocialInfo />

        </div>
    </div>
</template>
  
<script>
import SocialInfo from './SocialInfo.vue';

export default {
    components: { SocialInfo }
};
</script>
  
<style scoped>
.contact-me {
    padding-top: 20px;
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
  