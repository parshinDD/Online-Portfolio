import { motion, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import { Badge } from "./Badge";
import "./ProjectCard.css";

const tones = ["", "on-scarlet", "on-ink", ""];

export function ProjectCard({ project, index, progress, range, targetScale }) {
    const scale = useTransform(progress, range, [1, targetScale]);
    const odd = index % 2 === 1;
    const ghostX = useTransform(progress, [0, 1], odd ? ["-10%", "8%"] : ["10%", "-8%"]);

    return (
        <motion.article
            className={`project-card ${tones[index % tones.length]}`.trim()}
            style={{ "--i": index, scale, transformOrigin: "top center" }}
        >
            <motion.div
                className="project-card__ghost"
                style={{ x: ghostX }}
                aria-hidden="true"
            >
                {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="project-card__ghost-word">{tag}</span>
                ))}
            </motion.div>

            <div className="project-card__top">
                <motion.h3
                    className="project-card__title"
                    aria-label={project.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-80px" }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
                >
                    {project.title.split(" ").map((w, i) => (
                        <span key={i} className="project-card__mask" aria-hidden="true">
                            <motion.span
                                className="project-card__word"
                                variants={{ hidden: { y: "110%" }, show: { y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } } }}
                            >
                                {w}
                            </motion.span>
                        </span>
                    ))}
                </motion.h3>
                <div className="project-card__links">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__icon-link"
                            aria-label={`${project.title} на GitHub`}
                        >
                            <FaGithub size={20} />
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__icon-link"
                            aria-label={`${project.title} - демо`}
                        >
                            <FaExternalLinkSquareAlt size={20} />
                        </a>
                    )}
                </div>
            </div>

            <div className="project-card__bottom">
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tags">
                    {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}
