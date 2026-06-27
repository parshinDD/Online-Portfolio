import { SectionHeading } from "../components/SectionHeading";
import { SkillCard } from "../components/SkillCard";
import { sectionContent, skills } from "../data/Content";
import "./About.css";

export function About() {
    const { eyebrow, title, description } = sectionContent.about;

    return (
        <section id="about" className="section about">
            <div className="container">
                <SectionHeading eyebrow={eyebrow} title={title} description={description} />

                <div className="about__grid">
                    {skills.map((skill, i) => (
                        <SkillCard key={skill.id} skill={skill} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
