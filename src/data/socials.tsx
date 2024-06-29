import {
    FaLinkedin,
    FaGithub,
    FaSpotify,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdGamepad } from "react-icons/md";

const SOCIALS = [
    {
        description: "LinkedIn",
        url: "https://www.linkedin.com/in/kingdeorayom/",
        text: "Serking de Orayom",
        icon: <FaLinkedin size={24} color="#0077b5" className="ms-1" />,
    },
    {
        description: "GitHub",
        url: "https://github.com/kingdeorayom",
        text: "@kingdeorayom",
        icon: <FaGithub size={24} className="ms-1" />,
    },
    {
        description: "Facebook",
        url: "https://facebook.com/kingdeorayom",
        text: "Serking de Orayom",
        icon: <FaFacebook size={24} color="#1877F2" className="ms-1" />,
    },
    {
        description: "Instagram",
        url: "https://instagram.com/kingdeorayom",
        text: "@kingdeorayom",
        icon: <FaInstagram size={24} color="#d62976" className="ms-1" />,
    },
    {
        description: "X (Twitter)",
        url: "https://x.com/kingdeorayom",
        text: "@kingdeorayom",
        icon: <FaXTwitter size={24} className="ms-1" />,
    },
    {
        description: "Spotify",
        url: "https://open.spotify.com/user/22r72aobh6vfrji6v4tkukuha",
        text: "Serking de Orayom",
        icon: <FaSpotify size={24} color="#1DB954" className="ms-1" />,
    },
    {
        description: "Exophase",
        url: "https://www.exophase.com/user/kingdeorayom/",
        text: "@kingdeorayom",
        icon: <MdGamepad size={24} color="#5488A4" className="ms-1" />,
    },
];

export default SOCIALS;
