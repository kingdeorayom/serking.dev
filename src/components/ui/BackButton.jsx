"use client";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        if (window.history.length > 1) {
            router.back();
        }
        router.push("/");
    };

    return (
        <div className="text-primary flex w-fit cursor-pointer items-center space-x-2 hover:underline">
            <FaChevronLeft size={10} />
            <label onClick={handleBack} className="cursor-pointer text-xs">
                Back
            </label>
        </div>
    );
};

export default BackButton;
