import Image from "next/image";
import Separator from "../ui/Separator";
import { MdGamepad } from "react-icons/md";

const GamingCard = ({ activity }: any) => {
    return (
        <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-50 rounded-full -start-3 ring-4 ring-slate-50 dark:ring-neutral-900 dark:bg-neutral-900">
                <MdGamepad size={18} color="#5488A4" />
            </span>
            <div className="md:flex justify-between">
                <div className="space-y-2">
                    <h3 className="font-medium line-clamp-1 text-neutral-900 dark:text-neutral-100">
                        {activity?.title}
                    </h3>
                    <div className="space-y-1">
                        <time className="block text-xs font-normal leading-none text-neutral-500 dark:text-neutral-400">
                            {`Last played: ${activity?.lastPlayed}`}
                        </time>
                        <time className="block text-xs font-normal leading-none text-neutral-500 dark:text-neutral-400">
                            {`Total play time: ${activity?.playTime} hours`}
                        </time>
                    </div>
                    {activity?.platform}
                </div>
                <div className="my-4">
                    <Image
                        src={activity?.image}
                        alt={activity?.title}
                        className="rounded-md"
                    />
                </div>
            </div>
            <Separator />
        </li>
    );
};

export default GamingCard;
