// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    const scrollToAbout = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="container mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-7xl mb-4 text-zinc-100">
                        Hi, I'm <span className="text-emerald-400">Tristan James Burgos</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 mb-8">
                        Full Stack Developer & Creative Designer
                    </p>
                    <p className="text-zinc-500 max-w-2xl mx-auto mb-12">
                        I craft beautiful and functional web experiences with modern technologies.
                        Passionate about clean code and intuitive design.
                    </p>

                    <div className="flex items-center justify-center gap-4 mb-12">
                        <a
                            href="https://github.com/nats1211"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-800"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tristan-james-burgos-5165b923a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-800"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:burgostristan96@gmail.com"
                            className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-800"
                        >
                            <Mail size={24} />
                        </a>
                    </div>

                    <button
                        onClick={scrollToAbout}
                        className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 rounded-lg transition-colors"
                    >
                        View My Work
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <button
                        onClick={scrollToAbout}
                        className="text-zinc-400 hover:text-emerald-400 transition-colors animate-bounce"
                    >
                        <ArrowDown size={32} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}