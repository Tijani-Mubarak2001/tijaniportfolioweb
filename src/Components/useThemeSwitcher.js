import React, { useState, useEffect } from "react";
import * as MD from 'react-icons/md';
import * as GI from 'react-icons/gi';


function useThemeSwitcher() {
    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    useEffect(() => {
        window.addEventListener("storage", setPreferedTheme);
        return () => {
            window.removeEventListener("storage", setPreferedTheme);
        };
    }, []);

    const setPreferedTheme = () => {
        const _mode = localStorage.getItem("mode");
        if (_mode) {
            setMode(_mode);
        } else {
            setMode("light");
        }
    };

    useEffect(() => {
        if (mode === "dark") {
            document.body.classList.add("dark-mode");
            localStorage.setItem("mode", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("mode", "light");
        }
    }, [mode]);
    const icon = mode === "light" ? <GI.GiMoon size={30} /> : <MD.MdWbSunny size={30} />;

    return (

        <a href="/#"
            className="cursor-pointer"
            onClick={() =>
                setMode(mode => (mode === "dark" ? "light" : "dark"))
            }
        >
            {icon}
        </a>
    );
}

export default useThemeSwitcher;