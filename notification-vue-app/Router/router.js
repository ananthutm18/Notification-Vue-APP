import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/components/Home.vue';
import About from '../src/components/About.vue';
import Contact from '../src/components/Contact.vue';
import Register from '../src/components/Register.vue';
import Login from '../src/components/Login.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/register', component: Register },
    { path: '/login', component: Login }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
