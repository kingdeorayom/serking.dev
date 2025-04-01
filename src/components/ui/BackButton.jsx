"use client";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        if (window.history.length > 1) {
            // There is a history to go back to
            router.back();
        } else {
            // No history, go to the homepage
            router.push("/");
        }
    };

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
