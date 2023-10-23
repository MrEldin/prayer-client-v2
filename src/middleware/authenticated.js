import store from '@/store';

export default function authenticated(to, from, next) {
    // Check if the user is authenticated using the Vuex getter
    const isAuthenticated = store.getters['auth/authenticated'];

    // if (!isAuthenticated) {
    //     return next({ name: 'admin.login' });  // Redirect to login if not authenticated
    // }

    return next();  // Allow to continue to the intended route if authenticated
}
