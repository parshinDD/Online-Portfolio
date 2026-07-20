import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./CustomCursor.css";

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 400, damping: 32, mass: 0.4 });
    const springY = useSpring(y, { stiffness: 400, damping: 32, mass: 0.4 });

    useEffect(() => {
        const isCoarse = window.matchMedia?.('(pointer: coarse)').matches;
        if (isCoarse) {
            setIsTouch(true);
            return;
        }

        const move = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            if (!isVisible)
                setIsVisible(true);

            const interactive = e.target.closest('a, button, [role="button"]');
            setIsHovering(Boolean(interactive));
        };

        const leave = () => setIsVisible(false);

        window.addEventListener('mousemove', move);
        document.addEventListener('mouseleave', leave);

        return () => {
            window.removeEventListener('mousemove', move);
            document.removeEventListener('mouseleave', leave);
        };
    }, [isVisible, x, y]);

    if (isTouch)
        return null;

    return (
        <motion.div
            className="custom-cursor"
            style={{ x: springX, y: springY, opacity: isVisible ? 1 : 0 }}
            animate={{ scale: isHovering ? 1.6 : 1 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
        />
    );
}
