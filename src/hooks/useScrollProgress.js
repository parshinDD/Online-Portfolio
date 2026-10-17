import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

export function useScrollProgress(ref, start = 0, end = 1) {
    const progress = useMotionValue(0);

    useEffect(() => {
        const update = () => {
            const el = ref.current;
            if (!el)
                return;

            const rect = el.getBoundingClientRect();
            const vh = window.innerHeight;
            const from = start * vh;
            const span = from - end * vh + rect.height;
            const p = span > 0 ? (from - rect.top) / span : 0;
            progress.set(Math.min(1, Math.max(0, p)));
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        window.addEventListener("load", update);
        document.fonts?.ready.then(update);

        const ro = new ResizeObserver(update);
        ro.observe(document.documentElement);
        
        if (ref.current)
            ro.observe(ref.current);

        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
            window.removeEventListener("load", update);
            ro.disconnect();
        };
    }, [ref, progress, start, end]);

    return progress;
}
