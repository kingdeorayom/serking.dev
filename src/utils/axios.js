import axios from "axios";
// import { getSession } from "next-auth/react";

const ApiClient = () => {
    const instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        // withCredentials: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });

    instance.interceptors.request.use(async (request) => {
        // const session = await getSession();
        // if (session) {
        //   request.headers.Authorization = `Bearer ${session.accessToken}`;
        // }
        return request;
    });

    return instance;
};

export default ApiClient();
