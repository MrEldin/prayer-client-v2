import axiosInstance from "@/plugins/axios";

export const actions = {
    async getPrayTimes(month, day) {
        try {
            const response = await axiosInstance.get(`/api/prayer-times/month/${month}/day/${day}?include=month&city_id=1`);
            this.prayTimes = response.data.data;
            return response.data.data; // Optionally return data for further processing
        } catch (error) {
            console.error('Error fetching pages:', error);
            throw error; // Rethrow for further handling
        }
    },
    async getTomorrowPrayTimes(month, day) {
        try {
            const response = await axiosInstance.get(`/api/prayer-times/month/${month}/day/${day}?include=month&city_id=1`);
            this.prayTimesTomorrow = response.data.data;
            return response.data.data; // Optionally return data for further processing
        } catch (error) {
            console.error('Error fetching pages:', error);
            throw error; // Rethrow for further handling
        }
    },

};
