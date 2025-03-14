"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className="flex animate-pulse space-x-4">
        <div className="h-4 w-4 rounded-2xl bg-gray-50 dark:bg-neutral-900"></div>
      </div>
    );

  if (resolvedTheme === "light") {
    return (
      <button
        onClick={() => setTheme("dark")}
        type="button"
        aria-label="Switch to dark theme"
        className="cursor-pointer rounded-2xl bg-gray-50 p-2"
      >
        <MdOutlineLightMode className="h-5 w-5 fill-slate-900" />
      </button>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <button
        onClick={() => setTheme("light")}
        type="button"
        aria-label="Switch to light theme"
        className="cursor-pointer rounded-2xl bg-neutral-900 p-2"
      >
        <MdOutlineDarkMode className="h-5 w-5 fill-white" />
      </button>
    );
  }
};

export default ThemeToggler;
