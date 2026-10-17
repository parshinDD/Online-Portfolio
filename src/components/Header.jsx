import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { DownloadResumeButton } from "./DownloadResumeButton";
import { headerContent, navLinks } from "../data/Content";
import "./Header.css";

export function Header() {
    const { scrollYProgress } = useScroll();
    const [active, setActive] = useState(null);
    const [open, setOpen] = useState(false);

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

    useEffect(() => {
        if (!open)
            return;

        document.body.style.overflow = 'hidden';
        const onKey = (e) => {
            if (e.key === 'Escape')
                setOpen(false);
        };
        
        const onResize = () => {
            if (window.innerWidth > 768)
                setOpen(false);
        };

        window.addEventListener('keydown', onKey);
        window.addEventListener('resize', onResize);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('resize', onResize);
        };
    }, [open]);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setOpen(false);
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), open ? 60 : 0);
    };

    return (
        <>
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
                        <button
                            type="button"
                            className={`header__burger${open ? " is-open" : ""}`}
                            aria-label={open ? "Закрыть меню" : "Открыть меню"}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            onClick={() => setOpen((o) => !o)}
                        >
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
                <motion.span className="header__progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
            </header>

            <div
                id="mobile-menu"
                className={`mobile-menu on-scarlet${open ? " is-open" : ""}`}
                aria-hidden={!open}
            >
                <nav className="mobile-menu__nav" aria-label={headerContent.navAriaLabel}>
                    {navLinks.map((link, i) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="mobile-menu__link"
                            style={{ "--i": i }}
                            tabIndex={open ? 0 : -1}
                            onClick={(e) => handleNavClick(e, link.id)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
}
