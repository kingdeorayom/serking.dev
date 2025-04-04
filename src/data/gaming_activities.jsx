import { SiNintendoswitch, SiSteam } from "react-icons/si";
// Nintendo imports
import botw from "../../public/images/nintendo/zelda_breath_of_the_wild.png";
import shining_pearl from "../../public/images/nintendo/pokemon_shining_pearl.png";
import animal_crossing from "../../public/images/nintendo/animal_crossing.png";
import f_zero_99 from "../../public/images/nintendo/f_zero_99.png";
import hollow_knight from "../../public/images/nintendo/hollow_knight.png";
import mario_kart_8_deluxe from "../../public/images/nintendo/mario_kart_8_deluxe.png";
import legends_arceus from "../../public/images/nintendo/pokemon_legends_arceus.png";
import lets_go_pikachu from "../../public/images/nintendo/pokemon_lets_go_pikachu.png";
import scarlet from "../../public/images/nintendo/pokemon_scarlet.png";
import stardew_valley from "../../public/images/nintendo/stardew_valley.png";
import smash_bros from "../../public/images/nintendo/super_smash_bros.png";
import links_awakening from "../../public/images/nintendo/zelda_links_awakening.png";
// Steam imports
import ace_attorney_trilogy from "../../public/images/steam/ace_attorney_trilogy.png";
import assassins_creed_origins from "../../public/images/steam/assassins_creed_origins.png";
import ff6_pixel_remaster from "../../public/images/steam/ff6_pixel_remaster.png";
import gta_5 from "../../public/images/steam/gta_5.png";
import hades from "../../public/images/steam/hades.png";
import rdr2 from "../../public/images/steam/rdr2.png";
import witcher_3 from "../../public/images/steam/witcher_3.png";

const NintendoBadge = () => (
    <div className="flex h-6 w-fit items-center space-x-2 rounded-md bg-[#E60012] px-2 py-1 text-white">
        <div>
            <SiNintendoswitch size={14} />
        </div>
        <p className="text-xs font-semibold">Switch</p>
    </div>
);

const SteamBadge = () => (
    <div className="flex h-6 w-fit items-center space-x-2 rounded-md bg-[#1B2838] px-2 py-1 text-white">
        <div>
            <SiSteam size={14} />
        </div>
        <p className="text-xs font-semibold">Steam</p>
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
    {
        id: 3,
        title: "Animal Crossing: New Horizons",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 312.4,
        platform: <NintendoBadge />,
        image: animal_crossing,
    },
    {
        id: 4,
        title: "F-Zero 99",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 5.7,
        platform: <NintendoBadge />,
        image: f_zero_99,
    },
    {
        id: 5,
        title: "Hollow Knight",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 85.3,
        platform: <NintendoBadge />,
        image: hollow_knight,
    },
    {
        id: 6,
        title: "Mario Kart 8 Deluxe",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 234.1,
        platform: <NintendoBadge />,
        image: mario_kart_8_deluxe,
    },
    {
        id: 7,
        title: "Pokémon Legends: Arceus",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 100.5,
        platform: <NintendoBadge />,
        image: legends_arceus,
    },
    {
        id: 8,
        title: "Pokémon Let's Go, Pikachu!",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 45.3,
        platform: <NintendoBadge />,
        image: lets_go_pikachu,
    },
    {
        id: 9,
        title: "Pokémon Scarlet",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 210.6,
        platform: <NintendoBadge />,
        image: scarlet,
    },
    {
        id: 10,
        title: "Stardew Valley",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 150.8,
        platform: <NintendoBadge />,
        image: stardew_valley,
    },
    {
        id: 11,
        title: "Super Smash Bros. Ultimate",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 95.4,
        platform: <NintendoBadge />,
        image: smash_bros,
    },
    {
        id: 12,
        title: "The Legend of Zelda: Link's Awakening",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 67.2,
        platform: <NintendoBadge />,
        image: links_awakening,
    },
    {
        id: 13,
        title: "Ace Attorney Trilogy",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 45.8,
        platform: <SteamBadge />,
        image: ace_attorney_trilogy,
    },
    {
        id: 14,
        title: "Assassin's Creed Origins",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 78.6,
        platform: <SteamBadge />,
        image: assassins_creed_origins,
    },
    {
        id: 15,
        title: "Final Fantasy VI Pixel Remaster",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 59.3,
        platform: <SteamBadge />,
        image: ff6_pixel_remaster,
    },
    {
        id: 16,
        title: "Grand Theft Auto V",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 150.1,
        platform: <SteamBadge />,
        image: gta_5,
    },
    {
        id: 17,
        title: "Hades",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 70.4,
        platform: <SteamBadge />,
        image: hades,
    },
    {
        id: 18,
        title: "Red Dead Redemption 2",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 240.2,
        platform: <SteamBadge />,
        image: rdr2,
    },
    {
        id: 19,
        title: "The Witcher 3: Wild Hunt",
        lastPlayed: new Date("June 3, 2024").toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
        }),
        playTime: 120.5,
        platform: <SteamBadge />,
        image: witcher_3,
    },
];

export default GAMING_ACTIVITIES;
