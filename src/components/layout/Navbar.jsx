import { NAVIGATION_LINKS } from "@/utils/consts";
import Link from "next/link";

const Navbar = ({ pathname }) => {
    const FILTERED_NAVIGATION_LINKS = NAVIGATION_LINKS.filter(
        (item) => item.path !== "/"
    );
    return (
        <nav
            className="hidden justify-center sm:flex flex-row space-x-6 
            group items-center rounded-full px-5 py-2 text-sm text-zinc-800 bg-white/90 dark:text-neutral-50 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 hover:ring-zinc-900/10 backdrop-blur dark:bg-neutral-800 dark:ring-white/10 dark:hover:ring-white/20
            text-center"
        >
            {FILTERED_NAVIGATION_LINKS.map((item) => {
                const isSelected = item.path === pathname;
                return (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`font-medium dark:hover:opacity-60 hover:text-blue-800 dark:hover:text-white flex align-middle relative py-1 ${
                            isSelected
                                ? "text-blue-800 dark:text-white hover:opacity-100"
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
