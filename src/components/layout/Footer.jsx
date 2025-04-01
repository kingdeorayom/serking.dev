const Footer = () => {
    return (
        <footer className="text-xs text-center text-gray-500 dark:text-gray-200 space-y-2">
            <h6>{`© ${new Date().getFullYear()} Serking de Orayom`}</h6>
            <p>This is both a portfolio and a personal website.</p>
        </footer>
    );
};

export default Footer;
