import Link from "next/link";
import ThemeToggler from "../ui/ThemeToggler";
import MenuToggler from "../ui/MenuToggler";
import Avatar from "../ui/Avatar";

const Header = () => {
    return (
        <header className="mb-12 flex items-center justify-between tracking-tight">
            <nav className="hidden md:flex flex-row space-x-6 pr-10">
                <Link href="/">
                    <p className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1">
                        home
                    </p>
                </Link>
                <Link href="/work">
                    <p className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1">
                        work
                    </p>
                </Link>
                <Link href="/about">
                    <p className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1">
                        about
                    </p>
                </Link>
                <Link href="/guestbook">
                    <p className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1">
                        guestbook
                    </p>
                </Link>
            </nav>
            <Avatar />
            <div className="flex gap-x-2.5">
                <MenuToggler />
                <ThemeToggler />
            </div>
        </header>
    );
};

export default Header;
