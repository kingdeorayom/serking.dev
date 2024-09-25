"use client";

const Tabs = ({ tags, selectedTag, onTagClick }) => {
    return (
        <div className="flex flex-wrap">
            {tags.map((tag) => (
                <div
                    key={tag}
                    className={`font-medium mx-1 my-2 px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-50/10 ${
                        selectedTag === tag
                            ? "bg-slate-100 dark:text-gray-100 dark:hover:text-gray-100 hover:bg-gray-100 dark:bg-gray-50/10"
                            : ""
                    }`}
                    onClick={() => onTagClick(tag)}
                >
                    <label className="text-sm cursor-pointer capitalize">
                        {tag}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Tabs;
