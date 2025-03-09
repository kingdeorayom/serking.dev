import CopyToClipboard from "@/components/CopyToClipboard";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations();
  return (
    <section>
      <div className="mb-8 flex flex-col gap-y-6">
        <p>{t("pages.home.hero.introduction")}</p>
        <p>
          {t.rich("pages.home.hero.projects", {
            link: (children) => (
              <Link href="/work" title="View my works" className="hovered-link">
                {children}
              </Link>
            ),
          })}
        </p>
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
        {/* <p>
          Looking to collaborate on a project? Feel free to{" "}
          <Link
            href="mailto:kingdeorayom@gmail.com"
            title="kingdeorayom@gmail.com"
            className="hovered-link"
          >
            reach out via email
          </Link>
          . You can also follow me on{" "}
          <Link
            href="https://github.com/kingdeorayom"
            title="GitHub"
            className="hovered-link"
          >
            GitHub
          </Link>{" "}
          or connect with me on{" "}
          <Link
            href="https://www.linkedin.com/in/kingdeorayom/"
            title="GitHub"
            className="hovered-link"
          >
            LinkedIn
          </Link>
          .
        </p> */}
      </div>
      <CopyToClipboard />
    </section>
  );
}
