import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { IoMoonOutline, IoMoon, IoSunnyOutline, IoSunny } from "react-icons/io5";
import "./ThemeToggle.css";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Включить светлую тему' : 'Включить темную тему'}
            aria-pressed={!isDark}
        >
            <span className="theme-toggle__track-icon theme-toggle__track-icon--moon">
                <IoMoonOutline size={13} />
            </span>
            
            <span className="theme-toggle__track-icon theme-toggle__track-icon--sun">
                <IoSunnyOutline size={13} />
            </span>

            <motion.span
                className="theme-toggle__thumb"
                animate={{ x: isDark ? 0 : 22 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
                {isDark ? (
                    <IoMoon className="theme-toggle__thumb-icon" />
                ) : (
                    <IoSunny className="theme-toggle__thumb-icon" />
                )}
            </motion.span>
        </button>
    );
}
