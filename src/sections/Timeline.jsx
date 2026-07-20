import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { timeline, sectionContent } from "../data/Content";
import "./Timeline.css";

export function Timeline() {
    const { eyebrow, title, description } = sectionContent.timeline;
    const listRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: listRef,
        offset: ["start 0.85", "end 0.6"],
    });
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

    return (
        <section id="timeline" className="section timeline">
            <div className="container">
                <SectionHeading eyebrow={eyebrow} title={title} description={description} />

                <ul className="timeline__list" ref={listRef}>
                    <motion.span
                        className="timeline__progress"
                        style={{ scaleY: progress }}
                        aria-hidden="true"
                    />

                    {timeline.map((item, i) => (
                        <motion.li
                            key={item.id}
                            className="timeline__item"
                            initial={{ opacity: 0, x: -32 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <motion.span
                                className="timeline__marker"
                                aria-hidden="true"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.4, delay: i * 0.1 + 0.15, type: "spring", stiffness: 300, damping: 15 }}
                            />
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
