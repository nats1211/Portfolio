import ProjectCard from "./project-card.jsx";
import Reveal from "./reveal.jsx";
import { projects } from "../data/projects.js";

function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="px-4 py-16 sm:px-6 sm:py-20"
    >
      <Reveal className="mx-auto max-w-5xl">
        <h2 id="projects-heading" className="mb-3 text-3xl font-semibold tracking-tight">
          Selected projects
        </h2>
        <p className="mb-8 max-w-[65ch] text-muted">
          A few examples of products and tools I have worked on.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;
