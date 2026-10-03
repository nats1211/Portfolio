import { LazyMotion } from "motion/react";
import Navigation from "./components/navigation.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/project.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";
import Toaster from "./components/ui/sonner.jsx";
import useTheme from "./hooks/useTheme.js";
import { Analytics } from "@vercel/analytics/react";

const loadMotionFeatures = () =>
  import("./lib/motionFeatures.js").then((module) => module.default);

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <div className="min-h-screen bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only z-50 rounded bg-background px-4 py-2 text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navigation theme={theme} onToggleTheme={toggleTheme} />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Toaster theme={theme} />
        <Analytics />
      </div>
    </LazyMotion>
  );
}

export default App;
