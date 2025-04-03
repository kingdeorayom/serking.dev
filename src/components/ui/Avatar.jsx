import Image from "next/image";
import Link from "next/link";
import serkingdeorayom from "../../../public/images/me/studio.jpg";
import { cn } from "@/utils/cn";
// import serkingdeorayom from "../../../public/images/me/favicon.png";
// import serkingdeorayom from "../../../public/images/me/formal-pic-square-blue.jpg";

const Avatar = ({ className }) => {
    return (
        <Link href="/" className="hover:opacity-90">
            <Image
                className={cn(
                    "w-10 h-10 rounded-full dark:border dark:border-white/10",
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
