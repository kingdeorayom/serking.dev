import { useTranslations } from "next-intl";
import Link from "next/link";

const Padtech = () => {
  const t = useTranslations("pages.work");
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-1 text-lg font-medium tracking-tighter">
          Padtech Industries Corporation
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {t("employmentHistory.padtech.role")}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {t("employmentHistory.padtech.date")}
        </p>
      </div>
      {t.rich("employmentHistory.padtech.description", {
        p: (chunks) => <p>{chunks}</p>,
        em: (chunks) => <em>{chunks}</em>,
      })}
      <div className="flex flex-col space-y-4">
        <ul className="space-y-4">
          <li className="list-none font-semibold">{t("web")}</li>
          <li>
            <ul className="list-disc space-y-2 px-8">
              <li>
                <Link
                  href="https://adselle.com"
                  target="_blank"
                  className="hovered-link"
                >
                  Adselle
                </Link>
              </li>
              <li>
                <Link
                  href="https://rent.propertygo.site/"
                  target="_blank"
                  className="hovered-link"
                >
                  Propertygo Rental
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" className="hovered-link">
                  Yellowpad Ecommerce
                </Link>
              </li>
              <li>
                <Link
                  href="https://rent.transpopad.com/"
                  target="_blank"
                  className="hovered-link"
                >
                  Transpopad Rental
                </Link>
              </li>
              <li>
                <Link
                  href="http://consult.jobhost.biz/"
                  target="_blank"
                  className="hovered-link"
                >
                  Jobhost Consult
                </Link>
              </li>
              <li>
                <Link
                  href="https://buysellee.com/"
                  target="_blank"
                  className="hovered-link"
                >
                  Buysellee
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="space-y-4">
          <li className="list-none font-semibold">{t("mobile")}</li>
          <li>
            <ul className="list-disc space-y-2 px-8">
              <li>Adselle</li>
              <li>Propertygo</li>
              <li>Transpopad</li>
              <li>Yellowpad</li>
              <li>Jobhost</li>
              <li>Buysellee</li>
            </ul>
          </li>
        </ul>
        <div>
          {t.rich("employmentHistory.padtech.store", {
            apple: (chunks) => (
              <Link
                href="https://apps.apple.com/gb/developer/padel-technology-industries-padtech-corp/id1616805972"
                target="_blank"
                className="hovered-link w-fit"
              >
                {chunks}
              </Link>
            ),
            google: (chunks) => (
              <Link
                href="https://play.google.com/store/apps/developer?id=Padtech+Corp"
                target="_blank"
                className="hovered-link w-fit"
              >
                {chunks}
              </Link>
            ),
          })}
        </div>
      </div>
    </div>
  );
};

export default Padtech;
