export const getters = {
    getPageContentById: (state) => (id) => state.pages.find((page) => page.id === id),
};
