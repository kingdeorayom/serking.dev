import LocaleSwitcher from "./LocaleSwitcher";

const Footer = () => (
  <footer className="mt-16 flex flex-col space-y-5 lg:flex-row lg:justify-between lg:space-y-0">
    <p className="text-xs text-gray-500 dark:text-gray-200">{`© ${new Date().getFullYear()} Serking de Orayom`}</p>
    <LocaleSwitcher />
  </footer>
);

export default Footer;
