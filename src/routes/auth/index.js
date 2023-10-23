import Login from '@/pages/Login.vue';
import Dashboard from '@/pages/Dashboard.vue';
import guest from '@/middleware/guest';
import authenticated from '@/middleware/authenticated';

export default [
    {
        path: '/login',
        name: 'admin.login',
        component: Login,
        meta: { layout: 'Login', middleware: [guest] }
    },
    {
        path: '/dashboard',
        name: 'admin.dashboard',
        component: Dashboard,
        meta: { layout: 'Dashboard', middleware: [authenticated] }
    }
];
