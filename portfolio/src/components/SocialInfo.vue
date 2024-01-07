<template>
    <div class="social-wrap">
        <ul>
            <li>
                <a :href="links.linkedin" target="_blank">
                    <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
                </a>
            </li>
            <li>
                <a :href="links.github" target="_blank">
                    <font-awesome-icon class="icon" :icon="['fab', 'github']" />
                </a>
            </li>
        </ul>
    </div>
</template>
  
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: 'SocialBar',
    data() {
        return {
            links: {
                facebook: 'https://www.facebook.com/yourfacebook',
                instagram: 'https://www.instagram.com/yourinstagram',
                linkedin: 'https://www.linkedin.com/in/abhinav-nair-n3747/',
                github: 'https://github.com/NoirAbhinav',
            }
        };
    },
    components: {
        FontAwesomeIcon,
    }
};
</script>
  
<style scoped lang="scss">
@import '@/styles/constant.scss';

.social-wrap {
    li {
        display: inline-block;
        margin-right: 10px;
    }

    .icon {
        font-size: 3rem;
    }
}
</style>