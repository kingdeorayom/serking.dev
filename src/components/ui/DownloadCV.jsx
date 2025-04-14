"use client";
import { MdArrowDownward } from "react-icons/md";

const DownloadCV = () => {
    const handleClick = () => {
        window.open(
            `${window?.location?.origin}/Serking-de-Orayom-CV.pdf`,
            "_blank"
        );
    };

    return (
        <button
            onClick={handleClick}
            className="flex h-10 w-fit cursor-pointer items-center rounded-md border border-gray-200 bg-slate-50 px-3 py-2 text-sm leading-4 font-medium text-neutral-900 hover:bg-slate-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 hover:dark:bg-neutral-800"
        >
            Download CV
            <MdArrowDownward className="ms-2 h-4 w-4 fill-neutral-900 dark:fill-neutral-100" />
        </button>
    );
};

export default DownloadCV;
