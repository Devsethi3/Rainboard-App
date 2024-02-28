"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") setDarkMode(true);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="theme-toggle">
            <div
                onClick={() => setDarkMode(!darkMode)}
                className="w-[70px] bg-[#200e38] dark:bg-[#674396] theme-button h-[30px] relative rounded-full cursor-pointer flex items-center justify-between px-2"
                style={{
                    transition: "background-color 0.3s ease",
                }}
            >
                <FaMoon className="text-white" />
                <span
                    style={
                        darkMode
                            ? { left: "7px", backgroundColor: "#fff" }
                            : { right: "7px", backgroundColor: "#fff" }
                    }
                    className="absolute right-2 w-[18px] h-[18px] rounded-full transition-all duration-150 ease-in-out"
                ></span>
                <FaSun className="dark:text-yellow-400" />
            </div>
        </div>
    );
};

export default ThemeToggle;
