import { useRef } from "react";
import { motion, useReducedMotion, useTransform } from "framer-motion";
import { Button } from "../components/Button";
import { useScramble } from "../hooks/useScramble";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { profile } from "../data/Content";
import "./Hero.css";

function BgLayer({ progress, cls, a, b, first, last, reduce }) {
    const xa = useTransform(progress, [0, 1], a);
    const xb = useTransform(progress, [0, 1], b);

    return (
        <div className={`hero__bgl hero__bgl--${cls}`}>
            <motion.span className="hero__bgw hero__bgw--a" style={reduce ? undefined : { x: xa }}>
                {first}
            </motion.span>
            <motion.span className="hero__bgw hero__bgw--b" style={reduce ? undefined : { x: xb }}>
                {last}
            </motion.span>
        </div>
    );
}

export function Hero() {
    const [first, ...rest] = profile.name.split(" ");
    const last = rest.join(" ");

    const sectionRef = useRef(null);
    const roleRef = useRef(null);
    const reduce = useReducedMotion();

    useScramble(roleRef, profile.role, !reduce, 1200);

    const progress = useScrollProgress(sectionRef, 0, 0);
    const x1 = useTransform(progress, [0, 1], ["0%", "-18%"]);
    const x2 = useTransform(progress, [0, 1], ["0%", "-8%"]);
    const photoY = useTransform(progress, [0, 1], ["0%", "-10%"]);

    return (
        <section id="hero" className="hero" ref={sectionRef}>
            <div className="hero__bg" aria-hidden="true">
                <BgLayer
                    progress={progress}
                    cls="glow"
                    a={["0%", "-16%"]}
                    b={["0%", "12%"]}
                    first={first}
                    last={last}
                    reduce={reduce}
                />
                <BgLayer
                    progress={progress}
                    cls="body"
                    a={["0%", "10%"]}
                    b={["0%", "-14%"]}
                    first={first}
                    last={last}
                    reduce={reduce}
                />
                <BgLayer
                    progress={progress}
                    cls="trace"
                    a={["0%", "-6%"]}
                    b={["0%", "5%"]}
                    first={first}
                    last={last}
                    reduce={reduce}
                />
            </div>

            <div className="container hero__wrap">
                <div className="hero__grid">
                    <div className="hero__main">
                        <h1 className="hero__title" aria-label={`${profile.greeting} ${profile.name}`}>
                            <span className="hero__greeting" aria-hidden="true">
                                {profile.greeting}
                            </span>

                            <motion.span className="hero__word" style={reduce ? undefined : { x: x1 }} aria-hidden="true">
                                <span className="hero__wmask">
                                    <span className="hero__wtext hero__wtext--ink" style={{ "--w": 0 }}>
                                        {first}
                                    </span>
                                </span>
                            </motion.span>

                            <motion.span className="hero__word" style={reduce ? undefined : { x: x2 }} aria-hidden="true">
                                <span className="hero__wmask">
                                    <span className="hero__wtext hero__wtext--scarlet" style={{ "--w": 1 }}>
                                        {last}
                                    </span>
                                </span>
                            </motion.span>
                        </h1>
                    </div>

                    <motion.div className="hero__visual" style={reduce ? undefined : { y: photoY }}>
                        <figure className="hero__photo">
                            <img
                                src="/avatar.jpg"
                                alt={profile.photoAlt}
                                className="hero__photo-img"
                                width="480"
                                height="600"
                                loading="eager"
                                decoding="async"
                            />
                        </figure>
                    </motion.div>
                </div>

                <div className="hero__dock">
                    <div className="hero__copy">
                        <p className="hero__role mono" ref={roleRef}>
                            {profile.role}
                        </p>
                        <p className="hero__pitch">
                            {profile.pitch}
                        </p>
                    </div>

                    <div className="hero__cta">
                        <Button href="#contact" variant="primary" magnetic>
                            {profile.ctaPrimary}
                        </Button>
                        <Button href="#projects" variant="outline" magnetic>
                            {profile.ctaSecondary}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
