import { motion } from "framer-motion";
import "./Button.css";

export function Button({
                           children,
                           variant = 'primary',
                           href,
                           onClick,
                           type = 'button',
                           className = '',
                       }) {
    const Component = href ? motion.a : motion.button;
    const extraProps = href
        ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' }
        : { type, onClick };

    return (
        <Component
            className={`btn btn--${variant} ${className}`.trim()}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            {...extraProps}
        >
            {children}
        </Component>
    );
}
