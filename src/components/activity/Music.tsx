import Image from "next/image";
import { FaSpotify } from "react-icons/fa6";

const Music = () => {
    return (
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-md px-2 py-3  dark:bg-neutral-900 hover:dark:hover:bg-neutral-800">
            <div className="flex space-x-2">
                <FaSpotify size={18} color="#1DB954" className="ms-1" />
                <label className="text-xs">Last listened to</label>
            </div>
            <hr className="my-2 dark:border-neutral-700"></hr>
            <div className="flex items-center space-x-4">
                <div>
                    <Image
                        src="https://i.scdn.co/image/ab67616d00001e0298078d325c25a5ac4081cfba"
                        alt="Photographs and Memories"
                        width={44}
                        height={44}
                        className="rounded-md border border-neutral-100 dark:border-neutral-800"
                    />
                </div>
                <div className="flex flex-col flex-grow">
                    <p className="font-bold text-sm line-clamp-1 text-neutral-900 dark:text-neutral-100">
                        Photographs and Memories
                    </p>
                    <p className=" text-xs text-neutral-900 dark:text-neutral-100">
                        Jim Croce
                    </p>
                    <p className="text-xs text-neutral-900 dark:text-neutral-100">
                        8 hours ago
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Music;
