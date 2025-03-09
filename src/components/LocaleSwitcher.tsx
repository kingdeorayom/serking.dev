"use client";

import React, { startTransition, useEffect, useState } from "react";
import { getUserLocale, setUserLocale } from "@/services/locale";

const LocaleSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const locales = [
    { code: "en", label: "English" },
    { code: "jp", label: "日本語" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "hi", label: "हिन्दी" },
    { code: "pt", label: "Português" },
    { code: "zh", label: "简体中文" },
  ];

  useEffect(() => {
    const fetchUserLocale = async () => {
      const userLocale = await getUserLocale();
      const currentLocale = locales.find(
        (locale) => locale.code === userLocale
      );
      setSelectedLanguage(currentLocale?.label || "English");
    };

    fetchUserLocale();
  }, []);

  const handleClick = (locale: string) => {
    startTransition(() => {
      setUserLocale(locale);
      const selectedLocale = locales.find((loc) => loc.code === locale);
      setSelectedLanguage(selectedLocale?.label || "English");
    });
  };

  return (
    <div className="flex flex-wrap space-x-3">
      {locales.map(({ code, label }) => {
        const isSelected = selectedLanguage === label;
        return (
          <button
            key={code}
            onClick={() => handleClick(code)}
            className={`cursor-pointer py-1 text-xs opacity-90 hover:underline lg:py-0 dark:text-gray-200 ${isSelected ? "underline" : ""}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default LocaleSwitcher;
