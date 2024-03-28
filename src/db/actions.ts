"use server";

import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { sql } from "./postgres";

export async function saveGuestbookEntry(formData: FormData) {
    let session = await getServerSession();
    let email = session.user?.email as string;
    let created_by = session.user?.name as string;

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
