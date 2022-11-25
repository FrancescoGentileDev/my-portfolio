import {createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

/* import specific icons */

/* add icons to the library */
library.add(fab,fas)

/* add font awesome icon component */
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
