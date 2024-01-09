<template>
    <div class="timeline">
        <div v-for="(event, index) in events" :key="index" class="timeline-event">
            <Timeline :value="events">
                <template>
                    {{ event.date }}
                </template>
            </Timeline>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            events: [
                {
                    date: "January 2022",
                    title: "Event Title 1",
                    description: "Description of Event 1"
                },
                {
                    date: "February 2022",
                    title: "Event Title 2",
                    description: "Description of Event 2"
                },
                // Add more events as needed
            ]
        };
    },
    methods: {
        getConnectorHeight(index) {
            // Calculate connector height based on index
            if (index > 0) {
                const prevDate = new Date(this.events[index - 1].date);
                const currDate = new Date(this.events[index].date);
                const daysDiff = Math.abs((currDate - prevDate) / (1000 * 60 * 60 * 24));
                return `${daysDiff * 2}px`; // Multiply by a factor for visual effect
            }
            return '0';
        }
    }
};
</script>
<style scoped>
.timeline {
    font-family: Arial, sans-serif;
}

.timeline-event {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    position: relative;
}

.event-date {
    min-width: 120px;
    text-align: right;
    padding-right: 20px;
    color: #999;
}

.event-content {
    flex: 1;
}

.event-content h3 {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 18px;
}

.event-content p {
    margin-top: 0;
    color: #555;
}

.connector {
    position: absolute;
    top: 10px;
    /* Adjust based on your design */
    left: 80px;
    /* Adjust based on your event-date width + padding */
    width: 2px;
    background-color: #ccc;
    z-index: -1;
}
</style>
  