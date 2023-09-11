import {createRouter, createWebHistory} from 'vue-router'
import store from '@/store'

import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Dashboard from '@/pages/Dashboard.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {layout: 'App'}
    },
    {
        path: '/login',
        name: 'admin.login',
        component: Login,
        meta: {layout: 'Login'},
        props: true,
        beforeEnter: (to, from, next) => {
            if (store.getters['auth/authenticated']) {
                return next({ name: 'admin.dashboard' })
            }

            return next()
        }
    },
    {
        path: '/dashboard',
        name: 'admin.dashboard',
        component: Dashboard,
        meta: {layout: 'Dashboard'},
        props: true,
        beforeEnter: (to, from, next) => {
            if (!store.getters['auth/authenticated']) {
                return next({ name: 'admin.login' })
            }

            return next()
        }
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})
