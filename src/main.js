import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import "aos/dist/aos.css";
import homeView from "./components/views/homeView.vue";
import projectView from "./components/views/projectView.vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import en from "./data/en-GB";
import it from "./data/it-IT";
import projects from "./data/projects";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { createRouter, createWebHistory } from "vue-router";

let messages = {};
messages.en = en;
messages.it = it;
let localProjects = [];
messages.en.projects.items = []
  messages.it.projects.items = []
projects.forEach((proj, index) => {
  messages.en.projects.items.push(proj.locales.en)
  messages.it.projects.items.push(proj.locales.it)
})

console.log('i18n', messages)

const i18n = createI18n({
  // something vue-i18n options here ...
  locale: 'it',
  fallbackLocale: 'en',
  messages
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: homeView },
    { path: "/:slug", component: projectView },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      if (to.hash) {
        return resolve({ selector: to.hash });
      } else if (savedPosition) {
        return resolve(savedPosition);
      } else {
        resolve(
          document.getElementById("app").scrollIntoView({ behavior: "smooth" })
        );
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
  .use(i18n)
  .mount("#app");
