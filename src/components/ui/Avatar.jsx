import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import serkingdeorayom from "../../../public/images/me/serking.jpg";

const Avatar = ({ className }) => {
    return (
        <Link href="/" className="w-fit hover:opacity-90">
            <Image
                className={cn(
                    "h-10 w-10 rounded-full dark:border dark:border-white/10",
                    className
                )}
                src={serkingdeorayom}
                alt="Serking de Orayom"
                width={512}
                height={512}
            />
        </Link>
    );
};

export default Avatar;
