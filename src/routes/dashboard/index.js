import Dashboard from '@/pages/Dashboard.vue';
import authenticated from '@/middleware/authenticated';
import Library from '@/pages/Library.vue';
import SideBarPlus from '@/pages/SideBarPlus.vue';

export default [
    {
        path: '/dashboard',
        name: 'admin.dashboard',
        component: Dashboard,
        meta: { layout: 'Dashboard', middleware: [authenticated] }
    },
    {
        path: '/library',
        name: 'library',
        component: Library,
        meta: { layout: 'Dashboard', middleware: [authenticated] }
    },
    {
        path: '/sidebarplus',
        name: 'side.bar.plus',
        component: SideBarPlus,
        meta: { layout: 'Dashboard', middleware: [authenticated] }
    }
];
