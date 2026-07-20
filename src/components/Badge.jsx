import { motion } from "framer-motion";
import "./Badge.css";

export function Badge({ children }) {
    return (
        <motion.span
            className="badge mono"
            whileHover={{ y: -3, scale: 1.06 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.span>
    );
}
