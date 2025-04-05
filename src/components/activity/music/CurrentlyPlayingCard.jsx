import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaSpotify } from "react-icons/fa6";

const CurrentlyPlayingCard = ({ activity }) => {
    if (!activity.isPlaying) {
        return (
            <div className="p-5">
                <p className="text-sm">
                    Serking is currently not playing a song on Spotify.
                </p>
            </div>
        );
    }

    return (
        <li className="ms-6 mb-10">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 ring-4 ring-slate-50 dark:bg-neutral-900 dark:ring-neutral-900">
                {activity?.icon}
                <FaSpotify size={18} color="#1DB954" />
            </span>
            <div className="justify-between md:flex">
                <div className="space-y-2">
                    <h3 className="line-clamp-1 font-medium text-neutral-900 dark:text-neutral-100">
                        {activity?.title}
                    </h3>
                    <div className="flex flex-col space-y-2">
                        <time className="block text-sm leading-none font-normal text-neutral-500 dark:text-neutral-300">
                            {`${activity?.artist}`}
                        </time>
                    </div>
                    <Link
                        target="_blank"
                        href={activity?.songUrl}
                        className="flex h-6 w-fit items-center space-x-1 rounded-md border border-gray-200 px-2 py-1 hover:bg-slate-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    >
                        <div>
                            <FaPlay size={14} />
                        </div>
                        <p className="text-xs font-semibold">Play</p>
                    </Link>
                </div>
                <div className="my-4">
                    <Image
                        src={activity?.albumImageUrl}
                        alt={activity?.title}
                        className="h-[100px] w-[100px] rounded-md"
                        height={300}
                        width={300}
                    />
                    {/* <div className="animate-spin-slow relative h-24 w-24 overflow-hidden rounded-full border-[5px] border-black bg-[conic-gradient(#222_0deg_20deg,#111_20deg_40deg,#222_40deg_60deg,#111_60deg_80deg,#222_80deg_100deg,#111_100deg_120deg,#222_120deg_140deg,#111_140deg_160deg,#222_160deg_180deg,#111_180deg_200deg,#222_200deg_220deg,#111_220deg_240deg,#222_240deg_260deg,#111_260deg_280deg,#222_280deg_300deg,#111_300deg_320deg,#222_320deg_340deg,#111_340deg_360deg)] shadow-xl dark:border-white">
                        <div className="absolute top-1/2 left-1/2 z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-full border-2 border-black shadow-inner">
                            <Image
                                src={activity?.albumImageUrl}
                                alt={activity?.title}
                                className="h-full w-full object-cover"
                                height={300}
                                width={300}
                            />
                        </div>
                        <div className="absolute top-1/2 left-1/2 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black" />
                    </div> */}
                </div>
            </div>
            {/* <Separator /> */}
        </li>
    );
};

export default CurrentlyPlayingCard;
