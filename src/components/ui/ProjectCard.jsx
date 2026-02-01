import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, tags, image, demoLink, repoLink }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm hover:border-gray-700 transition-colors group"
        >
            <div className="h-48 overflow-hidden relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
                            title="View Demo"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                    {repoLink && (
                        <a
                            href={repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
                            title="View Code"
                        >
                            <Github size={20} />
                        </a>
                    )}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
