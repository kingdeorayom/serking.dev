"use client";

import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const GoogleSignIn = () => {
    return (
        <div>
            <button
                onClick={() => signIn("google")}
                className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-slate-50 hover:bg-slate-100 dark:bg-neutral-900 hover:dark:hover:bg-neutral-800 rounded-md text-sm flex items-center leading-4 text-neutral-900 dark:text-neutral-100"
            >
                <FcGoogle size={20} />
                <div className="ml-3">Sign in with Google</div>
            </button>
        </div>
    );
};

export default GoogleSignIn;
