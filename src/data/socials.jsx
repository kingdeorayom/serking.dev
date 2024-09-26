import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

const SOCIALS = [
    {
        description: "LinkedIn",
        url: "https://www.linkedin.com/in/kingdeorayom/",
        text: "Serking de Orayom",
        icon: <FaLinkedin size={18} color="#0077b5" className="" />,
    },
    {
        description: "GitHub",
        url: "https://github.com/kingdeorayom",
        text: "@kingdeorayom",
        icon: <FaGithub size={18} className="" />,
    },
    {
        description: "Facebook",
        url: "https://facebook.com/kingdeorayom",
        text: "Serking de Orayom",
        icon: <FaFacebook size={18} color="#1877F2" className="" />,
    },
    // {
    //     description: "X (Twitter)",
    //     url: "https://x.com/kingdeorayom",
    //     text: "@kingdeorayom",
    //     icon: <FaXTwitter size={18} className="" />,
    // },
];

export default SOCIALS;
