import store from '@/store';

export default function guest(to, from, next) {
    // Check if the user is authenticated
    const isAuthenticated = store.getters['auth/authenticated'];

    // if (isAuthenticated) {
    //     return next({ name: 'admin.dashboard' });
    // }

    return next();
}
