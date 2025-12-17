import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";
import LanguagesPage from "../pages/LanguagesPage.vue";
import ContactPage from "../pages/ContactPage.vue";

const base = import.meta.env.BASE_URL; // nimmt /Portfolio/ in production, / in dev

export default createRouter({
    history: createWebHistory(base),
    routes: [
        { path: "/", component: HomePage },
        { path: "/projects", component: ProjectsPage },
        { path: "/languages", component: LanguagesPage },
        { path: "/contact", component: ContactPage }
    ]
});
