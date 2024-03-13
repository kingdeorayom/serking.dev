import Image from "next/image";
import Link from "next/link";
import serkingdeorayom from "../../../public/images/me/serking-de-orayom.jpg";

const Avatar = () => {
    return (
        <Link href="/">
            <Image
                className="w-10 h-10 rounded-full md:hidden"
                src={serkingdeorayom}
                alt="Serking de Orayom"
            />
        </Link>
    );
};

export default Avatar;
