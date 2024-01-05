<template>
    <div class="descript-title">
        <h3>About Me</h3>
    </div>
</template>
  
<script>

export default {
    components: {}
};
</script>
  
<style>
.descript-title {
    height: auto;
    text-align: center;
}

.descript-title h3 {
    font-size: 3rem;
    text-transform: uppercase;
    color: #000;
    font-weight: 100;

    &:after {
        content: "";
        width: 150px;
        display: block;
        margin: 20px auto;
        border-bottom: 2px solid #000;
        /* Adjust thickness and color as needed */
        padding-bottom: 4px;
        /* Adjust the space between text and underline */
        /* You can further customize the underline style, color, etc. */
    }
}
</style>
  