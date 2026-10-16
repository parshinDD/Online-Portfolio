import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { ScrollText } from "../components/ScrollText";
import { sectionContent, skills } from "../data/Content";
import "./About.css";

const ease = [0.23, 1, 0.32, 1];

const TONES = ["on-scarlet", "", "", "", "", "on-ink", ""];

const spring = { type: "spring", stiffness: 120, damping: 22, mass: 0.9 };

const panelVariants = {
    enter: (dir) => ({ opacity: 0, y: dir > 0 ? 44 : -44, scale: 0.97, filter: "blur(6px)" }),
    center: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { y: spring, scale: spring, opacity: { duration: 0.45, ease }, filter: { duration: 0.5, ease } },
    },
    exit: (dir) => ({
        opacity: 0,
        y: dir > 0 ? -44 : 44,
        scale: 0.97,
        filter: "blur(6px)",
        transition: { duration: 0.38, ease: [0.4, 0, 1, 1] },
    }),
};

const childVariants = {
    enter: { opacity: 0, y: 16 },
    center: (k) => ({ opacity: 1, y: 0, transition: { delay: 0.14 + k * 0.07, duration: 0.55, ease } }),
};

export function About() {
    const { title, description } = sectionContent.about;
    const n = skills.length;

    const pinRef = useRef(null);
    const curRef = useRef(0);
    const dirRef = useRef(1);

    const [active, setActive] = useState(0);

    const { scrollYProgress } = useScroll({ target: pinRef, offset: ["start start", "end end"] });

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        const next = Math.min(n - 1, Math.max(0, Math.floor(v * n)));
        if (next !== curRef.current) {
            dirRef.current = next > curRef.current ? 1 : -1;
            curRef.current = next;
            setActive(next);
        }
    });

    const jump = (i) => {
        const el = pinRef.current;
        if (!el || window.matchMedia("(max-width: 900px)").matches)
            return;

        const top = el.getBoundingClientRect().top + window.scrollY;
        const span = el.offsetHeight - window.innerHeight;
        window.scrollTo({ top: top + (span * (i + 0.5)) / n, behavior: "smooth" });
    };

    const skill = skills[active];

    return (
        <section id="about" className="section about">
            <div className="container">
                <SectionHeading title={title} />
                <ScrollText text={description} />

                <div className="skills__pin" ref={pinRef} style={{ "--n": n }}>
                    <div className="skills__sticky">
                        <ul className="skills__list">
                            {skills.map((s, i) => (
                                <li
                                    key={s.id}
                                    className={`skills__item skills__item--${s.level}${i === active ? " is-active" : ""}`}
                                    data-d={Math.min(Math.abs(i - active), 3)}
                                >
                                    <button
                                        type="button"
                                        className="skills__name"
                                        onClick={() => jump(i)}
                                    >
                                        {s.name}
                                    </button>
                                    <p className="skills__inline">
                                        {s.detail}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <aside className="skills__panel-wrap" aria-live="polite">
                            <AnimatePresence
                                mode="popLayout"
                                custom={dirRef.current}
                                initial={false}
                            >
                                <motion.div
                                    key={skill.id}
                                    custom={dirRef.current}
                                    variants={panelVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className={`skills__panel ${TONES[active % TONES.length]} skills__panel--${skill.level}`.trim()}
                                >
                                    <motion.span
                                        className="skills__note mono"
                                        variants={childVariants}
                                        custom={0}
                                    >
                                        {skill.note}
                                    </motion.span>
                                    <motion.p
                                        className="skills__detail"
                                        variants={childVariants}
                                        custom={1}
                                    >
                                        {skill.detail}
                                    </motion.p>
                                    <motion.span
                                        className="skills__panel-name"
                                        variants={childVariants}
                                        custom={2}
                                    >
                                        {skill.name}
                                    </motion.span>
                                </motion.div>
                            </AnimatePresence>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
}
