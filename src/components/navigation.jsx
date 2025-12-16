import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = ["About", "Skills", "Projects", "Education", "Contact"];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => scrollToSection("hero")}
                        className="text-xl font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                        Portfolio
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-zinc-400 hover:text-emerald-400 transition-colors"
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-zinc-400 hover:text-emerald-400"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-zinc-400 hover:text-emerald-400 transition-colors text-left"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
