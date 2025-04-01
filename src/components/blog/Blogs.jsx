"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import Tabs from "./Tabs";

const Blogs = ({ blogs }) => {
    const [selectedTag, setSelectedTag] = useState("all");

    const tags = ["all", "journal", "guide", "others"];

    const handleTagClick = (tag) =>
        setSelectedTag((prevTag) => (prevTag === tag ? null : tag));

    const filteredAndSortedBlogs = blogs
        .filter((blog) => {
            if (selectedTag === "all") return true;
            return blog.metadata.tag.includes(selectedTag);
        })
        .sort((a, b) => {
            return (
                new Date(b.metadata.publishedAt) -
                new Date(a.metadata.publishedAt)
            );
        });

    return (
        <section className="flex flex-col space-y-6">
            <Tabs
                tags={tags}
                selectedTag={selectedTag}
                onTagClick={handleTagClick}
            />
            <div className="flex flex-col space-y-10">
                {filteredAndSortedBlogs.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </section>
    );
};

export default Blogs;
