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
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    {TABS.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="me-2"
                                onClick={() => handleTabChange(index)}
                            >
                                <label
                                    className={`inline-block lowercase p-4 border-b rounded-t-lg cursor-pointer ${
                                        tabIndex === index
                                            ? "text-black border-b-2 font-semibold border-black dark:text-white dark:border-white"
                                            : // : "text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700"
                                              " border-none hover:border-gray-300 dark:hover:text-gray-300"
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
