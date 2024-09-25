"use client";

import { useState } from "react";
import Tabs from "./Tabs"; // Adjust the path as necessary
import BlogCard from "./BlogCard";

const Blogs = ({ blogs }) => {
    const [selectedTag, setSelectedTag] = useState("all");

    const tags = ["all", "journal", "guide", "others"];

    const handleTagClick = (tag) => {
        setSelectedTag((prevTag) => (prevTag === tag ? null : tag));
    };

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
        <div className="space-y-12">
            <Tabs
                tags={tags}
                selectedTag={selectedTag}
                onTagClick={handleTagClick}
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-10">
                {filteredAndSortedBlogs.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Blogs;
