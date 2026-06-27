import { motion } from "framer-motion";
import "./SkillCard.css";

export function SkillCard({ skill, index }) {
    const isFuture = skill.level === 'future';

    return (
        <motion.div
            className={`skill-card ${isFuture ? "skill-card--future" : ""}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
        >
            <h3 className="skill-card__name mono">{skill.name}</h3>
            <p className="skill-card__detail">{skill.detail}</p>
            <span className="skill-card__note mono">{skill.note}</span>
        </motion.div>
    );
}
