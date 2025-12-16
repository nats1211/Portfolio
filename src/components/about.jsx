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

                    <p className="text-zinc-400 mb-8 max-w-3xl">
                        Detail-oriented software engineer with a strong foundation in programming, software development, and database management.
                        Skiled in HTML, CSS, JavaScript, and modern frameworks with experience in building applications and managing data models.
                        Recognized for problem-solving ability, analytical thinking, and attention to detail in developing efficient and reliable solutions.
                        Colaborative team player with effective communication skils, adaptability in fast-paced environments, and a commitment to
                        continuous learning and improvement. Dedicated to delivering high-quality software that meets user needs and organizational
                        goals.
                    </p>

                    <p className="text-zinc-400 mb-12 max-w-3xl">
                        When I'm not coding, you can find me exploring new technologies, contributing to
                        open source projects, or enjoying a good cup of coffee while sketching out new ideas.
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
