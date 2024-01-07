<template>
    <div class="skills">
        <div v-for="(skill, index) in skills" :key="index" class="skill">
            <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
            <span>{{ skill.name }}</span>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            skills: [
                { name: 'Django', icon: require('@/assets/django.svg') },
                { name: 'Docker', icon: require('@/assets/docker.svg') },
                { name: 'FastApi', icon: require('@/assets/fastapi.svg') },
                { name: 'Tensorflow', icon: require('@/assets/Tensorflow.svg') },
                { name: 'Python', icon: require('@/assets/python.svg') },
                { name: 'PostgreSQL', icon: require('@/assets/postgresql.svg') },
                { name: 'Redis', icon: require('@/assets/redis.svg') },
                { name: 'RabbitMQ', icon: require('@/assets/rabbitmq.svg') },
                { name: "Pytorch", icon: require('@/assets/pytorch.svg') },
                { name: "MongoDB", icon: require('@/assets/mongodb.svg') },
            ]
        };
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
  