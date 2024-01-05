<template>
    <div class="image-container">
        <img :src="require('@/assets/me.png')" alt="Fading SVG Image" class="centered-image" />
    </div>
</template>
    
<script>
export default {
    components: {},
};
</script>
  
<style>
.image-container {
    display: flex;
    justify-content: center;
    height: auto;
}

.centered-image {
    max-width: 10%;
    max-height: 10%;
}
</style>
  