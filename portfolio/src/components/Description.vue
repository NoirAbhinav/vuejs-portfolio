<template>
    <div id="description">
        <AnimationCommon name="fadeDown" :duration="0.5" class="description-title">
            <DescriptionTitle :header="data.header" />
        </AnimationCommon>
        <AnimationCommon name="fadeLeft" :duration="0.5" class="image">
            <PersonalImage :image="data.image" />
        </AnimationCommon>
        <AnimationCommon name="fadeLeft" :duration="0.5">
            <div class="about-contact-details">
                <AboutMe :description="data.description" />
                <ContactDetails :contactInfo="data.contactInfo" />
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
    props: {
        data: {
            type: Object,
            required: true
        }
    },
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
.description-title {
    color: black;
}

.description {
    position: relative;
    height: 50vh;
    color: black;
}

.about-contact-details {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>