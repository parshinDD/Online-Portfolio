import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Timeline } from "./sections/Timeline";
import { Contact } from "./sections/Contact";
import "./styles/Global.css";

export default function App() {
  return (
      <ThemeProvider>
          <Header />
          <main>
              <Hero />
              <About />
              <Projects />
              <Timeline />
              <Contact />
          </main>
      </ThemeProvider>
  );
}
