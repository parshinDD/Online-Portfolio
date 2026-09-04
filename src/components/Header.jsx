import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { DownloadResumeButton } from "./DownloadResumeButton";
import { headerContent, navLinks } from "../data/Content";
import "./Header.css";

export function Header() {
    const handleNavClick = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.header
            className="header"
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="container header__inner">
                <a href="#hero" className="header__logo" data-cursor="top" onClick={(e) => handleNavClick(e, "hero")}>
                    {headerContent.logo}
                    <span className="header__logo-dot">.</span>
                </a>

                <nav className="header__nav" aria-label="Основная навигация">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="header__nav-link"
                            data-cursor={link.label}
                            onClick={(e) => handleNavClick(e, link.id)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="header__actions">
                    <DownloadResumeButton />
                    <ThemeToggle />
                </div>
            </div>
        </motion.header>
    );
}
