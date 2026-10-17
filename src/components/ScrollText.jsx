import { Fragment, useRef } from "react";
import { motion, useReducedMotion, useTransform } from "framer-motion";
import { useScrollProgress } from "../hooks/useScrollProgress";
import "./ScrollText.css";

function Word({ children, progress, range }) {
    const opacity = useTransform(progress, range, [0.14, 1]);
    
    return (
        <motion.span className="scroll-text__word" style={{ opacity }}>
            {children}
        </motion.span>
    );
}

export function ScrollText({ text }) {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const progress = useScrollProgress(ref, 0.85, 0.5);
    const words = text.split(" ");

    if (reduce)
        return <p className="scroll-text" ref={ref}>{text}</p>;

    return (
        <p className="scroll-text" ref={ref}>
            {words.map((w, i) => {
                const start = (i / words.length) * 0.8;

                return (
                    <Fragment key={i}>
                        <Word progress={progress} range={[start, start + 0.2]}>{w}</Word>
                        {i < words.length - 1 ? " " : null}
                    </Fragment>
                );
            })}
        </p>
    );
}
