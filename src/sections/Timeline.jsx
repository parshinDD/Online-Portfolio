import { useEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { timeline, sectionContent } from "../data/Content";
import "./Timeline.css";

const DY = [-24, 28, -8, 34, -30, 16];

const ghostOf = (period) => period.match(/\d{4}/)?.[0] ?? "Сейчас";

const bump = (mv) => mv.set(mv.get() + 1);

function TimelineCard({ item, index, last, x, version, reduce }) {
    const ref = useRef(null);
    const geo = useRef({ left: 0, w: 0 });

    useEffect(() => {
        const measure = () => {
            const el = ref.current;
            if (el) {
                geo.current.left = el.offsetLeft;
                geo.current.w = el.offsetWidth;
                bump(version);
            }
        };

        measure();
        window.addEventListener("resize", measure);
        document.fonts?.ready.then(measure);

        return () => window.removeEventListener("resize", measure);
    }, [version]);

    const dist = (v) => {
        if (!geo.current.w)
            return 0;

        const half = window.innerWidth / 2;
        return Math.min(Math.abs((geo.current.left + geo.current.w / 2 + v - half) / half), 1);
    };

    const scale = useTransform([x, version], ([v]) => 1 - 0.1 * dist(v));
    const opacity = useTransform([x, version], ([v]) => 1 - 0.5 * dist(v));
    const blur = useTransform([x, version], ([v]) => {
        const t = Math.max(0, (dist(v) - 0.2) / 0.8);
        const px = Math.pow(t, 1.4) * 8;
        return px < 0.2 ? "none" : `blur(${px.toFixed(2)}px)`;
    });
    const ghostX = useTransform([x, version], ([v]) => `${-dist(v) * 24}%`);

    const tone = last ? "on-scarlet" : index % 3 === 1 ? "on-ink" : "";

    return (
        <motion.li
            ref={ref}
            className={`timeline__card ${tone}`.trim()}
            style={{ "--dy": `${DY[index % DY.length]}px`, ...(reduce ? {} : { scale, opacity, filter: blur }) }}
        >
            <motion.span
                className="timeline__ghost"
                style={reduce ? undefined : { x: ghostX }}
                aria-hidden="true"
            >
                {ghostOf(item.period)}
            </motion.span>
            <span className="timeline__period">
                {item.period}
            </span>
            <div className="timeline__text">
                <h3 className="timeline__title">
                    {item.title}
                </h3>
                <p className="timeline__description">
                    {item.description}
                </p>
            </div>
        </motion.li>
    );
}

export function Timeline() {
    const { title, description } = sectionContent.timeline;
    const reduce = useReducedMotion();

    const pinRef = useRef(null);
    const trackRef = useRef(null);
    const distance = useRef(0);
    const version = useMotionValue(0);

    const progress = useScrollProgress(pinRef, 0, 1);
    const x = useTransform([progress, version], ([v]) => -v * distance.current);

    useEffect(() => {
        const measure = () => {
            const cards = trackRef.current?.children;
            if (cards && cards.length) {
                const first = cards[0];
                const last = cards[cards.length - 1];

                const firstCenter = first.offsetLeft + first.offsetWidth / 2;
                const lastCenter = last.offsetLeft + last.offsetWidth / 2;
                
                distance.current = Math.max(lastCenter - firstCenter, 0);
                bump(version);
            }
        };

        measure();
        window.addEventListener("resize", measure);
        document.fonts?.ready.then(measure);

        const ro = new ResizeObserver(measure);
        if (trackRef.current)
            ro.observe(trackRef.current);

        return () => {
            window.removeEventListener("resize", measure);
            ro.disconnect();
        };
    }, [version]);

    return (
        <section id="timeline" className="section timeline">
            <div className="container">
                <SectionHeading title={title} description={description} />
            </div>

            <div className="timeline__pin" ref={pinRef} style={{ "--n": timeline.length }}>
                <div className="timeline__sticky">
                    <motion.ul className="timeline__track" ref={trackRef} style={{ x }}>
                        {timeline.map((item, i) => (
                            <TimelineCard
                                key={item.id}
                                item={item}
                                index={i}
                                last={i === timeline.length - 1}
                                x={x}
                                version={version}
                                reduce={reduce}
                            />
                        ))}
                    </motion.ul>

                    <div className="timeline__bar" aria-hidden="true">
                        <motion.span className="timeline__bar-fill" style={{ scaleX: progress }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
