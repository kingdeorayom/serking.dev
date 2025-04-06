"use client";

import { useState } from "react";
import Career from "./Career";
import Education from "./Education";
import Personal from "./Personal";
import Recommendations from "./Recommendations";

const Tabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (index) => setTabIndex(index);

    const TABS = [
        { label: "Career" },
        { label: "Education" },
        { label: "Personal" },
        { label: "Uses" },
    ];

    return (
        <>
            <div className="border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-neutral-700 dark:text-gray-400">
                <div className="scrollbar-hide overflow-x-auto overflow-y-hidden">
                    <ul className="-mb-px flex flex-nowrap whitespace-nowrap">
                        {TABS.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className="me-2 flex-shrink-0"
                                    onClick={() => handleTabChange(index)}
                                >
                                    <label
                                        className={`inline-block cursor-pointer rounded-t-lg border-b p-4 ${
                                            tabIndex === index
                                                ? "border-b-4 border-blue-800 font-semibold text-blue-800 dark:border-white dark:text-white"
                                                : "border-none hover:text-blue-800 dark:hover:text-gray-300"
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
            </div>

            <div className="py-4">
                {tabIndex === 0 ? (
                    <Career />
                ) : tabIndex === 1 ? (
                    <Education />
                ) : tabIndex === 2 ? (
                    <Personal />
                ) : (
                    <Recommendations />
                )}
            </div>
        </>
    );
};

export default Tabs;
