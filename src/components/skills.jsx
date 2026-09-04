/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { useInView } from "./use-in-view";

export default function Skills() {
    const { ref, isInView } = useInView();

    const skillCategories = [
        {
            category: "Frontend",
            skills: ["React", "Tailwind CSS", "Next.js", "DaisyUI", "Shad CN", "HTML", "CSS"],
        },
        {
            category: "Backend",
            skills: ["Node.js", "Python", "PostgreSQL"],
        },
        {
            category: "Languages",
            skills: ["JavaScript", "TypeScript", "SQL"],
        },
        {
            category: "Tools & Others",
            skills: ["Git", "Claude", "Figma"],
        },
    ];

    return (
        <section id="skills" className="py-24 px-6 bg-zinc-900/50">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl mb-4 text-emerald-400">Skills</h2>
                    <div className="w-20 h-1 bg-emerald-400 mb-12"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                                className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-emerald-400/30 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                    <h3 className="text-xl text-zinc-100">{category.category}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={
                                                isInView
                                                    ? { opacity: 1, scale: 1 }
                                                    : { opacity: 0, scale: 0.9 }
                                            }
                                            transition={{
                                                duration: 0.4,
                                                delay: categoryIndex * 0.15 + skillIndex * 0.06 + 0.2,
                                            }}
                                            whileHover={{ y: -2 }}
                                            className="px-3 py-1.5 text-sm text-zinc-300 bg-zinc-800/60 border border-zinc-700 rounded-full hover:border-emerald-400/50 hover:text-emerald-400 hover:bg-emerald-400/5 transition-colors duration-200 cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}