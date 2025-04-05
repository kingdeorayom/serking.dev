"use client";

import { signIn } from "next-auth/react";

const SignInButton = ({ provider, icon: Icon, label }) => {
    return (
        <div className="flex cursor-pointer flex-wrap gap-2">
            <div>
                <button
                    onClick={() => signIn(provider)}
                    className="flex cursor-pointer items-center rounded-md border border-gray-200 bg-slate-50 px-3 py-2 text-sm leading-4 text-neutral-900 hover:bg-slate-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:hover:bg-neutral-800"
                >
                    <Icon />
                    <div className="ml-3 cursor-pointer">
                        <label className="cursor-pointer text-xs">
                            {label}
                        </label>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SignInButton;
