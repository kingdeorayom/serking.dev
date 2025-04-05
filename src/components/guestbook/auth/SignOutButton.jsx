"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
    return (
        <button
            onClick={() => signOut()}
            className="cursor-pointer underline hover:opacity-70"
        >
            <label className="cursor-pointer text-xs text-gray-500 dark:text-gray-300">
                Log out
            </label>
        </button>
    );
};

export default SignOutButton;
