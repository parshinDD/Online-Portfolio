import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { projects, sectionContent } from "../data/Content";
import "./Projects.css";

export function Projects() {
    const { eyebrow, title, description } = sectionContent.projects;

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <SectionHeading eyebrow={eyebrow} title={title} description={description} />

                <div className="projects__grid">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
