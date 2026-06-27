import { createContext, useCallback, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

function getInitialTheme() {
    if (typeof window === 'undefined')
        return 'dark';

    const stored = window.localStorage?.getItem('theme');
    if (stored === 'dark' || stored === 'light')
        return stored;

    const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            window.localStorage.setItem('theme', theme);
        } catch { }
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
