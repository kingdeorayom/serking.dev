"use server";

import { sql } from "./postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function getGuestbookEntries() {
    if (!process.env.POSTGRES_URL) {
        return [];
    }
    noStore();
    return sql`
    SELECT id, body, created_by, updated_at
    FROM guestbook
    ORDER BY created_at DESC
    LIMIT 100
  `;
}
