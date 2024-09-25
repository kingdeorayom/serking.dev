"use client";

import Link from "next/link";
import ThemeToggler from "../ui/ThemeToggler";
import MenuToggler from "../ui/MenuToggler";
import Avatar from "../ui/Avatar";
import { NAVIGATION_LINKS } from "@/utils/consts";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="mb-12 sm:mb-14 flex items-center justify-between tracking-tight">
            <div className="flex items-center space-x-10">
                <Avatar />
                <nav className="hidden sm:flex flex-row space-x-6 pr-10">
                    {NAVIGATION_LINKS.map((item) => {
                        const isSelected = item.path === pathname;

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`transition-all hover:opacity-60 flex align-middle relative py-1 ${
                                    isSelected ? "font-medium" : ""
                                } `}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <div className="flex gap-x-2.5">
                <MenuToggler />
                <ThemeToggler />
            </div>
        </header>
    );
};

export default Header;
