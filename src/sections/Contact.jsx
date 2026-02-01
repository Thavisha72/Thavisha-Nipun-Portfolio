import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Get in Touch</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">Let's Work Together</h2>
                    <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities in Data Science. </p>

                    <a
                        href="mailto:thavishanipun@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
                    >
                        <Mail className="w-5 h-5" />
                        Say Hello
                    </a>

                    <div className="mt-16 flex flex-wrap justify-center gap-8">
                        {[
                            { icon: Mail, href: "mailto:thavishanipun@gmail.com", label: "Email" },
                            { icon: Phone, href: "https://wa.me/94718351784", label: "WhatsApp" },
                            { icon: Linkedin, href: "https://linkedin.com/in/thavisha-nipun-bandara-3584a3202", label: "LinkedIn" },
                            { icon: Github, href: "https://github.com/Thavisha72", label: "GitHub" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-2 group"
                            >
                                <div className="p-4 bg-muted rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg text-muted-foreground">
                                    <social.icon className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                    {social.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
