import axiosInstance from "@/plugins/axios";

export const actions = {
    async fetchPages() {
        try {
            const response = await axiosInstance.get('/api/pages?include=media');
            this.pages = response.data.data;
            return response.data.data; // Optionally return data for further processing
        } catch (error) {
            console.error('Error fetching pages:', error);
            throw error; // Rethrow for further handling
        }
    },

    async fetchPage(id) {
        try {
            const response = await axiosInstance.get(`/api/pages/${id}?include=media`);
            this.selectedPage = response.data.data;
            return response.data.data; // Return the fetched page data
        } catch (error) {
            console.error('Error fetching page:', error);
            throw error;
        }
    },

    async addPage(pageData) {
        try {
            const response = await axiosInstance.post('/api/pages', pageData);
            this.pages.push(response.data.data);
            return response.data.data; // Return the added page data
        } catch (error) {
            console.error('Error adding page:', error);
            throw error;
        }
    },

    async updatePage(id, pageData) {
        try {
            const response = await axiosInstance.put(`/api/pages/${id}`, pageData);
            const index = this.pages.findIndex((page) => page.id === id);
            if (index !== -1) {
                this.pages[index] = response.data.data;
            }
            return response.data.data; // Return the updated page data
        } catch (error) {
            console.error('Error updating page:', error);
            throw error;
        }
    },

    async deletePage(id) {
        try {
            await axiosInstance.delete(`/api/pages/${id}`);
            this.pages = this.pages.filter((page) => page.id !== id);
            // Optionally return some status or confirmation
        } catch (error) {
            console.error('Error deleting page:', error);
            throw error;
        }
    },
};
