import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import NotFound from './views/NotFound.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router