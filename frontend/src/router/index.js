import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";
import LanguagesPage from "../pages/LanguagesPage.vue";
import ContactPage from "../pages/ContactPage.vue";

const router = createRouter({
    history: createWebHistory("/"),
    routes: [
        { path: "/", component: HomePage },
        { path: "/projects", component: ProjectsPage },
        { path: "/languages", component: LanguagesPage },
        { path: "/contact", component: ContactPage }
    ]
});

export default router;
