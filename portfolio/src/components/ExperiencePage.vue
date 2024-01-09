<template>
    <div class="experience">
        <AnimationCommon name="fadeDown" :duration="0.5" class="experience-title">
            <DescriptionTitle :header="'Experience'" />
        </AnimationCommon>
        <div class="experience-education-container">
            <AnimationCommon name="fadeLeft" :duration="0.5" class="experience-education">
                <ExperienceDetail :posts="education.posts" :title="education.title" />
            </AnimationCommon>
            <AnimationCommon name="fadeRight" :duration="0.5" class="experience-professional">
                <ExperienceDetail :posts="professional.posts" :title="professional.title" />
            </AnimationCommon>
        </div>
    </div>
</template>

<script>
import DescriptionTitle from './DescriptionTitle.vue';
import AnimationCommon from './AnimationCommon.vue';
import ExperienceDetail from './ExperienceDetail.vue';

export default {

    name: 'App',
    components: {
        DescriptionTitle,
        AnimationCommon,
        ExperienceDetail
    },
    props: {
        education: {
            type: Object,
            required: true
        },
        professional: {
            type: Object,
            required: true
        }
    },

};
</script>

<style scoped lang="scss">
@import "@/styles/constant.scss";
$linear: map-get($colors, dark);

.experience-title {
    color: white;

}

.experience-professional {
    padding: 1%;

}

.experience-education {
    padding: 1%;
}

.experience {
    padding: 1%;
    position: relative;
    margin: 0;
    background-color: rgb(63, 62, 62);
}

.experience-education-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: flex-start;
    overflow: hidden;
}

.experience-education-container:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    border-left: 2px solid $linear;
    /* New */
}

.experience-education,
.experience-professional {
    flex: 1;
    text-align: center;
    align-self: flex-start;
    font-size: 18px;
    /* Default font size for large screens */

}

@media (min-width: #{map-get($breakpoints, small)}) {
    .experience-education {
        text-align: right;
        border-right: 2px solid $linear;
    }

    .experience-professional {
        text-align: left;
    }
}

@media (max-width: #{map-get($breakpoints, small)}) {

    .experience-professional:before {
        content: "";
        position: absolute;
        left: 20%;
        bottom: 0;
        height: 2px;
        width: 60%;
        /* or 100px */
        border-bottom: 2px solid $linear;
        padding-left: 20px;
    }
}

/* Adjust font size for medium screens */
@media (max-width: 768px) {

    .experience-education,
    .experience-professional {
        font-size: 16px;
    }
}

/* Adjust font size for small screens */
@media (max-width: 480px) {

    .experience-education,
    .experience-professional {
        font-size: 14px;
    }
}
</style>