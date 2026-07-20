import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { profile } from "../data/Content";
import "./Hero.css";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
};

export function Hero() {
    return (
        <section id="hero" className="hero section">
            <div className="container hero__grid">
                <motion.div
                    className="hero__photo"
                    initial={{ opacity: 0, x: -24, rotate: -4 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        className="hero__photo-frame"
                        whileHover={{ rotate: -2, scale: 1.02 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <img
                            src="/avatar.jpg"
                            alt={profile.photoAlt}
                            className="hero__photo-img"
                        />
                    </motion.div>
                    <span className="hero__photo-tag mono">{profile.photoTag}</span>
                </motion.div>

                <div className="hero__copy">
                    <motion.p
                        className="hero__eyebrow mono"
                        initial={fadeUp.initial}
                        animate={fadeUp.animate}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="hero__eyebrow-dot" aria-hidden="true" />
                        {profile.heroEyebrow}
                    </motion.p>

                    <h1 className="hero__title">
                        <motion.span
                            className="hero__title-line"
                            initial={fadeUp.initial}
                            animate={fadeUp.animate}
                            transition={{ duration: 0.6, delay: 0.06 }}
                        >
                            {profile.greeting}
                        </motion.span>
                        <motion.span
                            className="hero__nickname"
                            initial={{ opacity: 0, y: 36, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {profile.name}
                        </motion.span>
                    </h1>

                    <motion.p
                        className="hero__role mono"
                        initial={fadeUp.initial}
                        animate={fadeUp.animate}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        {profile.role}
                    </motion.p>

                    <motion.p
                        className="hero__pitch"
                        initial={fadeUp.initial}
                        animate={fadeUp.animate}
                        transition={{ duration: 0.6, delay: 0.58 }}
                    >
                        {profile.pitch}
                    </motion.p>

                    <motion.div
                        className="hero__cta"
                        initial={fadeUp.initial}
                        animate={fadeUp.animate}
                        transition={{ duration: 0.6, delay: 0.66 }}
                    >
                        <Button href="#contact" variant="primary" magnetic cursorLabel="say hi">
                            {profile.ctaPrimary}
                        </Button>
                        <Button href="#projects" variant="outline" magnetic cursorLabel="see">
                            {profile.ctaSecondary}
                        </Button>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="hero__scroll-cue mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                aria-hidden="true"
            >
                <span>scroll</span>
                <motion.span
                    className="hero__scroll-cue-line"
                    animate={{ scaleY: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </section>
    );
}
