import Image from "next/image";
import not_found from "../../public/404.svg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <Image
                src={not_found}
                alt="Page not found."
                width={512}
                height={512}
                className="h-72 w-72 md:h-80 md:w-80"
            />
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Sorry, we couldn&apos;t find that page.
            </h1>
            <p className="text-lg">
                It seems like the page you requested doesn't exist.
                {/* Let&apos;s get you back on track. */}
            </p>
            <div>
                <Link
                    href="/"
                    className="hovered-link inline-flex items-center"
                >
                    Return to Home <FaArrowRight className="ml-2" />
                </Link>
            </div>
        </div>
    );
}
