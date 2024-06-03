"use client";

import { useState } from "react";
import Gaming from "./Gaming";
import Music from "./Music";

const Tabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (index: number) => setTabIndex(index);

    const TABS = [{ label: "Gaming" }, { label: "Music" }];

    return (
        <>
            <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 py-1">
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
                                            ? "text-[#292929] font-semibold bg-slate-50 dark:border-white"
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

            {tabIndex === 0 ? <Gaming /> : <Music />}
        </>
    );
};

export default Tabs;
