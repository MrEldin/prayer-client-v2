import Dashboard from '@/pages/Dashboard.vue';
import authenticated from '@/middleware/authenticated';
import Library from '@/pages/Library.vue';
import LibraryComponent from '@/components/app/dashboard/Library.vue';

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
        meta: { layout: 'Dashboard', middleware: [authenticated] },
        children: [
            {
                path: ':bookId/pages/:pageId',
                name: 'library.books.pages',
                component: LibraryComponent,
                meta: { middleware: [authenticated] },
            }
        ]
    }
];
