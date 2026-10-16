import { FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { devLinks, profile } from "../data/Content";
import "./Footer.css";

const icons = {
    github: <FaGithub size={18} />,
    codewars: <SiCodewars size={18} />,
};

export function Footer() {
    return (
        <footer className="footer on-scarlet">
            <div className="container footer__inner">
                <div className="footer__meta">
                    <span className="footer__name">© {new Date().getFullYear()} {profile.nickname}</span>
                </div>

                <nav className="footer__links" aria-label="Профили разработчика">
                    {devLinks.map((link) => (
                        <a key={link.id} href={link.url} target="_blank" rel="noreferrer" className="footer__link">
                            {icons[link.id]}
                            <span>{link.label}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    );
}
