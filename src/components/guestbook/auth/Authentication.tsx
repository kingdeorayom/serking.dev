"use client";
import { useSession } from "next-auth/react";
import Form from "../Form";
import LoginButtons from "./LoginButtons";

const Authentication = () => {
    const { data: session } = useSession();
    return session?.user ? <Form /> : <LoginButtons />;
};

export default Authentication;
