import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import inventoryImg from '../assets/Inventory.png';
import unemploymentImg from '../assets/Unemployment.png';
import playerAnalysisImg from '../assets/Player Analysis.png';
import accidentImg from '../assets/Accident.png';
import earthquakeImg from '../assets/Earthquake.png'
// import earthquakeImg from '../assets/Earthquake.png'; // File missing

const projectsData = [
    {
        id: 4,
        title: "Inventory Management System",
        category: "Machine Learning",
        description: "This System developed using Python and Flask and allows users to manage and predict product inventory.",
        tags: ["Python", "Flask", "HTML", "CSS"],
        image: inventoryImg,
        githubLink: "https://github.com/Thavisha72/Inventory-Management-system",
        demoLink: "#"
    },
    {
        id: 3,
        title: "Global-Earthquake-prediction",
        category: ["Machine Learning", "Exploratory Data Analysis (EDA)"],
        description: "Global Earthquake Prediction using Machine Learning and Data Analysis.",
        tags: ["Python", "Scikit-Learn", "Pandas", "Seaborn", "Numpy", "Matplotlib"],
        image: earthquakeImg,
        githubLink: "https://github.com/Thavisha72/Global-Earthquake-prediction",
        demoLink: "#"
    },
    {
        id: 1,
        title: "Accident severity Prediction",
        category: "Machine Learning",
        description: "Predicting Accident Severity Based on Driver Behavior and Environmental Factors.",
        tags: ["Python", "Scikit-Learn", "Pandas", "Seaborn", "Numpy", "Matplotlib"],
        image: accidentImg,
        githubLink: "https://github.com/Thavisha72/Accident-severity-Prediction",
        demoLink: "https://gemini.google.com/share/e891896e1a71"
    },
    {
        id: 2,
        title: "Unemployment Analysis EDA",
        category: "Exploratory Data Analysis (EDA)",
        description: "In-depth exploratory data analysis of Unemployment in India Before and during the Covid-19.",
        tags: ["Colab", "Seaborn", "Matplotlib"],
        image: unemploymentImg,
        githubLink: "https://github.com/Thavisha72/Unemployment-Analysis-with-Python",
        demoLink: "#"
    },

    {
        id: 6,
        title: "Player Analysis",
        category: "Dashboards",
        description: "PowerbI Dashboard for Srilankan National Cricket Player Analysis.",
        tags: ["PowerbI", "Excel"],
        image: playerAnalysisImg,
        githubLink: "https://github.com/Thavisha72/Player-Analysis",
        demoLink: "#"
    }
];

const categories = ["All", "Machine Learning", "Exploratory Data Analysis (EDA)", "Dashboards"];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projectsData
        : projectsData.filter(project =>
            Array.isArray(project.category)
                ? project.category.includes(activeCategory)
                : project.category === activeCategory
        );

    return (
        <section id="projects" className="py-20 bg-background/50">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Portfolio
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Recent Projects</h2>
                </motion.div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                ? "bg-foreground text-background shadow-lg shadow-white/10"
                                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative bg-muted/50 dark:bg-white/5 border border-border dark:border-[#a855f7]! rounded-2xl overflow-hidden hover:border-primary/50 dark:hover:shadow-lg dark:hover:shadow-primary/10 transition-all"
                            >
                                <div className="aspect-video overflow-hidden relative">
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </a>
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm pointer-events-none">
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-foreground text-background rounded-full hover:bg-muted-foreground transition-colors pointer-events-auto">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-foreground text-background rounded-full hover:bg-muted-foreground transition-colors pointer-events-auto">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 items-start mb-4">
                                        {(Array.isArray(project.category) ? project.category : [project.category]).map(cat => (
                                            <span key={cat} className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
