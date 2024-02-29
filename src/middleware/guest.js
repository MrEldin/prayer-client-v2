import { useAuthStore } from '@/store/auth';

export default function guest(to, from, next) {
    const authStore = useAuthStore();

    //Directly check the reactive isAuthenticated state from the auth store
    if (authStore.isAuthenticated) {
        // User is authenticated, redirect to the dashboard
        return next({ name: 'admin.dashboard' });
    }

    // User is not authenticated, proceed with the navigation
    return next();
}
