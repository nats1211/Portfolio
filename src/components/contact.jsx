import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./use-in-view";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const { ref, isInView } = useInView();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setIsSuccess(false);
        // Handle form submission here
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setIsSuccess(true);
                    setFormData({ name: "", email: "", message: "" });

                    setTimeout(() => {
                        setIsSuccess(false);
                    }, 5000);
                })
            .catch((error) => {
                console.error(error);
                alert("Failed to send message. Please try again.");
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "burgostristan96@gmail.com",
            href: "mailto:burgostristan96@gmail.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "(+63) 993-662-1180",
            href: "tel:+639936621180",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Malolos, Bulacan, Philippines",
            href: null,
        },
    ];

    <AnimatePresence>
        {isSuccess && (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="mt-6 flex items-center justify-center gap-3 text-emerald-400"
            >
                <motion.div
                    className="w-10 h-10 rounded-full border-2 border-emerald-400 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    ✓
                </motion.div>
                <span className="text-lg">Message sent successfully!</span>
            </motion.div>
        )}
    </AnimatePresence>

    return (
        <section id="contact" className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl mb-4 text-emerald-400">Contact</h2>
                    <div className="w-20 h-1 bg-emerald-400 mb-12"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl mb-6">Get in Touch</h3>
                            <p className="text-zinc-400 mb-8">
                                I'm always open to discussing new projects, creative ideas, or opportunities
                                to be part of your vision. Feel free to reach out!
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-12 h-12 bg-emerald-400/10 rounded-lg flex items-center justify-center shrink-0">
                                            <item.icon className="text-emerald-400" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-zinc-500 text-sm">{item.label}</p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-zinc-300 hover:text-emerald-400 transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-zinc-300">{item.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-zinc-400 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors text-zinc-100"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-zinc-400 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors text-zinc-100"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-zinc-400 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors text-zinc-100 resize-none"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className={`w-full px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2
                                        ${isSending
                                            ? "bg-emerald-400 cursor-not-allowed"
                                            : "bg-emerald-500 hover:bg-emerald-600 text-zinc-950"}
                                `}
                                >
                                    {isSending ? (
                                        <motion.div
                                            className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                        />
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-24 pt-8 border-t border-zinc-800 text-center text-zinc-500"
            >
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </motion.div>
        </section>
    );
}
