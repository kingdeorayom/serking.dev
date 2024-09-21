"use server";

import { getServerSession } from "next-auth";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import { sql } from "./postgres";

export async function saveGuestbookEntry(formData) {
    let session = await getServerSession();
    let email = session.user?.email;
    let created_by = session.user?.name;

    if (!session.user) {
        throw new Error("Unauthorized");
    }

    let entry = formData.get("entry")?.toString() || "";
    let body = entry.slice(0, 500);

    await sql`
      INSERT INTO guestbook (email, body, created_by, created_at)
      VALUES (${email}, ${body}, ${created_by}, NOW())
    `;

    revalidatePath("/guestbook");
}

export async function increment(slug) {
    noStore();
    await sql`
    INSERT INTO views (slug, count)
    VALUES (${slug}, 1)
    ON CONFLICT (slug)
    DO UPDATE SET count = views.count + 1
  `;
}
