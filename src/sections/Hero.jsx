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
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="hero__photo-frame">
                        <img
                            src="/avatar.jpg"
                            alt={profile.photoAlt}
                            className="hero__photo-img"
                        />
                    </div>
                    <span className="hero__photo-tag mono">{profile.photoTag}</span>
                </motion.div>

                <div className="hero__copy">
                    <motion.p
                        className="hero__eyebrow mono"
                        initial={fadeUp.initial}
                        animate={fadeUp.animate}
                        transition={{ duration: 0.5 }}
                    >
                        {profile.heroEyebrow}
                    </motion.p>

                    <motion.h1
                        className="hero__title"
                        initial={fadeUp.initial}
                        animate={fadeUp.animate}
                        transition={{ duration: 0.6, delay: 0.08 }}
                    >
                        {profile.greeting}{' '}
                        <span className="hero__nickname">{profile.name}</span>
                    </motion.h1>

                    <motion.p
                        className="hero__role mono"
                        initial={fadeUp.initial}
                        animate={fadeUp.animate}
                        transition={{ duration: 0.6, delay: 0.16 }}
                    >
                        {profile.role}
                    </motion.p>

                    <motion.p
                        className="hero__pitch"
                        initial={fadeUp.initial}
                        animate={fadeUp.animate}
                        transition={{ duration: 0.6, delay: 0.24 }}
                    >
                        {profile.pitch}
                    </motion.p>

                    <motion.div
                        className="hero__cta"
                        initial={fadeUp.initial}
                        animate={fadeUp.animate}
                        transition={{ duration: 0.6, delay: 0.32 }}
                    >
                        <Button href="#contact" variant="primary">
                            {profile.ctaPrimary}
                        </Button>
                        <Button href="#projects" variant="outline">
                            {profile.ctaSecondary}
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
