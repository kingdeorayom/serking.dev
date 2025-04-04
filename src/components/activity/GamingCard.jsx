import Image from "next/image";
// import Separator from "../ui/Separator";
import { MdGamepad } from "react-icons/md";

const GamingCard = ({ activity }) => {
    return (
        <li className="ms-6 mb-10">
            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 ring-4 ring-slate-50 dark:bg-neutral-900 dark:ring-neutral-900">
                <MdGamepad size={18} color="#5488A4" />
            </span>
            <div className="justify-between md:flex">
                <div className="space-y-2">
                    <h3 className="line-clamp-1 font-medium text-neutral-900 dark:text-neutral-100">
                        {activity?.title}
                    </h3>
                    <div className="space-y-1">
                        <time className="block text-xs leading-none font-normal text-neutral-500 dark:text-neutral-300">
                            {`Last played: ${activity?.lastPlayed}`}
                        </time>
                        <time className="block text-xs leading-none font-normal text-neutral-500 dark:text-neutral-300">
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
            {/* <Separator /> */}
        </li>
    );
};

export default GamingCard;
