import Navigation from "./components/navigation.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/project.jsx";
import Education from "./components/education.jsx";
import Contact from "./components/contact.jsx";

function App() {

  return (
    <div className="bg-zinc-950 text-zinc-100 minx-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}

export default App
