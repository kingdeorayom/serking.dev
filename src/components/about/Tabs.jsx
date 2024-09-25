"use client";

import { useState } from "react";
import Work from "./Work";
import Education from "./Education";
import Personal from "./Personal";

const Tabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (index) => setTabIndex(index);

    const TABS = [
        { label: "Work" },
        { label: "Education" },
        { label: "Personal" },
    ];

    return (
        <>
            <div className="text-sm font-medium text-center py-4">
                <ul className="flex flex-wrap -mb-px">
                    {TABS.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="me-2"
                                onClick={() => handleTabChange(index)}
                            >
                                <label
                                    className={`inline-block lowercase px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-50/10 ${
                                        tabIndex === index
                                            ? "bg-slate-100 dark:text-gray-100 dark:hover:text-gray-100 hover:bg-gray-100 dark:bg-gray-50/10"
                                            : " "
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
