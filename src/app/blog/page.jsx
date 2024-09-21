import ViewCounter from "@/components/blog/ViewCounter";
import Separator from "@/components/ui/Separator";
import { getBlogPosts } from "@/db/blog";
import { getViewsCount } from "@/db/queries";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
    title: "Blog | Serking de Orayom",
    description: "Web and mobile app developer",
};

export default function BlogPage() {
    let allBlogs = getBlogPosts();

    return (
        <section className="flex-auto min-w-0 flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-6">
                <h2 className="font-medium text-2xl tracking-tighter">
                    Read my blog
                </h2>
                <p>I write about anything that comes to mind.</p>
                {/* <Separator /> */}
            </div>

            <div>
                {allBlogs
                    .sort((a, b) => {
                        if (
                            new Date(a.metadata.publishedAt) >
                            new Date(b.metadata.publishedAt)
                        ) {
                            return -1;
                        }
                        return 1;
                    })
                    .map((post) => (
                        <Link
                            key={post.slug}
                            className="group flex flex-col space-y-1 mb-5"
                            href={`/blog/${post.slug}`}
                        >
                            <div className="w-full flex flex-col">
                                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline">
                                    {post.metadata.title}
                                </p>
                                <Suspense
                                    fallback={
                                        <div className="animate-pulse">
                                            <div className="rounded-sm bg-slate-200 dark:bg-neutral-800 h-4 w-12"></div>
                                        </div>
                                    }
                                >
                                    <Views slug={post.slug} />
                                </Suspense>
                            </div>
                        </Link>
                    ))}
            </div>
        </section>
    );
}

async function Views({ slug }) {
    let views = await getViewsCount();

    return <ViewCounter allViews={views} slug={slug} />;
}
