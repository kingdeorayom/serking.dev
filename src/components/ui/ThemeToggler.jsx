"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const ThemeToggler = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted)
        return (
            <div className="flex animate-pulse space-x-4">
                <div className="h-4 w-4 rounded-full bg-slate-200 dark:bg-slate-900"></div>
            </div>
        );

    if (resolvedTheme === "light") {
        return (
            <button
                onClick={() => setTheme("dark")}
                type="button"
                aria-label="Switch to dark theme"
                className="group rounded-full bg-white px-3 py-2 shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition hover:ring-zinc-900/10"
            >
                <MdOutlineLightMode className="h-6 w-6 fill-amber-500" />
            </button>
        );
    }

    if (resolvedTheme === "dark") {
        return (
            <button
                onClick={() => setTheme("light")}
                type="button"
                aria-label="Switch to light theme"
                className="group rounded-full bg-white px-3 py-2 shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-neutral-800 dark:ring-white/10 dark:hover:ring-white/20"
            >
                <MdOutlineDarkMode className="h-6 w-6 fill-green-500" />
            </button>
        );
    }
};

export default ThemeToggler;
