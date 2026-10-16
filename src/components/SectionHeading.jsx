import { motion } from "framer-motion";
import "./SectionHeading.css";

const ease = [0.23, 1, 0.32, 1];
const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const word = { hidden: { y: "105%" }, show: { y: 0, transition: { duration: 0.8, ease } } };
const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };

export function SectionHeading({ title, description, lead = false }) {
    return (
        <motion.div
            className={`section-heading${lead ? " section-heading--lead" : ""}`}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
        >
            <h2 className="section-heading__title" aria-label={title}>
                {title.split(" ").map((w, i) => (
                    <span key={i} className="section-heading__mask" aria-hidden="true">
                        <motion.span className="section-heading__word" variants={word}>
                            {w}
                        </motion.span>
                    </span>
                ))}
            </h2>
            {description && (
                <motion.p className="section-heading__desc" variants={fade}>
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
}
