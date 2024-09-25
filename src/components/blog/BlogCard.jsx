import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

const BlogCard = ({ post }) => {
    return (
        <Link key={post.slug} className="group" href={`/blog/${post.slug}`}>
            <div className="w-full flex flex-col space-y-4">
                <div className="rounded-md overflow-hidden max-w-full max-h-full w-full h-36">
                    <Image
                        src={post.metadata.image}
                        className="rounded-md h-full w-full object-cover"
                        width={512}
                        height={512}
                        alt={post.metadata.title}
                    />
                </div>
                <div className="space-y-2">
                    <p
                        className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:underline font-medium line-clamp-1"
                        title={post.metadata.title}
                    >
                        {post.metadata.title}
                    </p>
                    <p className="text-xs text-neutral-900 dark:text-neutral-400">
                        {/* {post.metadata.publishedAt} */}
                        {format(post?.metadata.publishedAt, "MMMM d, yyyy")}
                    </p>
                    <p className="text-sm text-neutral-900 dark:text-neutral-400 line-clamp-2">
                        {post.metadata.summary}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
