import axiosInterceptor from "@/utils/axios";

export const getEntries = async () => {
    try {
        const response = await axiosInterceptor.get("/guestbook");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addEntry = async ({ payload, form }) => {
    try {
        const response = await axiosInterceptor.post("/guestbook", payload);
        form?.reset();
        return response.data;
    } catch (error) {
        throw error;
    }
};
