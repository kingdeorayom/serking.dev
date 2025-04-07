"use client";
import { useForm } from "react-hook-form";
import SignOutButton from "./auth/SignOutButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAddEntry } from "@/hooks/guestbook";
import { useSession } from "next-auth/react";

const schema = yup
    .object({
        message: yup.string().required().label("Message"),
    })
    .required();

const Form = () => {
    const { addEntry, isAddEntryLoading } = useAddEntry();

    const { data: session } = useSession(); // Get session data (user info)

    const form = useForm({
        resolver: yupResolver(schema),
    });

    const { errors } = form.formState;

    const onSubmit = (data) => {
        const userData = {
            ...data,
            name: session?.user?.name,
            email: session?.user?.email,
        };

        addEntry({ payload: userData, form: form });
    };

    return (
        <div>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full max-w-sm items-center space-x-2"
            >
                <div className="flex w-full flex-col space-y-2">
                    <div className="flex flex-row space-x-2">
                        <input
                            {...form.register("message")}
                            type="text"
                            className="flex h-10 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:ring-1 focus:ring-gray-300 focus:outline-hidden dark:border-neutral-700 dark:bg-neutral-900"
                            placeholder="Your message"
                            aria-label="Your message"
                            // required
                        />
                        <button
                            type="submit"
                            disabled={isAddEntryLoading}
                            className="flex h-10 cursor-pointer items-center rounded-md border border-gray-200 bg-slate-50 px-3 py-2 text-sm leading-4 text-neutral-900 hover:bg-slate-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-800"
                        >
                            Submit
                        </button>
                    </div>
                    <p className="pb-2 text-xs text-red-800 dark:text-red-400">
                        {errors.message?.message}
                    </p>
                </div>
            </form>
            <SignOutButton />
        </div>
    );
};

export default Form;
