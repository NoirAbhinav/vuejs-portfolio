<template>
    <div>
        <transition :name="name" :appear="appear">
            <div v-if="isVisible" :style="{ animationDuration: `${duration}s`, transitionDuration: `${duration}s` }">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
  
<script>
export default {
    props: {
        name: String,
        appear: { type: Boolean, default: false },
        offsetTop: { type: Number, default: 0 },
        duration: { type: Number, default: 1 }
    },

    data() {
        return {
            isVisible: false,
            observer: null
        };
    },

    methods: {
        handleIntersection(entries) {
            const isVisible = entries[0].isIntersecting;
            if (isVisible !== this.isVisible) {
                this.isVisible = isVisible;
            }
        }
    },

    mounted() {
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: `${this.offsetTop}px 0px`, // Adjust the margin as needed
            threshold: 0.1 // Adjust the threshold as needed (0.1 means 10% of the element is visible)
        };

        this.observer = new IntersectionObserver(this.handleIntersection, options);
        this.observer.observe(this.$el);
    },

    beforeUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
};
</script>
  