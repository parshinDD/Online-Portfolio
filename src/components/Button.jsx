import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import "./Button.css";

export function Button({
                           children,
                           variant = 'primary',
                           href,
                           onClick,
                           type = 'button',
                           className = '',
                           magnetic = false,
                       }) {
    const Component = href ? motion.a : motion.button;
    const extraProps = href
        ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' }
        : { type, onClick };

    const reduce = useReducedMotion();
    const pull = magnetic && !reduce;

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.3 });
    const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.3 });

    const handleMouseMove = (e) => {
        if (!pull)
            return;

        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
        y.set((e.clientY - (rect.top + rect.height / 2)) * 0.35);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Component
            className={`btn btn--${variant} ${className}`.trim()}
            style={pull ? { x: springX, y: springY } : undefined}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.14, ease: [0.23, 1, 0.32, 1] }}
            {...extraProps}
        >
            {children}
        </Component>
    );
}
