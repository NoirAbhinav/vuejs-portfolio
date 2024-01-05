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

/* Media query for smaller screens (e.g., phones) */
@media screen and (max-width: 767px) {
    .centered-image {
        max-width: 50%;
        /* Adjust the size based on your preference */
        max-height: 50%;
    }
}
</style>
  