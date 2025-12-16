/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { useInView } from "./use-in-view";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Education() {
    const { ref, isInView } = useInView();

    const educationData = [
        {
            icon: GraduationCap,
            degree: "Bachelor of Science in Information Technology",
            institution: "STI College - Malolos",
            period: "2021 - Current",
            description: "Focus on software engineering and web development.",
        },
        {
            icon: Award,
            degree: "SAP",
            institution: "STI College",
            period: "2024",
            description: "Participated in HCM, WM, PS, EAM, CS, QM modules of S/4HANA using Global Bike",
        },
        {
            icon: Award,
            degree: "Java Fundamentals",
            institution: "Oracle Academy",
            period: "2023",
            description: "Completion of Oracle's Java programming course.",
        },
        {
            icon: Award,
            degree: "System Administration",
            institution: "STI College",
            period: "2023",
            description: "Completion of Linux course.",
        },
    ];

    return (
        <section id="education" className="py-24 px-6 bg-zinc-900/50">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl mb-4 text-emerald-400">Education & Awards</h2>
                    <div className="w-20 h-1 bg-emerald-400 mb-12"></div>

                    <div className="space-y-6">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={item.degree}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-emerald-400/50 transition-colors flex gap-6"
                            >
                                <div className="shrink-0">
                                    <div className="w-12 h-12 bg-emerald-400/10 rounded-lg flex items-center justify-center">
                                        <item.icon className="text-emerald-400" size={24} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                                        <h3 className="text-xl text-zinc-100">{item.degree}</h3>
                                        <span className="text-emerald-400 text-sm md:text-base mt-1 md:mt-0">
                                            {item.period}
                                        </span>
                                    </div>
                                    <p className="text-zinc-400 mb-2">{item.institution}</p>
                                    <p className="text-zinc-500">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
