import { createStore } from 'vuex';
import auth from '@/store/auth/state';
import authMutations from '@/store/auth/mutations';
import authActions from '@/store/auth/actions';
import authGetters from '@/store/auth/getters';

export default createStore({
    modules: {
        auth: {
            namespaced: true,
            state: auth,
            mutations: authMutations,
            actions: authActions,
            getters: authGetters,
        },
    },
});
