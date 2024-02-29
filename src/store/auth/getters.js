export const getters = {
    isAuthenticated(state) {
        return state.authenticated;
    },
    getUser(state) {
        // Directly return the user object from reactive state
        return state.user;
    },
    getName(state) {
        if (!state.user || !state.user.data || !state.user.data.contact) return '';
        return `${state.user.data.contact.data.first_name} ${state.user.data.contact.data.last_name}`;
    },
    getProfilePhoto(state) {
        return state.user ? state.user?.data?.profile_photo ?? '' : '';
    },
};
