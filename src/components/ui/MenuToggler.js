"use client";

import Link from "next/link";
import { useState } from "react";

const MenuToggler = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <button
                className="group flex md:hidden items-center rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-zinc-800 dark:text-neutral-50 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-gray-900 dark:ring-white/10 dark:hover:ring-white/20"
                type="button"
                aria-expanded="false"
                onClick={openMenu}
            >
                Menu
                <svg
                    viewBox="0 0 8 6"
                    aria-hidden="true"
                    className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                >
                    <path
                        d="M1.75 1.75 4 4.25l2.25-2.5"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </button>
            <section className="relative md:hidden">
                {/* Backdrop */}
                {menuOpen && (
                    <div
                        className="fixed inset-0 z-50 transition-opacity duration-300 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80"
                        onClick={closeMenu}
                    />
                )}

                {/* Your centered menu */}
                {menuOpen && (
                    <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800">
                        <div className="flex flex-row-reverse items-center justify-between">
                            <button
                                aria-label="Close menu"
                                className="-m-1 p-1"
                                type="button"
                                onClick={closeMenu}
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
                                >
                                    <path
                                        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </button>
                            <h2 className="text-xs font-bold uppercase text-zinc-600 dark:text-zinc-400">
                                MENU
                            </h2>
                        </div>
                        <nav className="mt-6">
                            <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                                <li>
                                    <Link href="/" onClick={closeMenu}>
                                        <p className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-4 text-sm">
                                            Home
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/work" onClick={closeMenu}>
                                        <p className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-4 text-sm">
                                            Work
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" onClick={closeMenu}>
                                        <p className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-4 text-sm">
                                            About
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" onClick={closeMenu}>
                                        <p className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-4 text-sm">
                                            Blog
                                        </p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guestbook" onClick={closeMenu}>
                                        <p className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-4 text-sm">
                                            Guestbook
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </section>
        </>
    );
};

export default MenuToggler;
