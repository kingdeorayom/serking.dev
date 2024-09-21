"use client";
import { useSession } from "next-auth/react";
import Form from "../Form";
import SocialSignIn from "./SocialSignIn";

const Authentication = () => {
    const { data: session } = useSession();
    return session?.user ? <Form /> : <SocialSignIn />;
};

export default Authentication;
