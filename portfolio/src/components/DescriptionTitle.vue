<template>
    <div class="descript-title">
        <h3>{{ header }}</h3>
    </div>
</template>
  
<script>
export default {
    props: ["header"],
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
    font-weight: 100;

    &:after {
        content: "";
        width: 150px;
        display: block;
        margin: 20px auto;
        border-bottom: 2px solid;
        /* Adjust thickness and color as needed */
        padding-bottom: 4px;
        /* Adjust the space between text and underline */
        /* You can further customize the underline style, color, etc. */
    }
}
</style>
  