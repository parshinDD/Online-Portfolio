import { useEffect } from "react";

const GLYPHS = "01<>/\\_-+=#$%";

export function useScramble(ref, text, enabled = true, delay = 250) {
    useEffect(() => {
        const el = ref.current;
        if (!el || !enabled)
            return;

        let raf = 0;
        const run = () => {
            cancelAnimationFrame(raf);

            let start;
            const tick = (t) => {
                if (start === undefined)
                    start = t;

                const p = Math.min((t - start) / 900, 1);
                const settled = Math.floor(p * text.length);
                el.textContent = text
                    .split("")
                    .map((ch, i) => (i < settled || ch === " " ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0]))
                    .join("");
                raf = p < 1 ? requestAnimationFrame(tick) : 0;
            };

            raf = requestAnimationFrame(tick);
        };

        const timer = setTimeout(run, delay);
        el.addEventListener("pointerenter", run);
        
        return () => {
            clearTimeout(timer);
            cancelAnimationFrame(raf);
            el.removeEventListener("pointerenter", run);
            el.textContent = text;
        };
    }, [ref, text, enabled, delay]);
}
