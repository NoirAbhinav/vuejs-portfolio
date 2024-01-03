<template>
  <div class="intro">
    <div class="intro-background"></div>
    <div class="intro-content">
      <div class="intro-name">
        <p class="intro-name-text" :class="{ 'animate-name-top': animate }">Abhinav Nair</p>
        <div class="dash" :class="{ 'animate-dash': animate }"></div>
        <p class="intro-title" :class="{ 'animate-title-bottom': animate }">Software Engineer</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroPage',
  data() {
    return {
      animate: false,
    };
  },
  mounted() {
    // Delay the animation for 500ms (adjust as needed)
    this.$nextTick(() => {
      this.animate = true; // Trigger animation after the next DOM update
    });
  },
};
</script>

<style scoped>
/* Add some basic styling */
.intro {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center; /* Center content vertically */
  overflow: hidden; /* Hide any content overflow */
  position: relative; /* Positioning for the background */
  color: white; /* Font color */
}

.intro-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/background.svg'); /* Update the path accordingly */
  background-size: cover; /* Adjust as needed */
  z-index: -1; /* Place it behind the content */
}

.intro-content {
  text-align: center;
  width: 100%; /* Fill the entire width */
}

.intro-name {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.intro-name-text,
.intro-title {
  opacity: 0;
  transform: translateY(-100vh); /* Start off-screen */
  transition: opacity 1s ease, transform 1s ease;
  font-size: 2em; /* Font size */
}

.dash {
  width: 1px;
  height: 2px; /* Dash height */
  background-color: white; /* Dash appearance */
  margin: 10px 0; /* Adjust spacing */
  opacity: 0;
  transition: opacity 1.5s ease, width 1.5s ease;
}

/* Animation classes */
.animate-name-top {
  animation: slideNameTop 1.5s ease forwards;
}

.animate-title-bottom {
  animation: slideTitleBottom 1.5s ease forwards;
}

.animate-dash {
  animation: showDash 1s ease forwards;
}

@keyframes slideNameTop {
  from {
    opacity: 0;
    transform: translateY(-100vh);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideTitleBottom {
  from {
    opacity: 0;
    transform: translateY(100vh);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes showDash {
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 70%; /* Adjust width */
  }
}
</style>
