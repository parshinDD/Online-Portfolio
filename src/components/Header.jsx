import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { DownloadResumeButton } from "./DownloadResumeButton";
import { headerContent, navLinks } from "../data/Content";
import "./Header.css";

export function Header() {
    const { scrollYProgress } = useScroll();
    const [active, setActive] = useState(null);

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting)
                        setActive(e.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );
        
        ["hero", ...navLinks.map((l) => l.id)].forEach((id) => {
            const el = document.getElementById(id);
            if (el)
                io.observe(el);
        });

        return () => io.disconnect();
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="header">
            <div className="container header__inner">
                <a href="#hero" className="header__logo" onClick={(e) => handleNavClick(e, "hero")}>
                    {headerContent.logo}
                    <span className="header__logo-dot">.</span>
                </a>

                <nav className="header__nav" aria-label={headerContent.navAriaLabel}>
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`header__nav-link${active === link.id ? " is-active" : ""}`}
                            onClick={(e) => handleNavClick(e, link.id)}
                        >
                            {active === link.id && (
                                <motion.span
                                    layoutId="nav-pill"
                                    className="header__nav-pill"
                                    transition={{ type: "spring", stiffness: 500, damping: 38 }}
                                />
                            )}
                            <span className="header__nav-text">{link.label}</span>
                        </a>
                    ))}
                </nav>

                <div className="header__actions">
                    <DownloadResumeButton />
                    <ThemeToggle />
                </div>
            </div>
            <motion.span className="header__progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
        </header>
    );
}
