"use client";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        const hasReferrer = document.referrer !== "";

        if (hasReferrer) {
            router.back();
        }
        router.push("/notes");
    };

    return (
        <div
            onClick={handleBack}
            className="flex w-fit cursor-pointer items-center space-x-2 hover:underline"
        >
            <FaChevronLeft size={10} />
            <span className="text-xs">Back</span>
        </div>
    );
};

export default BackButton;
