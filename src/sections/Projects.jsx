import { useRef } from "react";
import { useScroll } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { projects, sectionContent } from "../data/Content";
import "./Projects.css";

export function Projects() {
    const { title, description } = sectionContent.projects;
    const stackRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });
    const n = projects.length;

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <SectionHeading title={title} description={description} />

                <div className="projects__stack" ref={stackRef}>
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                            progress={scrollYProgress}
                            range={[i / n, 1]}
                            targetScale={1 - (n - 1 - i) * 0.04}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
