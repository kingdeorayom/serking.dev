"use client";

import { useState } from "react";
import Gaming from "./Gaming";
import Music from "./Music";

const Tabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (index) => setTabIndex(index);

    const TABS = [{ label: "Gaming" }, { label: "Music" }];

    return (
        <>
            <div className="text-sm font-medium text-center py-1">
                <ul className="flex flex-wrap -mb-px">
                    {TABS.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="me-2"
                                onClick={() => handleTabChange(index)}
                            >
                                <label
                                    className={`font-medium mx-1 my-2 px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-50/10 ${
                                        tabIndex === index
                                            ? "bg-slate-50 border dark:border-neutral-700 dark:text-gray-100 dark:hover:text-gray-100 hover:bg-gray-100 dark:bg-gray-50/10"
                                            : ""
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

            {tabIndex === 0 ? <Gaming /> : <Music />}
        </>
    );
};

export default Tabs;
