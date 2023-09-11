export default {
    authenticated (state) {
        return localStorage.getItem("user") !== null
    },
    user (state) {
        return JSON.parse(localStorage.getItem("user"))
    },
    name (state) {
        const user = JSON.parse(localStorage.getItem("user"));
        return user.data.first_name + ' ' + user.data.last_name
    }
};
