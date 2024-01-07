import { createApp } from 'vue'

import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faUserSecret,faGithub,faLinkedin)

createApp(App).component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
import './styles/global.scss'