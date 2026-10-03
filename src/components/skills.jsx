import Badge from "./ui/badge.jsx";
import Card from "./ui/card.jsx";
import Reveal from "./reveal.jsx";
import { skillGroups } from "../data/skills.js";

function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-surface px-4 py-16 sm:px-6 sm:py-20"
    >
      <Reveal className="mx-auto max-w-5xl">
        <h2 id="skills-heading" className="mb-3 text-3xl font-semibold tracking-tight">
          Skills
        </h2>
        <p className="mb-8 max-w-[65ch] text-muted">
          A practical toolkit for building and shipping modern web applications.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <Card as="article" key={group.category} className="p-5">
              <h3 className="mb-4 text-lg font-medium">{group.category}</h3>
              <ul className="flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Badge>{skill}</Badge>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Skills;
