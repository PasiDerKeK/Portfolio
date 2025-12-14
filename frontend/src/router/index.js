import { createRouter, createWebHashHistory } from "vue-router";
// statt createWebHistory

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
