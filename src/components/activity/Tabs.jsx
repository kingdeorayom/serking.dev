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
            <div className="py-1 text-center text-sm font-medium">
                <ul className="-mb-px flex flex-wrap">
                    {TABS.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="me-2"
                                onClick={() => handleTabChange(index)}
                            >
                                <label
                                    className={`mx-1 my-2 cursor-pointer rounded-lg px-3 py-1 font-medium hover:bg-gray-50 dark:hover:bg-gray-50/10 ${
                                        tabIndex === index
                                            ? "border bg-slate-50 hover:bg-gray-100 dark:border-neutral-700 dark:bg-gray-50/10 dark:text-gray-100 dark:hover:text-gray-100"
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
