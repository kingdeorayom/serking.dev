import Link from "next/link";
import ThemeToggler from "./ui/theme-toggler";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("ui.header");
  return (
    <header className="flex items-center justify-between pb-12">
      <Link
        href="/"
        className="flex w-fit cursor-pointer items-center space-x-5 hover:opacity-80"
      >
        <div className="flex flex-col space-y-1">
          <h1 className="text-xl font-semibold">Serking de Orayom</h1>
        </div>
      </Link>
      <div className="flex items-center space-x-5">
        <Link href="/about" className="hovered-link text-sm">
          {t("about")}
        </Link>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
