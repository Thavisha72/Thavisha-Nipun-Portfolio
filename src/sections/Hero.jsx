import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';

const tools = [
    { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "TensorFlow", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "Pandas", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
    { name: "NumPy", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
    { name: "Scikit-Learn", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "Jupyter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" },
    { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
];

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-start relative overflow-hidden bg-background pt-32 pb-20">
            {/* Background gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />

            <div className="container mx-auto px-6 z-10 grow flex flex-col justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mb-16">

                    {/* Text Content */}
                    <motion.div
                        className="flex-1 text-center md:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full border border-border bg-muted/50 text-sm font-medium mb-6 hover:bg-muted transition-colors text-muted-foreground">
                            Available for Hire
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Thavisha Nipun</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl font-light">
                            Data Science Student passionate about ML, EDA, and Chatbots.
                            Transforming data into actionable insights.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-foreground text-background rounded-full font-semibold hover:opacity-90 transition-opacity"
                            >
                                View Projects
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="px-8 py-3 bg-muted border border-border rounded-full font-semibold hover:bg-muted/80 transition-colors flex items-center gap-2 group text-foreground"
                            >
                                Download CV
                                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        className="flex-1 relative"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
                            <div className="absolute inset-0 bg-linear-to-tr from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
                                alt="Thavisha Nipun"
                                className="w-full h-full object-cover rounded-full border-4 border-muted relative z-10 shadow-2xl"
                            />

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute bottom-4 -right-4 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-border z-20 shadow-lg"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                            >
                                <div className="text-xs text-muted-foreground mb-1">Current Focus</div>
                                <div className="font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    Machine Learning
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>

                {/* Tech Stack Integrated */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="w-full border-t border-border pt-10"
                >
                    <p className="text-center text-muted-foreground text-sm font-medium uppercase tracking-wider mb-8">
                        Technologies & Tools
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5, scale: 1.1 }}
                                className="flex flex-col items-center gap-2 group"
                            >
                                <img
                                    src={tool.url}
                                    alt={tool.name}
                                    className="h-10 w-10 md:h-12 md:w-12 object-contain transition-all duration-300"
                                />
                                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                                    {tool.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <ChevronDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
};

export default Hero;
