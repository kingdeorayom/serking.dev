"use client";

import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const CopyEmail = () => {
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
                    <label className="block text-xs text-red-700">
                        {
                            "Error copying email address. For the meantime, manually copy this:"
                        }
                    </label>
                    <label className="block text-xs font-semibold">
                        {"kingdeorayom@gmail.com"}
                    </label>
                </div>
            )}
            <button
                onClick={copyToClipboard}
                className="font-sm mt-4 flex cursor-pointer flex-col space-x-0 space-y-2 text-neutral-600 dark:text-neutral-300 md:flex-row md:space-x-4 md:space-y-0"
            >
                <label className="flex cursor-pointer items-center transition-all hover:text-neutral-400">
                    <FaRegCopy size={16} className="cursor-pointer" />

                    <label className="ml-2 cursor-pointer text-sm">
                        {isCopied ? "copied" : "copy email address"}
                    </label>
                </label>
            </button>
        </section>
    );
};

export default CopyEmail;
