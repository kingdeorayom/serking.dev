import Link from "next/link";

const Header = () => (
    <header className="pb-10">
        <Link
            href="/"
            className="flex cursor-pointer flex-col space-y-1 hover:opacity-80"
        >
            <h1 className="text-2xl font-semibold sm:text-2xl">
                Serking de Orayom
            </h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Web and mobile app developer
            </p>
        </Link>
    </header>
);

export default Header;
