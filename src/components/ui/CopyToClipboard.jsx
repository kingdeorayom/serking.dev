"use client";

import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const CopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);
    const [isCopyingError, setIsCopyingError] = useState(false);

    const copyToClipboard = () => {
        try {
            navigator.clipboard.writeText("kingdeorayom@gmail.com");
            setIsCopied(true);
        } catch (error) {
            setIsCopied(false);
            setIsCopyingError(true);
        }
    };

    return (
        <section>
            {isCopyingError && (
                <div className="block space-y-3">
                    <label className="text-xs text-red-700 block">
                        {
                            "Error copying email address. For the meantime, manually copy this:"
                        }
                    </label>
                    <label className="text-xs font-semibold block">
                        {"kingdeorayom@gmail.com"}
                    </label>
                </div>
            )}
            <button
                onClick={copyToClipboard}
                className="flex flex-col md:flex-row mt-4 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300 cursor-pointer"
            >
                <label className="flex items-center hover:text-neutral-400 transition-all cursor-pointer">
                    <FaRegCopy size={16} className="cursor-pointer" />

                    <label className="ml-2 text-sm cursor-pointer">
                        {isCopied ? "copied" : "copy email address"}
                    </label>
                </label>
            </button>
        </section>
    );
};

export default CopyToClipboard;
