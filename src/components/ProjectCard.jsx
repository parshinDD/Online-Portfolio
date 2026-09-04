import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Badge } from "./Badge";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import "./ProjectCard.css";

export function ProjectCard({ project, index }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 250, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 250, damping: 20 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.article
            className="project-card"
            data-cursor="view"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            style={{ rotateX, rotateY, transformPerspective: 800 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ y: -8, scale: 1.015 }}
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
                            <FaGithub size={24} />
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
                            <FaExternalLinkSquareAlt size={24} />
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
