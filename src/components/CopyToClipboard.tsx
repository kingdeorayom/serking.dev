"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const CopyToClipboard = () => {
  const t = useTranslations();
  const [isCopied, setIsCopied] = useState(false);
  const [isCopyingError, setIsCopyingError] = useState(false);

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText("kingdeorayom@gmail.com");
      setIsCopied(true);
    } catch (error) {
      console.log(error);
      setIsCopied(false);
      setIsCopyingError(true);
    }
  };

  return (
    <section>
      {isCopyingError && (
        <div className="block space-y-3">
          <label className="block text-xs text-red-700 dark:text-red-500">
            {t("pages.home.copyEmailError")}
          </label>
          <label className="block text-xs font-semibold">
            {"kingdeorayom@gmail.com"}
          </label>
        </div>
      )}
      <button
        onClick={copyToClipboard}
        className="font-sm mt-4 flex cursor-pointer flex-col space-y-2 space-x-0 text-neutral-600 md:flex-row md:space-y-0 md:space-x-4 dark:text-neutral-300"
      >
        <label className="flex cursor-pointer items-center hover:text-neutral-400">
          <FaRegCopy size={16} className="cursor-pointer" />

          <label className="ml-2 cursor-pointer text-sm">
            {isCopied ? t("pages.home.copied") : t("pages.home.copyEmail")}
          </label>
        </label>
      </button>
    </section>
  );
};

export default CopyToClipboard;
