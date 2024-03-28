"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
    return (
        <button
            onClick={() => signOut()}
            className="hover:underline cursor-pointer"
        >
            <label className="text-xs text-gray-500 dark:text-gray-300 cursor-pointer">
                Log out
            </label>
        </button>
    );
};

export default SignOutButton;
