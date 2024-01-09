<template>
    <div class="card">
        <Timeline :value="projects">
            <template #content="slotProps">
                <div class="timeline-item">
                    <h3>{{ slotProps.item.name }}</h3>
                    <div class="project-media">
                        <img v-if="slotProps.item.image" :src="slotProps.item.image" alt="Project Image" />
                    </div>
                    <div class="project-description">
                        <p>{{ slotProps.item.description }}</p>
                        <div class="project-details">
                            <div class="status">{{ slotProps.item.technologies }}</div>
                            <div class="date">{{ slotProps.item.date }}</div>
                        </div>
                    </div>
                </div>
            </template>
        </Timeline>
    </div>
</template>
  
<script>
import Timeline from 'primevue/timeline';

export default {
    data() {
        return {
            projects: [
                {
                    name: 'Project A',
                    description: 'A brief description of Project A.',
                    technologies: 'Vue.js, HTML, CSS',
                    date: 'October 2021',
                    image: require('../assets/me.png'),
                    // Add 'video' property if you have video for the project
                },
                // Add more project objects as needed
            ]
        };
    },
    components: {
        Timeline
    }
};
</script>
  
<style scoped>
.card {
    padding: 2rem;
    color: black;
}

.timeline-item {
    margin-bottom: 40px;
}

.project-media img,
.project-media video {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
}

.project-description {
    font-size: 16px;
    color: #555;
}

.project-details {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.status {
    color: #999;
}

.date {
    color: #777;
}
</style>
  