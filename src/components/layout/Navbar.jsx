import { NAVIGATION_LINKS } from "@/utils/consts";
import Link from "next/link";

const Navbar = ({ pathname }) => {
    const FILTERED_NAVIGATION_LINKS = NAVIGATION_LINKS.filter(
        (item) => item.path !== "/"
    );
    return (
        <nav className="group hidden flex-row items-center justify-center space-x-6 rounded-full bg-white/90 px-5 py-2 text-center text-sm text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur hover:ring-zinc-900/10 sm:flex dark:bg-neutral-800 dark:text-neutral-50 dark:ring-white/10 dark:hover:ring-white/20">
            {FILTERED_NAVIGATION_LINKS.map((item) => {
                const isSelected = item.path === pathname;
                return (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`relative flex py-1 align-middle font-medium hover:text-blue-800 dark:hover:text-white dark:hover:opacity-60 ${
                            isSelected
                                ? "text-blue-800 hover:opacity-100 dark:text-white"
                                : ""
                        } `}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;
