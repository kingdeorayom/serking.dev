import LocaleSwitcher from "./ui/locale-switcher";

const Footer = () => (
  <footer className="flex flex-col space-y-5 lg:flex-row lg:justify-between lg:space-y-0">
    <LocaleSwitcher />
    <p className="text-xs text-gray-500 lg:order-first dark:text-gray-200">{`© ${new Date().getFullYear()} Serking de Orayom`}</p>
  </footer>
);

export default Footer;
