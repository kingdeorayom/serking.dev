"use client";

import { useState } from "react";
import Work from "./Work";
import Education from "./Education";
import Personal from "./Personal";

const Tabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (index) => setTabIndex(index);

    const TABS = [
        { label: "Career" },
        { label: "Education" },
        { label: "Personal" },
    ];

    return (
        <>
            <div className="border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
                <ul className="-mb-px flex flex-wrap">
                    {TABS.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="me-2"
                                onClick={() => handleTabChange(index)}
                            >
                                <label
                                    className={`inline-block cursor-pointer rounded-t-lg border-b p-4 ${
                                        tabIndex === index
                                            ? "border-b-2 border-blue-800 font-semibold text-blue-800 dark:border-white dark:text-white"
                                            : // : "text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700"
                                              "border-none hover:border-gray-300 dark:hover:text-gray-300"
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
