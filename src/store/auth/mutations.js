export default {
    SET_AUTHENTICATED(state, authenticated) {
        state.authenticated = authenticated
    },
    SET_USER(state, user) {
        state.user = user
        localStorage.setItem('user', JSON.stringify(user))
    }
};
