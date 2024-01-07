<template>
    <div class="experience">
        <AnimationCommon name="fadeDown" :duration="1" class="experience-title">
            <DescriptionTitle :header="'Experience'" />
        </AnimationCommon>
        <div class="experience-education-container">
            <AnimationCommon name="fadeLeft" :duration="1" class="experience-education">
                <ExperienceDetail :posts="education.posts" :title="education.title" />
            </AnimationCommon>
            <AnimationCommon name="fadeRight" :duration="1" class="experience-professional">
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
    data() {
        return {
            education: {
                title: 'Education',
                posts: [
                    {
                        year: '2019 - 2023',
                        title: 'B.Tech in CSE with specialization in CPS, CGPA - 8.62',
                        content: 'Vellore Institute of Technology, Chennai',
                    },
                    {
                        year: '2019',
                        title: 'Bal Bharati Public School (CBSE) - 95%',
                        content: 'Noida, Uttar Pradesh',
                    },
                    {
                        year: '2017',
                        title: 'Bal Bharati Public School (CBSE) - 9.2 GPA',
                        content: 'Noida, Uttar Pradesh',
                    }
                ],
            },
            professional: {
                title: 'Professional',
                posts: [
                    {
                        year: '2019 - 2023',
                        title: 'B.Tech in Computer Science and Engineering',
                        content: 'National Institute of Technology, Calicut',
                    },
                    {
                        year: 'May 2022 - Jun 2022',
                        title: 'HAL, RWRDC(Bangalore) - Intern',
                        content: 'Bangalore, Karnataka',
                    }
                ],
            }
        };
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