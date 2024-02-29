import axiosInstance from "@/plugins/axios";

export const actions = {
    putNewItem(item) {
        this.addPageContent(item);
    },
    fetchPageContents(pageId) {
        return axiosInstance.get(`/api/page-contents?page_id=${pageId}`)
            .then(response => {
                this.pageContents = response.data.data;
            })
            .catch(error => {
                console.error('Error fetching page contents:', error);
                throw error; // Rethrow for further handling
            });
    },
    fetchPageContent(pageId, id) {
        return axiosInstance.get(`/api/page-contents/${id}?page_id=${pageId}`)
            .then(response => {
                this.selectedPageContent = response.data.data;
            })
            .catch(error => {
                console.error('Error fetching page contents:', error);
                throw error; // Rethrow for further handling
            });
    },
    addPageContent(pageContentData) {
        console.log('Sending addPageContent request', pageContentData);
        return axiosInstance.post('/api/page-contents', pageContentData)
            .then(response => {
                this.pageContents.push(response.data.data);
            })
            .catch(error => {
                console.error('Error adding page content:', error);
                throw error;
            });
    },
    updatePageContent(id, pageContentData) {
        console.log('Sending updatePageContent request for id:', id, 'data:', pageContentData);
        return axiosInstance.put(`/api/page-contents/${id}`, pageContentData)
            .then(response => {
            })
            .catch(error => {
                console.error('Error updating page content:', error);
                throw error;
            });
    },
    deletePageContent(id) {
        return axiosInstance.delete(`/api/page-contents/${id}`)
            .then(() => {
                this.pageContents = this.pageContents.filter((pageContent) => pageContent.id !== id);
            })
            .catch(error => {
                console.error('Error deleting page content:', error);
                throw error;
            });
    },
};
