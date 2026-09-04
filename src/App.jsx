import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/Header";
import { CustomCursor } from "./components/CustomCursor";
import { SidePanel } from "./components/SidePanel";
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
            <CustomCursor />
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Timeline />
                <Contact />
            </main>
            <SidePanel />
            <ResumePDF />
        </ThemeProvider>
    );
}
