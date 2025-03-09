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
        <div className="h-4 w-4 rounded-sm bg-gray-50 dark:bg-neutral-900"></div>
      </div>
    );

  if (resolvedTheme === "light") {
    return (
      <button
        onClick={() => setTheme("dark")}
        type="button"
        aria-label="Switch to dark theme"
        // className="group rounded-full bg-white px-3 py-2 shadow-md ring-1 shadow-zinc-900/5 ring-zinc-900/5 backdrop-blur transition hover:ring-zinc-900/10"
        className="rounded-sm bg-gray-50 p-2"
      >
        <MdOutlineLightMode className="h-5 w-5 fill-amber-500" />
      </button>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <button
        onClick={() => setTheme("light")}
        type="button"
        aria-label="Switch to light theme"
        // className="group rounded-full bg-white px-3 py-2 shadow-md ring-1 shadow-zinc-900/5 ring-zinc-900/5 backdrop-blur transition dark:bg-neutral-900 dark:ring-white/10 dark:hover:ring-white/20"
        className="rounded-sm bg-neutral-900 p-2"
      >
        <MdOutlineDarkMode className="h-6 w-6 fill-green-500" />
      </button>
    );
  }
};

export default ThemeToggler;
