import { motion } from "framer-motion";
import { sectionContent, socials } from "../data/Content";
import { FaGithub } from "react-icons/fa";
import { FaTelegram, FaVk, FaArrowRight } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./Contact.css";

const icons = {
    github: <FaGithub size={22} />,
    telegram: <FaTelegram size={22} />,
    vk: <FaVk size={22} />,
    email: <MdEmail size={22} />,
};

export function Contact() {
    const c = sectionContent.contact;

    return (
        <section id="contact" className="section contact on-scarlet">
            <div className="container">
                <motion.div
                    className="contact__head"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                >
                    <h2 className="contact__title">
                        {c.title} <span className="contact__highlight">{c.titleHighlight}</span> {c.titleEnd}
                    </h2>
                    <p className="contact__subtitle">
                        {c.subtitle}
                    </p>
                </motion.div>

                <motion.nav
                    className="contact__list"
                    aria-label={c.socialAriaLabel}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
                >
                    {socials.map((s) => (
                        <motion.a
                            key={s.id}
                            variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } } }}
                            href={s.url}
                            target={s.id === "email" ? undefined : "_blank"}
                            rel={s.id === "email" ? undefined : "noreferrer"}
                            className="contact__row"
                        >
                            <span className="contact__icon">
                                {icons[s.id]}
                            </span>
                            <span className="contact__label">
                                {s.label}
                            </span>
                            <span className="contact__handle mono">
                                {s.handle}
                            </span>
                            <FaArrowRight className="contact__arrow" size={16} aria-hidden="true" />
                        </motion.a>
                    ))}
                </motion.nav>
            </div>
        </section>
    );
}
