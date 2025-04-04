const Footer = () => {
    return (
        <footer className="space-y-2 text-center text-xs text-gray-500 dark:text-gray-200">
            <p>{`© ${new Date().getFullYear()} Serking de Orayom`}</p>
            {/* <p>This is both a portfolio and a personal website.</p> */}
        </footer>
    );
};

export default Footer;
