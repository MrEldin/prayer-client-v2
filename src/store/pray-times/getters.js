export const getters = {
    getPageById: (state) => (id) => state.pages.find((page) => page.id === id),
};
