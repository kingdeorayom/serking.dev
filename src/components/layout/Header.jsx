"use client";

import ThemeToggler from "../ui/ThemeToggler";
import MenuToggler from "../ui/MenuToggler";
import Avatar from "../ui/Avatar";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const Header = () => {
    const pathname = usePathname();
    const isAvatarShown = pathname !== "/";

    return (
        <header className="mb-12 flex items-center justify-between tracking-tight sm:mb-14">
            <div className="flex flex-1 justify-start">
                {isAvatarShown ? <Avatar /> : null}
            </div>
            <Navbar pathname={pathname} />
            <div className="flex flex-1 justify-end gap-x-2.5">
                <MenuToggler />
                <ThemeToggler />
            </div>
        </header>
    );
};

export default Header;
