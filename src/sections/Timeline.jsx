import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { timeline, sectionContent } from "../data/Content";
import "./Timeline.css";

export function Timeline() {
    const { eyebrow, title, description } = sectionContent.timeline;

    return (
        <section id="timeline" className="section timeline">
            <div className="container">
                <SectionHeading eyebrow={eyebrow} title={title} description={description} />

                <ul className="timeline__list">
                    {timeline.map((item, i) => (
                        <motion.li
                            key={item.id}
                            className="timeline__item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="timeline__marker" aria-hidden="true" />
                            <div className="timeline__content">
                                <span className="timeline__period mono">{item.period}</span>
                                <h3 className="timeline__title">{item.title}</h3>
                                <p className="timeline__description">{item.description}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
