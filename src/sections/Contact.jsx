import { motion } from "framer-motion";
import { sectionContent, socials } from "../data/Content";
import "./Contact.css";

export function Contact() {
    const c = sectionContent.contact;

    return (
        <section id="contact" className="section contact">
            <div className="container contact__inner">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="contact__title">
                        {c.title} <span className="contact__highlight">{c.titleHighlight}</span> {c.titleEnd}
                    </h2>
                    <p className="contact__subtitle">{c.subtitle}</p>
                </motion.div>

                <nav className="contact__socials" aria-label={c.socialAriaLabel}>
                    {socials.map((s) => (
                        <a
                            key={s.id}
                            href={s.url}
                            target={s.id === 'email' ? undefined : '_blank'}
                            rel={s.id === 'email' ? undefined : 'noreferrer'}
                            className="contact__social-chip"
                        >
                            {s.label}
                        </a>
                    ))}
                </nav>
            </div>
        </section>
    );
}
