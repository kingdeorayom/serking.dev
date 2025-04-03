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
        <header className="mb-12 sm:mb-14 flex items-center justify-between tracking-tight">
            <div className="flex-1 flex justify-start">
                {isAvatarShown ? <Avatar /> : null}
            </div>
            <Navbar pathname={pathname} />
            <div className="flex-1 flex justify-end gap-x-2.5">
                <MenuToggler />
                <ThemeToggler />
            </div>
        </header>
    );
};

export default Header;
