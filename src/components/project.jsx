import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
    const { ref, isInView } = useInView();

    const projects = [
        {
            title: "Sta. Lucia Nation Highschool: Learning Management System",
            description: "A full-stack learning management system for Sta. Lucia Nation Highschool built with React, Node.js, and PostgreSQL. " +
                "Features include user authentication, course management, assignments, and real-time notifications.",
            tags: ["React", "Node.js", "PostgreSQL", "DaisyUI"],
            github: "https://github.com/nats1211/LMS",
        },
    ];

    return (
        <section id="projects" className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl mb-4 text-emerald-400">Projects</h2>
                    <div className="w-20 h-1 bg-emerald-400 mb-12"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-emerald-400/50 transition-all group"
                            >
                                <h3 className="text-xl mb-3 group-hover:text-emerald-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-emerald-400 transition-colors"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-emerald-400 transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
