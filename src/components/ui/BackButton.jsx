"use client";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

const BackButton = () => {
    const router = useRouter();
    const handleBack = () => router.back();
    return (
        <div className="flex items-center space-x-2 text-primary hover:underline cursor-pointer w-fit">
            <FaChevronLeft size={10} />
            <label onClick={handleBack} className="text-xs cursor-pointer">
                Back
            </label>
        </div>
    );
};

export default BackButton;
