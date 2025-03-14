import { useTranslations } from "next-intl";
import Link from "next/link";

const Introduction = () => {
  const t = useTranslations("pages.about");
  return (
    <div className="flex flex-col space-y-6">
      {t.rich("introduction", {
        p: (chunks) => <p>{chunks}</p>,
        a: (chunks) => (
          <Link
            href="https://www.uphsl.edu.ph/"
            title="Visit site"
            target="_blank"
            className="hovered-link"
          >
            {chunks}
          </Link>
        ),
      })}
    </div>
  );
};

export default Introduction;
