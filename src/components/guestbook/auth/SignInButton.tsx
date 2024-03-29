"use client";

import { signIn } from "next-auth/react";
import { IconType } from "react-icons";

interface SignInButtonProps {
    provider: string;
    icon: IconType;
    label: string;
}

const SignInButton = ({ provider, icon: Icon, label }: SignInButtonProps) => {
    return (
        <div className="flex flex-wrap gap-2">
            <div>
                <button
                    onClick={() => signIn(provider)}
                    className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-slate-50 hover:bg-slate-100 dark:bg-neutral-900 hover:dark:hover:bg-neutral-800 rounded-md text-sm flex items-center leading-4 text-neutral-900 dark:text-neutral-100"
                >
                    <Icon />
                    <div className="ml-3">
                        <label className="text-xs">{label}</label>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SignInButton;
