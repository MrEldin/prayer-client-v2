import { useAuthStore } from '@/store/auth';

export default function authenticated(to, from, next) {
    const authStore = useAuthStore();

    // Directly check the reactive isAuthenticated state from the auth store
    if (!authStore.isAuthenticated) {
        // User is not authenticated, redirect to the login page
        return next({ name: 'admin.login' });
    }

    // User is authenticated, proceed with the navigation
    return next();
}
