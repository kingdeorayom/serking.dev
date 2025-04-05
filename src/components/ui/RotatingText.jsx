"use client";

import { useEffect, useState } from "react";

const rotatingWords = [
    "software developer",
    "gamer",
    "digital explorer",
    "problem-solver",
];

const RotatingText = () => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % rotatingWords.length);
                setVisible(true);
            }, 300); // duration of fade out
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <span
            className={`transition-opacity duration-300 ease-in-out ${
                visible ? "opacity-100" : "opacity-0"
            }`}
        >
            {rotatingWords[index]}
        </span>
    );
};

export default RotatingText;
