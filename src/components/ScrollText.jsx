import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import "./ScrollText.css";

function Word({ children, progress, range }) {
    const opacity = useTransform(progress, range, [0.14, 1]);
    return (
        <motion.span style={{ opacity }}>
            {children}
        </motion.span>
    );
}

export function ScrollText({ text }) {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
    const words = text.split(" ");

    if (reduce)
        return <p className="scroll-text" ref={ref}>{text}</p>;

    return (
        <p className="scroll-text" ref={ref}>
            {words.map((w, i) => {
                const start = (i / words.length) * 0.8;
                return <Word key={i} progress={scrollYProgress} range={[start, start + 0.2]}>{w}</Word>;
            })}
        </p>
    );
}
