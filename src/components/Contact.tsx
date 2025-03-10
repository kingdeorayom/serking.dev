import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import CopyToClipboard from "./CopyToClipboard";

const Contact = () => {
  const t = useTranslations();
  return (
    <div className="flex flex-col space-y-6">
      <p>
        {t.rich("pages.home.hero.connect", {
          email: (children) => (
            <Link
              href="mailto:kingdeorayom@gmail.com"
              title="kingdeorayom@gmail.com"
              className="hovered-link"
            >
              {children}
            </Link>
          ),
          github: (children) => (
            <Link
              href="https://github.com/kingdeorayom"
              title="GitHub"
              className="hovered-link"
            >
              {children}
            </Link>
          ),
          linkedin: (children) => (
            <Link
              href="https://www.linkedin.com/in/kingdeorayom/"
              title="LinkedIn"
              className="hovered-link"
            >
              {children}
            </Link>
          ),
        })}
      </p>
      <CopyToClipboard />
    </div>
  );
};

export default Contact;
