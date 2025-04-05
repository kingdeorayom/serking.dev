"use client";

import { useGetEntries } from "@/app/hooks/guestbook";
import Loading from "../ui/Loading";
import Message from "./Message";

const Entries = () => {
    const { entries, isGetEntriesLoading, isGetEntriesError } = useGetEntries();

    if (isGetEntriesLoading) return <Loading />;
    if (isGetEntriesError)
        return (
            <p className="text-sm">
                Oops! An error occurred while getting the guestbook entries.
                Please try again later.
            </p>
        );

    if (entries.length === 0) return null;

    return (
        <div className="space-y-4">
            {entries.map((entry) => (
                <Message key={entry.id} entry={entry} />
            ))}
        </div>
    );
};

export default Entries;
