"use client";
import { useSession } from "next-auth/react";

const Notice = () => {
    const { data: session } = useSession();

    return (
        <p className="text-sm text-gray-500 dark:text-gray-300">
            {session?.user
                ? "Be nice and avoid any harsh words that may be offensive for someone."
                : "Continue with any of the following sign-in option below."}
        </p>
    );
};

export default Notice;
