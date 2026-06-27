import { motion } from "framer-motion";
import { Badge } from "./Badge";
import "./ProjectCard.css";

export function ProjectCard({ project, index }) {
    return (
        <motion.article
            className="project-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
        >
            <div className="project-card__top">
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__links">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__icon-link"
                            aria-label={`${project.title} на GitHub`}
                        >
                            <GithubIcon />
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__icon-link"
                            aria-label={`${project.title} — демо`}
                        >
                            <ExternalIcon />
                        </a>
                    )}
                </div>
            </div>

            <p className="project-card__description">{project.description}</p>

            <div className="project-card__tags">
                {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                ))}
            </div>
        </motion.article>
    );
}

function GithubIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.13-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.39-1.25.71-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
        </svg>
    );
}

function ExternalIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
        </svg>
    );
}
