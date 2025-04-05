import axiosInterceptor from "@/utils/axios";

export const getEntries = async () => {
    try {
        const response = await axiosInterceptor.get("/users");
        return response.data;
    } catch (error) {
        // console.log("Request Error:", error);
        throw error; // Ensure React Query handles the error
    }
};

// export const addEntry = async () => {};
