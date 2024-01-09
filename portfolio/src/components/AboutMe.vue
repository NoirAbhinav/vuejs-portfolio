<template>
    <div class="about-me">
        <p v-html="description" class="about-paragraph"></p>
    </div>
</template>
  
<script>
export default {
    props: {
        description: {
            type: String,
            required: true
        }
    },
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
  