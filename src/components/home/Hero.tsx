import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations("pages.home.hero");
  return (
    <div className="flex flex-col space-y-6">
      {t.rich("introduction", {
        p: (chunks) => <p>{chunks}</p>,
        a: (chunks) => (
          <Link
            href="/work"
            title={t("linkTitleAttribute")}
            className="hovered-link"
          >
            {chunks}
          </Link>
        ),
      })}
    </div>
  );
};

export default Hero;
