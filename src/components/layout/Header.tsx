import Link from "next/link";
// import ThemeToggler from "../ui/ThemeToggler";
import MenuToggler from "../ui/MenuToggler";
import Avatar from "../ui/Avatar";

const Header = () => {
    const navItems = {
        "/": {
            name: "home",
        },
        "/work": {
            name: "work",
        },
        "/about": {
            name: "about",
        },
        "/blog": {
            name: "blog",
        },
        "/guestbook": {
            name: "guestbook",
        },
    };

    return (
        <header className="mb-12 flex items-center justify-between tracking-tight">
            <nav className="hidden md:flex flex-row space-x-6 pr-10">
                {Object.entries(navItems).map(([path, { name }]) => {
                    return (
                        <Link
                            key={path}
                            href={path}
                            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1"
                        >
                            {name}
                        </Link>
                    );
                })}
            </nav>
            <Avatar />
            <div className="flex gap-x-2.5">
                <MenuToggler />
                {/* <ThemeToggler /> */}
            </div>
        </header>
    );
};

export default Header;
