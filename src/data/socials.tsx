import {
    FaLinkedin,
    FaGithub,
    FaSpotify,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { MdGamepad } from "react-icons/md";

const SOCIALS = [
    {
        description: "I archive emails",
        url: "mailto:kingdeorayom@gmail.com",
        text: "kingdeorayom@gmail.com",
        icon: <SiGmail size={24} color="#EA4335" className="ms-1" />,
    },
    {
        description: "I try to be professional",
        url: "https://www.linkedin.com/in/kingdeorayom/",
        text: "Serking de Orayom",
        icon: <FaLinkedin size={24} color="#0077b5" className="ms-1" />,
    },
    {
        description: "I write code",
        url: "https://github.com/kingdeorayom",
        text: "@kingdeorayom",
        icon: <FaGithub size={24} className="ms-1" />,
    },
    {
        description: "I am mostly active here",
        url: "https://facebook.com/kingdeorayom",
        text: "Serking de Orayom",
        icon: <FaFacebook size={24} color="#1877F2" className="ms-1" />,
    },
    {
        description: "I only view stories",
        url: "https://instagram.com/kingdeorayom",
        text: "@kingdeorayom",
        icon: <FaInstagram size={24} color="#d62976" className="ms-1" />,
    },
    {
        description: "I only do reposts",
        url: "https://x.com/kingdeorayom",
        text: "@kingdeorayom",
        icon: <FaXTwitter size={24} className="ms-1" />,
    },
    {
        description: "I appreciate vintage melodies",
        url: "https://open.spotify.com/user/22r72aobh6vfrji6v4tkukuha",
        text: "Serking de Orayom",
        icon: <FaSpotify size={24} color="#1DB954" className="ms-1" />,
    },
    {
        description: "I play video games",
        url: "https://www.exophase.com/user/kingdeorayom/",
        text: "Steam, Nintendo, Google Play, Xbox",
        icon: <MdGamepad size={24} color="#5488A4" className="ms-1" />,
    },
];

export default SOCIALS;
