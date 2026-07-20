import { motion } from "framer-motion";
import { sectionContent, socials } from "../data/Content";
import "./Contact.css";

const icons = {
    github: GithubIcon,
    telegram: TelegramIcon,
    vk: VkIcon,
    email: EmailIcon,
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
                        const Icon = icons[s.id];
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
                                    <Icon />
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

function GithubIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.13-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.39-1.25.71-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
        </svg>
    );
}

function TelegramIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21.9 4.3 18.6 20c-.2 1-.9 1.2-1.7.8l-4.7-3.5-2.3 2.2c-.2.2-.5.4-.9.4l.3-4.6 8.4-7.6c.4-.3-.1-.5-.5-.2l-10.4 6.5-4.5-1.4c-1-.3-1-1 .2-1.4L20.6 3.2c.8-.3 1.6.2 1.3 1.1z" />
        </svg>
    );
}

function VkIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.5 17.5c-6.2 0-9.7-4.2-9.9-11.3H7c.1 4.9 2.3 6.9 4 7.4V6.2h3v4.5c1.7-.2 3.4-2 4-4.5h3c-.5 3-2.7 5-4.2 5.9 1.5.7 4 2.5 4.9 5.4h-3.3c-.7-2.3-2.4-4-4.7-4.2v4.2h-.3z" />
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m2 7 10 6 10-6" />
        </svg>
    );
}
