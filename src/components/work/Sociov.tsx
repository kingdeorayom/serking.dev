import { useTranslations } from "next-intl";

const Sociov = () => {
  const t = useTranslations("pages.work");
  return (
    <div className="space-y-6">
      <div>
        <p className="mb-1 text-lg font-medium tracking-tighter">
          Sociov Technologies, Inc.
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {t("employmentHistory.sociov.role")}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">2021</p>
      </div>
      <p>{t("employmentHistory.sociov.description")}</p>
    </div>
  );
};

export default Sociov;
