import { MdGamepad } from "react-icons/md";

const Games = () => {
    return (
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-md px-2 py-3  dark:bg-neutral-900 hover:dark:hover:bg-neutral-800">
            <div className="flex space-x-2">
                <MdGamepad size={18} color="#5488A4" className="ms-1" />
                <label className="text-xs">Last played game</label>
            </div>
            <hr className="my-2 dark:border-neutral-700"></hr>
            <div className="flex items-center space-x-4">
                <div className="animate-pulse">
                    <div className="rounded-md bg-slate-200 dark:bg-slate-900 h-11 w-11"></div>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-sm text-neutral-900 dark:text-neutral-100">
                        Stardew Valley
                    </p>
                    <p className=" text-xs text-neutral-900 dark:text-neutral-100">
                        Last played: March 20, 2024
                    </p>
                    <p className="text-xs text-neutral-900 dark:text-neutral-100">
                        Total playtime:{" "}
                        <span className="font-semibold">518 hours</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Games;
