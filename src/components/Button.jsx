import { motion, useMotionValue, useSpring } from "framer-motion";
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

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 200, damping: 14, mass: 0.3 });
    const springY = useSpring(y, { stiffness: 200, damping: 14, mass: 0.3 });

    const handleMouseMove = (e) => {
        if (!magnetic)
            return;
        
        const rect = e.currentTarget.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        x.set(relX * 0.35);
        y.set(relY * 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Component
            className={`btn btn--${variant} ${className}`.trim()}
            style={magnetic ? { x: springX, y: springY } : undefined}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ y: magnetic ? undefined : -2, scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            {...extraProps}
        >
            {children}
        </Component>
    );
}
