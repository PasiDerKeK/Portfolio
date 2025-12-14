import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";
import LanguagesPage from "../pages/LanguagesPage.vue";
import ContactPage from "../pages/ContactPage.vue";

const routes = [
    { path: "/", name: "home", component: HomePage },
    { path: "/projects", name: "projects", component: ProjectsPage },
    { path: "/languages", name: "languages", component: LanguagesPage },
    { path: "/contact", name: "contact", component: ContactPage }
];

export default createRouter({
    history: createWebHistory(),
    routes
});
