import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaSpotify } from "react-icons/fa6";
import Separator from "../../ui/Separator";

const MusicCard = ({ activity }) => {
    const imageURL = activity?.coverImage?.url || activity?.albumImageUrl;

    return (
        <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-50 rounded-full -start-3 ring-4 ring-slate-50 dark:ring-neutral-900 dark:bg-neutral-900">
                {activity?.icon}
                <FaSpotify size={18} color="#1DB954" />
            </span>
            <div className="md:flex justify-between">
                <div className="space-y-2">
                    <h3 className="font-medium line-clamp-1 text-neutral-900 dark:text-neutral-100">
                        {activity?.title}
                    </h3>
                    <div className="space-y-1">
                        <time className="block text-sm font-normal leading-none text-neutral-500 dark:text-neutral-400">
                            {`${activity?.artist}`}
                        </time>
                        {/* <time className="block text-xs font-normal leading-none text-neutral-500 dark:text-neutral-400">
                            {`Last Played: ${activity?.lastPlayed} mins ago`}
                        </time> */}
                    </div>
                    {/* <Link
                        target="_blank"
                        href={activity?.url}
                        className="flex items-center space-x-1 rounded-md h-6 px-2 py-1 w-fit border border-neutral-200 dark:border-neutral-700 hover:bg-slate-50 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    >
                        <div>
                            <FaPlay size={14} />
                        </div>
                        <p className="font-semibold text-xs">Play</p>
                    </Link> */}
                </div>
                <div className="my-4">
                    <Image
                        src={imageURL}
                        alt={activity?.title}
                        className="rounded-md h-[72px] w-[72px]"
                        height={300}
                        width={300}
                    />
                </div>
            </div>
            {/* <Separator /> */}
        </li>
    );
};

export default MusicCard;
