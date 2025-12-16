/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { Code, Palette, Rocket } from "lucide-react";

export default function About() {
    const { ref, isInView } = useInView();

    const features = [
        {
            icon: Code,
            title: "Clean Code",
            description: "Writing maintainable and scalable code following best practices",
        },
        {
            icon: Palette,
            title: "Modern Design",
            description: "Creating beautiful interfaces with attention to detail",
        },
        {
            icon: Rocket,
            title: "Fast Performance",
            description: "Optimizing for speed and efficiency in every project",
        },
    ];

    return (
        <section id="about" className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl mb-4 text-emerald-400">About Me</h2>
                    <div className="w-20 h-1 bg-emerald-400 mb-12"></div>

                    <p className="text-zinc-400 mb-8 max-w-3xl text-justify">
                        I’m a Software Engineer focused on building clean, efficient, and user-friendly applications.
                        I specialize in HTML, CSS, JavaScript, and modern frameworks, with a solid background in database management.
                        I enjoy turning complex problems into simple, reliable code. I’m a collaborative team player who values clear communication and
                        continuous learning. My goal is always to deliver high-quality software that solves real-world problems
                    </p>

                    <p className="text-zinc-400 mb-12 max-w-3xl text-justify">
                        Outside of work, I enjoy exploring new tech, contributing to open source, or sketching out new ideas over a cup of coffee.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-emerald-400/50 transition-colors"
                            >
                                <feature.icon className="text-emerald-400 mb-4" size={32} />
                                <h3 className="text-xl mb-2">{feature.title}</h3>
                                <p className="text-zinc-500">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
