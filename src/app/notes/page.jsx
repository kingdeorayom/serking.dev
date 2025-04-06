import Blogs from "@/components/blog/Blogs";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
    title: "Notes - Serking de Orayom",
    description: "Software Engineer & UI/UX designer",
};

export default function BlogPage() {
    let allBlogs = getBlogPosts();
    return (
        <div className="flex flex-col space-y-6">
            <section className="flex flex-col gap-y-6">
                <h1 className="text-2xl font-semibold tracking-tighter">
                    Developer's Notes
                </h1>
                <p>Sharing thoughts, ideas, and a bit of code.</p>
            </section>
            <Blogs blogs={allBlogs} />
        </div>
    );
}
