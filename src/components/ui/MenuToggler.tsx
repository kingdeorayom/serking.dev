"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { HiChevronDown } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { NAVIGATION_LINKS } from "@/utils/consts";
import Badge from "../ui/Badge";
import { usePathname } from "next/navigation";

const MenuToggler = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    const pathname = usePathname();

    const label = useMemo(() => {
        const currentLink = NAVIGATION_LINKS.find(
            (link) => link.path === pathname
        );
        return currentLink ? currentLink.label : "unknown";
    }, [pathname]);

    const capitalizeLabel = (label: string) => {
        if (!label) return "";
        return label.charAt(0).toUpperCase() + label.slice(1);
    };

    return (
        <>
            <button
                className="group flex md:hidden items-center rounded-full px-4 py-2 text-xs font-medium text-zinc-800 bg-white/90 dark:text-neutral-50 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 hover:ring-zinc-900/10 backdrop-blur dark:bg-neutral-800 dark:ring-white/10 dark:hover:ring-white/20"
                aria-expanded="false"
                onClick={openMenu}
            >
                {capitalizeLabel(label)}
                <HiChevronDown className="ml-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
            </button>
            <section className="relative md:hidden">
                {menuOpen && (
                    <div
                        className="fixed inset-0 z-50 transition-opacity duration-300 bg-zinc-800/20 backdrop-blur-sm dark:bg-black/80"
                        onClick={closeMenu}
                    />
                )}

                {menuOpen && (
                    <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
                        <div className="flex flex-row-reverse items-center justify-between">
                            <button
                                aria-label="Close menu"
                                className="-m-1 p-1"
                                type="button"
                                onClick={closeMenu}
                            >
                                <IoIosClose className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                            </button>
                            <h2 className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">
                                MENU
                            </h2>
                        </div>
                        <nav className="mt-6">
                            <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                                {NAVIGATION_LINKS.map((item) => {
                                    const isSelected = item.path === pathname;

                                    return (
                                        <li
                                            key={item.path}
                                            className="cursor-pointer hover:bg-slate-50 dark:hover:bg-neutral-800 px-2 rounded"
                                        >
                                            <Link
                                                href={item.path}
                                                onClick={closeMenu}
                                                className="flex items-center justify-between"
                                            >
                                                <p className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-4 text-sm capitalize">
                                                    {item.label}
                                                </p>

                                                {isSelected && (
                                                    <Badge label="Current" />
                                                )}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                )}
            </section>
        </>
    );
};

export default MenuToggler;
