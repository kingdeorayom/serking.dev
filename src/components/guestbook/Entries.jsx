import { getGuestbookEntries } from "@/db/queries";

import Message from "./Message";

const Entries = async () => {
    let entries = await getGuestbookEntries();

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
