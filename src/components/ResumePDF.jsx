import { profile, contactInfo, socials, skills, projects, timeline } from "../data/Content";
import { FaGithub } from "react-icons/fa";
import { FaTelegram, FaVk, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./ResumePDF.css";

const socialIcons = {
    github: <FaGithub size={24} />,
    telegram: <FaTelegram size={24} />,
    vk: <FaVk size={24} />,
    email: <MdEmail size={24} />,
    location: <FaLocationDot size={24} />,
};

function formatGeneratedAt() {
    const now = new Date();
    const date = now.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
    const time = now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
    return `${date}, ${time}`;
}

export function ResumePDF() {
    const primarySkills = skills.filter((s) => s.level !== "future");
    const topProjects = projects.slice(0, 3);
    const contactSocials = socials.filter((s) => s.id !== "email");

    return (
        <div className="resume-pdf" aria-hidden="true">
            <header className="resume-pdf__header">
                <img
                    src="/avatar.jpg"
                    alt={profile.photoAlt}
                    className="resume-pdf__photo"
                />
                <div className="resume-pdf__heading">
                    <h1>{profile.name}</h1>
                    <p className="resume-pdf__role">{profile.role}</p>
                </div>
            </header>

            <p className="resume-pdf__pitch">{profile.pitch}</p>

            <div className="resume-pdf__columns">
                <div className="resume-pdf__col resume-pdf__col--main">
                    <section className="resume-pdf__section">
                        <h2>Проекты</h2>
                        {topProjects.map((p) => (
                            <article key={p.id} className="resume-pdf__project">
                                <div className="resume-pdf__project-top">
                                    <h3>{p.title}</h3>
                                    {p.github && (
                                        <span className="resume-pdf__project-link">{p.github.replace('https://', '').replace('.git', '')}</span>
                                    )}
                                </div>
                                <p>{p.description}</p>
                                <ul className="resume-pdf__tags">
                                    {p.tags.map((t) => (
                                        <li key={t}>{t}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </section>

                    <section className="resume-pdf__section">
                        <h2>Опыт и путь</h2>
                        {timeline.map((t) => (
                            <article key={t.id} className="resume-pdf__timeline-item">
                                <span className="resume-pdf__period">{t.period}</span>
                                <div>
                                    <h3>{t.title}</h3>
                                    <p>{t.description}</p>
                                </div>
                            </article>
                        ))}
                    </section>
                </div>

                <div className="resume-pdf__col resume-pdf__col--side">
                    <section className="resume-pdf__section resume-pdf__section--contacts">
                        <h2>Контакты</h2>
                        <ul className="resume-pdf__contacts">
                            <li>
                                <span className="resume-pdf__contact-icon">{socialIcons.email}</span>
                                <span>{contactInfo.email}</span>
                            </li>
                            <li>
                                <span className="resume-pdf__contact-icon">{socialIcons.location}</span>
                                <span>{contactInfo.location}</span>
                            </li>
                            {contactSocials.map((s) => (
                                <li key={s.id}>
                                    <span className="resume-pdf__contact-icon">
                                        {socialIcons[s.id] ?? null}
                                    </span>
                                    <span>{s.handle}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="resume-pdf__section">
                        <h2>Навыки</h2>
                        <ul className="resume-pdf__skills">
                            {primarySkills.map((s) => (
                                <li key={s.id}>
                                    <strong>{s.name}</strong>
                                    <span>{s.detail}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>

            <footer className="resume-pdf__footer">
                <span>Сгенерировано {formatGeneratedAt()}</span>
                <span>putkasok.ru</span>
            </footer>
        </div>
    );
}
