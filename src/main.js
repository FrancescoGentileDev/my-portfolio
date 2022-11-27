import { createApp } from 'vue'
import AOS from 'aos';
import './style.css'
import App from './App.vue'
import 'aos/dist/aos.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('./App.vue') },
        
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { 
            el: to.hash
        }
      },
})

/* import specific icons */


/* add icons to the library */
library.add(fab,fas)

/* add font awesome icon component */
createApp(App).component('font-awesome-icon', FontAwesomeIcon)
.use(router).mount('#app')