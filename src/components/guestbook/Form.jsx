"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import SignOutButton from "./auth/SignOutButton";
// import { saveGuestbookEntry } from "@/db/actions";

const Form = () => {
    const formRef = useRef(null);
    const { pending } = useFormStatus();

    const checkInput = (input) => {
        if (input === "") {
            alert("Please provide valid input. Empty input is not allowed.");
            return;
        }
    };

    return (
        <div className="space-y-2">
            <form
                ref={formRef}
                action={async (formData) => {
                    checkInput(formData.get("entry"));
                    // await saveGuestbookEntry(formData);
                    console.log(formData);
                    formRef.current?.reset();
                }}
                className="flex w-full max-w-sm items-center space-x-2"
            >
                <input
                    type="text"
                    name="entry"
                    className="flex h-10 w-full rounded-md border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900  px-3 py-2 text-sm focus:outline-hidden focus:ring-1 focus:ring-gray-300"
                    placeholder="Your message"
                    aria-label="Your message"
                />
                <button
                    type="submit"
                    disabled={pending}
                    className="px-3 py-2 h-10 border border-neutral-200 dark:border-neutral-700 bg-slate-50 hover:bg-slate-100 dark:bg-neutral-900 dark:hover:hover:bg-neutral-800 rounded-md text-sm flex items-center leading-4 text-neutral-900 dark:text-neutral-100"
                >
                    Submit
                </button>
            </form>
            <SignOutButton />
        </div>
    );
};

export default Form;
