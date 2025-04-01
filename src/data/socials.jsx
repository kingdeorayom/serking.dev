import {
    FaLinkedin,
    FaGithub,
    // FaSpotify,
    FaFacebook,
    // FaInstagram,
    // FaFacebookMessenger,
} from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { MdGamepad } from "react-icons/md";

const SOCIALS = [
    {
        description: "Facebook",
        url: "https://facebook.com/kingdeorayom",
        text: "Serking de Orayom",
        icon: <FaFacebook size={20} color="#1877F2" className="" />,
    },
    {
        description: "LinkedIn",
        url: "https://www.linkedin.com/in/kingdeorayom/",
        text: "Serking de Orayom",
        icon: <FaLinkedin size={20} color="#0077b5" className="" />,
    },
    {
        description: "GitHub",
        url: "https://github.com/kingdeorayom",
        text: "@kingdeorayom",
        icon: <FaGithub size={20} className="" />,
    },
    // {
    //     description: "Messenger",
    //     url: "https://m.me/kingdeorayom",
    //     text: "Serking de Orayom",
    //     icon: <FaFacebookMessenger size={20} color="#1877F2" className="" />,
    // },

    // {
    //     description: "Instagram",
    //     url: "https://instagram.com/kingdeorayom",
    //     text: "@kingdeorayom",
    //     icon: <FaInstagram size={20} color="#d62976" className="" />,
    // },
    // {
    //     description: "X (Twitter)",
    //     url: "https://x.com/kingdeorayom",
    //     text: "@kingdeorayom",
    //     icon: <FaXTwitter size={20} className="" />,
    // },
    // {
    //     description: "Spotify",
    //     url: "https://open.spotify.com/user/22r72aobh6vfrji6v4tkukuha",
    //     text: "Serking de Orayom",
    //     icon: <FaSpotify size={20} color="#1DB954" className="" />,
    // },
    // {
    //     description: "Exophase",
    //     url: "https://www.exophase.com/user/kingdeorayom/",
    //     text: "@kingdeorayom",
    //     icon: <MdGamepad size={20} color="#5488A4" className="" />,
    // },
];

export default SOCIALS;
