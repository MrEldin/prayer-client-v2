import router from "@/router/index.js";
import axiosInstance from "@/plugins/axios";

export const actions = {
    setAuthenticated(authenticated) {
        this.authenticated = authenticated;
    },
    setUser(user) {
        this.user = user;
    },
    async refreshUser() {
        try {
            const response = await axiosInstance.get('/api/auth/user?include=contact');
            this.setAuthenticated(true);
            this.setUser(response.data);
        } catch (error) {
            this.setAuthenticated(false);
            this.setUser(null);
        }
    },
    async authenticate() {
        try {
            const response = await axiosInstance.get('/api/auth/user?include=contact');
            this.setAuthenticated(true);
            this.setUser(response.data);
            router.push({ path: '/dashboard' });
        } catch (error) {
            this.setAuthenticated(false);
            this.setUser(null);
        }
    },
    async login(credentials) {
        try {
            const response = await axiosInstance.post('/api/login', credentials);
            this.jwtToken = response.data.access_token; // Now using reactive jwtToken
            axiosInstance.defaults.headers = {
                Authorization: 'Bearer ' + response.data.access_token,
            };
            await this.authenticate();
        } catch (error) {
            this.authenticated = false;
            this.user = null;
            this.jwtToken = null; // Reset JWT token on login failure
        }
    },
    logout() {
        this.user = null;
        this.authenticated = false;
        this.jwtToken = null; // Clear JWT token reactively
        router.push({ path: '/login' });
    },
};
