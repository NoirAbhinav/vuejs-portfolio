<template>
    <div id="description">
        <AnimationCommon name="fadeDown" :duration="1" class="description-title">
            <DescriptionTitle />
        </AnimationCommon>
        <AnimationCommon name="fadeLeft" :duration="1" class="image">
            <PersonalImage />
        </AnimationCommon>
        <AnimationCommon name="fadeLeft" :duration="1">
            <div class="about-contact-details">
                <AboutMe />
                <ContactDetails />
            </div>

        </AnimationCommon>
    </div>
</template>

<script>
import PersonalImage from './PersonalImage.vue';
import DescriptionTitle from './DescriptionTitle.vue';
import AnimationCommon from './AnimationCommon.vue';
import AboutMe from './AboutMe.vue';
import ContactDetails from './ContactDetails.vue';

export default {

    name: 'App',
    components: {
        AboutMe,
        PersonalImage,
        DescriptionTitle,
        AnimationCommon,
        ContactDetails
    },
};
</script>

<style>
.description {
    position: relative;
    height: 50vh;
}

.about-contact-details {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>