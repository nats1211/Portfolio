import { ExternalLink, Github } from "lucide-react";
import Badge from "./ui/badge.jsx";
import Card from "./ui/card.jsx";

function ProjectCard({ project }) {
  return (
    <Card
      as="article"
      className="overflow-hidden transition-colors hover:border-accent"
    >
      <img
        src={project.imageSrc}
        alt={project.imageAlt}
        width="960"
        height="540"
        loading="lazy"
        className="aspect-video w-full border-b border-border object-cover"
      />
      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
        <p className="mb-4 leading-relaxed text-muted">{project.description}</p>
        <ul className="mb-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>
              <Badge>{technology}</Badge>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-accent hover:underline"
            >
              Live site <ExternalLink aria-hidden="true" size={16} />
            </a>
          ) : (
            <span className="text-muted">Live site — TODO</span>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-accent hover:underline"
            >
              GitHub <Github aria-hidden="true" size={16} />
            </a>
          ) : (
            <span className="text-muted">GitHub — TODO</span>
          )}
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
