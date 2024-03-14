"use client";

import { FaRegCopy } from "react-icons/fa";

const CopyToClipboard = () => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText("kingdeorayom@gmail.com");
    };

    return (
        <section>
            <button
                onClick={copyToClipboard}
                className="flex flex-col md:flex-row mt-4 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300 cursor-pointer"
            >
                <label className="flex items-center hover:text-neutral-400 transition-all cursor-pointer">
                    <FaRegCopy size={18} className="cursor-pointer" />
                    <label className="h-7 ml-2 cursor-pointer">
                        copy email address
                    </label>
                </label>
            </button>
        </section>
    );
};

export default CopyToClipboard;
