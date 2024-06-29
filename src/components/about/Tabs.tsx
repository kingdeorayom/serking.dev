"use client";

import { useState } from "react";
import Work from "./Work";
import Education from "./Education";
import Personal from "./Personal";

const Tabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (index: number) => setTabIndex(index);

    const TABS = [
        { label: "Work" },
        { label: "Education" },
        { label: "Personal" },
    ];

    return (
        <>
            <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 py-4">
                <ul className="flex flex-wrap -mb-px">
                    {TABS.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="me-2"
                                onClick={() => handleTabChange(index)}
                            >
                                <label
                                    className={`inline-block lowercase px-4 py-1 rounded-full cursor-pointer ${
                                        tabIndex === index
                                            ? "text-[#292929] font-semibold bg-slate-100 dark:border-white"
                                            : " border-none hover:border-gray-300 hover:text-gray-800 dark:hover:text-gray-300"
                                    }`}
                                    aria-current="page"
                                >
                                    {item.label}
                                </label>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {tabIndex === 0 ? (
                <Work />
            ) : tabIndex === 1 ? (
                <Education />
            ) : (
                <Personal />
            )}
        </>
    );
};

export default Tabs;
