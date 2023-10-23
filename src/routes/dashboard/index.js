import Dashboard from '@/pages/Dashboard.vue';
import authenticated from '@/middleware/authenticated';

export default [
    {
        path: '/dashboard',
        name: 'admin.dashboard',
        component: Dashboard,
        meta: { layout: 'Dashboard', middleware: [authenticated] }
    }
];
