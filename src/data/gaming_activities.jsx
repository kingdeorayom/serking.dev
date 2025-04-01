import { SiNintendoswitch, SiSteam } from "react-icons/si";
import botw from "/public/images/nintendo/zelda_breath_of_the_wild.png";
import shining_pearl from "/public/images/nintendo/pokemon_shining_pearl.png";

const NintendoBadge = () => (
    <div className="flex items-center space-x-2 rounded-md h-6 px-2 py-1 w-fit bg-[#E60012] text-white">
        <div>
            <SiNintendoswitch size={14} />
        </div>
        <p className="font-semibold text-xs">Switch</p>
    </div>
);

const SteamBadge = () => (
    <div className="flex items-center space-x-2 rounded-md h-6 px-2 py-1 w-fit bg-[#1B2838] text-white">
        <div>
            <SiSteam size={14} />
        </div>
        <p className="font-semibold text-xs">Steam</p>
    </div>
);

const GAMING_ACTIVITIES = [
    {
        id: 1,
        title: "The Legend of Zelda: Breath of the Wild",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 577.7,
        platform: <NintendoBadge />,
        image: botw,
    },
    {
        id: 2,
        title: "Pokémon Shining Pearl",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 20.2,
        platform: <NintendoBadge />,
        image: shining_pearl,
    },
];

export default GAMING_ACTIVITIES;
