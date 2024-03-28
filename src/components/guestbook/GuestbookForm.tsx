"use client";
import { useSession } from "next-auth/react";
import Form from "./Form";
import SignInButton from "./SignInButton";

const GuestbookForm = () => {
    const { data: session } = useSession();
    console.log(session);
    return session?.user ? <Form /> : <SignInButton />;
};

export default GuestbookForm;
