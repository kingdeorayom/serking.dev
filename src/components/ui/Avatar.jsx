import Image from "next/image";
import Link from "next/link";
import serkingdeorayom from "../../../public/images/me/studio.jpg";
// import serkingdeorayom from "../../../public/images/me/favicon.png";
// import serkingdeorayom from "../../../public/images/me/formal-pic-square-blue.jpg";

const Avatar = () => {
    return (
        <Link href="/" className="hover:opacity-90">
            <Image
                className="w-10 h-10 rounded-full dark:border dark:border-white/10"
                src={serkingdeorayom}
                alt="Serking de Orayom"
                width={40}
                height={40}
            />
        </Link>
    );
};

export default Avatar;
