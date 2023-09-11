import axios from 'axios';
import router from '@/router'; // Adjust the path as needed

export default {
    async authenticate({ commit }) {
        try {
            const response = await axios.get('/api/auth/user');
            commit('SET_AUTHENTICATED', true);
            commit('SET_USER', response.data);
            router.push({ path: '/dashboard' });
        } catch (error) {
            commit('SET_AUTHENTICATED', false);
            commit('SET_USER', null);
        }
    },
    async login({ dispatch }, credentials) {
        try {
            const response = await axios.post('/api/login', credentials);
            localStorage.setItem('jwtToken', response.data.access_token);
            axios.defaults.headers = {
                Authorization: 'Bearer ' + response.data.access_token
            };
            await dispatch('authenticate');
        } catch (error) {
            console.error(error);
            // Handle login error
        }
    },
    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('jwtToken');
        router.push({ path: '/login' });
    }
};
