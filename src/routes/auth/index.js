import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import Registration from '@/pages/Registration.vue';
import ResetPage from '@/pages/ResetPage.vue';
import NewPage from '@/pages/NewPage.vue';
import guest from '@/middleware/guest';

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
    }
    
];
