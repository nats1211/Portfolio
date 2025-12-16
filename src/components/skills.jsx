/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { useInView } from "./use-in-view";

export default function Skills() {
    const { ref, isInView } = useInView();

    const skillCategories = [
        {
            category: "Frontend",
            skills: [
                { name: "React", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "Tailwind CSS", level: 95 },
                { name: "Next.js", level: 80 },
            ],
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Python", level: 75 },
                { name: "PostgreSQL", level: 80 },
            ],
        },
        {
            category: "Tools & Others",
            skills: [
                { name: "Git", level: 90 },
                { name: "Claude", level: 75 },
                { name: "Figma", level: 85 },
            ],
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
                                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                                className="p-6 bg-zinc-900 rounded-lg border border-zinc-800"
                            >
                                <h3 className="text-xl mb-6 text-zinc-100">{category.category}</h3>
                                <div className="space-y-4">
                                    {category.skills.map((skill) => (
                                        <div key={skill.name}>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-zinc-400">{skill.name}</span>
                                                <span className="text-zinc-500">{skill.level}%</span>
                                            </div>
                                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                                    transition={{ duration: 1, delay: categoryIndex * 0.2 + 0.3 }}
                                                    className="h-full bg-emerald-400 rounded-full"
                                                ></motion.div>
                                            </div>
                                        </div>
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
