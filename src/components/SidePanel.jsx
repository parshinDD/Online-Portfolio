import { motion } from "framer-motion";
import { devLinks } from "../data/Content";
import { FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import "./SidePanel.css";

const icons = {
    github: <FaGithub size={24} />,
    codewars: <SiCodewars size={24} />,
}

export function SidePanel() {
    return (
        <motion.aside
            className="dev-rail"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
            <span className="dev-rail__label mono">~/devLinks</span>

            <nav className="dev-rail__nav">
                {devLinks.map((link) => (
                    <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="dev-rail__link"
                        aria-label={link.label}
                    >
                        <span className="dev-rail__icon">{icons[link.id]}</span>
                        <span className="dev-rail__text">{link.label}</span>
                    </a>
                ))}
            </nav>
        </motion.aside>
    );
}
