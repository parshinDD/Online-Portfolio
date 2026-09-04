import { motion } from "framer-motion";
import { sectionContent, socials } from "../data/Content";
import { FaGithub } from "react-icons/fa";
import { FaTelegram, FaVk } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./Contact.css";

const icons = {
    github: <FaGithub size={24} />,
    telegram: <FaTelegram size={24} />,
    vk: <FaVk size={24} />,
    email: <MdEmail size={24} />,
};

export function Contact() {
    const c = sectionContent.contact;

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <motion.div
                    className="contact__card"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="contact__card-glow" aria-hidden="true" />
                    <span className="contact__eyebrow mono">04 / contact</span>

                    <h2 className="contact__title">
                        {c.title} <span className="contact__highlight">{c.titleHighlight}</span> {c.titleEnd}
                    </h2>
                    <p className="contact__subtitle">{c.subtitle}</p>
                </motion.div>

                <nav className="contact__socials" aria-label={c.socialAriaLabel}>
                    {socials.map((s, i) => {
                        return (
                            <motion.a
                                key={s.id}
                                href={s.url}
                                target={s.id === 'email' ? undefined : '_blank'}
                                rel={s.id === 'email' ? undefined : 'noreferrer'}
                                className="contact__social-card"
                                data-cursor="open"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                whileHover={{ y: -6 }}
                            >
                                <span className="contact__social-icon">
                                    {icons[s.id]}
                                </span>
                                <span className="contact__social-text">
                                    <span className="contact__social-label">{s.label}</span>
                                    <span className="contact__social-handle mono">{s.handle}</span>
                                </span>
                            </motion.a>
                        );
                    })}
                </nav>
            </div>
        </section>
    );
}
