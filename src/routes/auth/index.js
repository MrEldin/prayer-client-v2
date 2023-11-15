import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import Registration from '@/pages/Registration.vue';
import ResetPage from '@/pages/ResetPage.vue';
import NewPage from '@/pages/NewPage.vue';
import Dashboard from '@/pages/Dashboard.vue';
import guest from '@/middleware/guest';
import authenticated from '@/middleware/authenticated';

export default [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/login',
        name: 'admin.login',
        component: Login,
        meta: { layout: 'Login', middleware: [guest] }
    },
    {
        path: '/register',
        component: Registration
    },
    {
        path: '/reset',
        component: ResetPage
    },
    {
        path: '/newpage',
        component: NewPage
    },
    {
        path: '/dashboard',
        name: 'admin.dashboard',
        component: Dashboard,
        meta: { layout: 'Dashboard', middleware: [authenticated] }
    }
];
