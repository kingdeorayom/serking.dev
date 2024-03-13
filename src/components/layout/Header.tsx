import Link from "next/link";
// import ThemeToggler from "../ui/ThemeToggler";
import MenuToggler from "../ui/MenuToggler";
import Avatar from "../ui/Avatar";
import { navLinks } from "@/lib/consts";

const Header = () => {
    return (
        <header className="mb-12 flex items-center justify-between tracking-tight">
            <nav className="hidden md:flex flex-row space-x-6 pr-10">
                {navLinks.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1"
                    >
                        {item.label}
                    </Link>
                ))}
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
