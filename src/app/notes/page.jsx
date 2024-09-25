import Blogs from "@/components/blog/Blogs";
import { getBlogPosts } from "@/db/blog";

export const metadata = {
    title: "Notes | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function BlogPage() {
    let allBlogs = getBlogPosts();

    return (
        <section className="flex-auto min-w-0 flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-6">
                <h2 className="font-medium text-2xl tracking-tighter">
                    Developer's Notes
                </h2>
                <p>Sharing thoughts, ideas, and a bit of code.</p>
            </div>
            <Blogs blogs={allBlogs} />
        </section>
    );
}
