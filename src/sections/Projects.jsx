import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const projectsData = [
    {
        id: 1,
        title: "Customer Churn Prediction",
        category: "ML",
        description: "Predicting customer churn using Random Forest and XGBoost with 92% accuracy.",
        tags: ["Python", "Scikit-Learn", "Pandas"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "E-commerce Sales EDA",
        category: "EDA",
        description: "In-depth exploratory data analysis of 1M+ sales records visualizing trends and seasonality.",
        tags: ["Jupyter", "Seaborn", "Matplotlib"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "AI Customer Support Bot",
        category: "Chatbots",
        description: "RAG-based chatbot using OpenAI API and LangChain to answer support queries.",
        tags: ["LangChain", "OpenAI", "React"],
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "House Price Prediction",
        category: "ML",
        description: "Regression model to estimate house prices based on features like location and size.",
        tags: ["Python", "TensorFlow", "Keras"],
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Twitter Sentiment Analysis",
        category: "EDA",
        description: "Analyzing public sentiment on trending topics using NLP techniques.",
        tags: ["NLTK", "Python", "Plotly"],
        image: "https://images.unsplash.com/photo-1611605698302-6b93827d06e2?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Personal Assistant Bot",
        category: "Chatbots",
        description: "Voice-activated assistant capable of scheduling and basic tasks.",
        tags: ["Python", "SpeechRecognition", "API"],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
    }
];

const categories = ["All", "ML", "EDA", "Chatbots"];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

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
                                className="group relative bg-muted/50 border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                                        <a href="#" className="p-3 bg-foreground text-background rounded-full hover:bg-muted-foreground transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href="#" className="p-3 bg-foreground text-background rounded-full hover:bg-muted-foreground transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
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
