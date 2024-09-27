import Link from "next/link";

const Header = () => {
    return (
        <header className="pb-10">
            <Link
                href="/"
                className="flex flex-col space-y-1 hover:opacity-80 cursor-pointer"
            >
                <h1 className="font-semibold text-2xl sm:text-2xl">
                    Serking de Orayom
                </h1>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    Web and mobile app developer
                </p>
            </Link>
        </header>
    );
};

export default Header;
