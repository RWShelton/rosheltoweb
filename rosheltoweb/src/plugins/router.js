import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '', name: 'home', component: () => import('@/pages/AboutMe.vue')},
    {path: '/resume', name: 'resume', component: () => import('@/pages/Resume.vue')},
    {path: '/:pathMatch(.*)', name: '404', component: () => import('@/pages/404.vue')}
]

const router = createRouter({
    routes, 
    history: createWebHistory(), 
})

export default router