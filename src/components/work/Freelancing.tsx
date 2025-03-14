import { useTranslations } from "next-intl";
import Link from "next/link";
import SectionLabel from "../SectionLabel";

const Freelancing = () => {
  const t = useTranslations("pages.work");
  return (
    <div className="space-y-6">
      <SectionLabel label={t("title")} />
      {t.rich("introduction", {
        p: (chunks) => <p>{chunks}</p>,
      })}
      <div className="px-8">
        <ul className="list-disc space-y-2">
          <li>
            <Link
              href="https://timcoph.com/"
              target="_blank"
              className="hovered-link"
            >
              TIMCO Official Website
            </Link>
          </li>
          <li>
            <Link
              href="https://clafootwear.com/"
              target="_blank"
              className="hovered-link"
            >
              CLA Footwear
            </Link>
          </li>
          <li>
            <Link
              href="https://autopromo.ph/"
              target="_blank"
              className="hovered-link"
            >
              Auto Promo PH
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Freelancing;
