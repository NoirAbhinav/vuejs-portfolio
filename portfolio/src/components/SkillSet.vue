<template>
    <div class="skills">
        <div v-for="(skill, index) in skillset" :key="index" class="skill">
            <img :src="getImageSource(skill.icon)" :alt="skill.name" class="skill-icon" />
            <span>{{ skill.name }}</span>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        skillset: {
            type: Array,
            required: true
        }
    },
    methods: {
        getImageSource(image) {
            // Use  with a dynamic import to load the image
            return require(`@/${image}`);
        }
    }
};
</script>
  
<style>
.skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 50vh;
    color: black;
    margin: 0;
    padding: 0;
}

.skill {
    margin: 10px;
    display: flex;
    align-items: center;
    padding: 3%;
    padding-top: 0;
    flex-direction: column;
}

.skill-icon {
    width: 172px;
    /* Adjust the icon size as needed */
    height: 144px;
    /* Adjust the icon size as needed */
}
</style>
  