import { motion } from "framer-motion";
import "./SectionHeading.css";

export function SectionHeading({ eyebrow, title, description }) {
    return (
        <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            {eyebrow && <span className="section-heading__eyebrow mono">{eyebrow}</span>}
            <h2 className="section-heading__title">{title}</h2>
            {description && <p className="section-heading__desc">{description}</p>}
        </motion.div>
    );
}
