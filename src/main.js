import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "aos/dist/aos.css";
import homeView from "./components/views/homeView.vue";
import projectView from "./components/views/projectView.vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name:'home', component: homeView },
    { path: "/:slug", component: projectView },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {

        if (to.hash) {
          return resolve({ selector: to.hash });
        } else if (savedPosition) {
          return resolve(savedPosition);
        } else {
          resolve(document.getElementById("app").scrollIntoView({ behavior: "smooth" }));
        }

    });
   
  },
});

/* import specific icons */

/* add icons to the library */
library.add(fab, fas);

/* add font awesome icon component */
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
