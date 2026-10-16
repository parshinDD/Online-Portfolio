import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ResumePDF } from "./components/ResumePDF";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Timeline } from "./sections/Timeline";
import { Contact } from "./sections/Contact";
import "./styles/Global.css";

export default function App() {
    return (
        <ThemeProvider>
            <MotionConfig reducedMotion="user">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Projects />
                    <Timeline />
                    <Contact />
                </main>
                <Footer />
                <ResumePDF />
            </MotionConfig>
        </ThemeProvider>
    );
}
