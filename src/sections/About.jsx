import React from 'react';
import Section from '../components/ui/Section';
import { Code, Server, Database, Layout } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills }) => (
    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
        <div className="mb-4 p-3 bg-blue-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-blue-400">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="px-2 py-1 bg-black/40 rounded text-sm text-gray-400 border border-white/5">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const About = () => {
    const skillCategories = [
        {
            icon: Layout,
            title: "Frontend",
            skills: ["React", "TypeScript", "TailwindCSS", "Next.js", "Framer Motion"]
        },
        {
            icon: Server,
            title: "Backend",
            skills: ["Node.js", "Express", "Python", "Go", "GraphQL"]
        },
        {
            icon: Database,
            title: "Database",
            skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase"]
        },
        {
            icon: Code,
            title: "Tools",
            skills: ["Git", "Docker", "AWS", "Figma", "VS Code"]
        }
    ];

    return (
        <Section id="about" className="bg-black/50">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        I started my coding journey 3 years ago and have since fallen in love with solving complex problems through code.
                        I specialize in building scalable web applications with modern technologies.
                    </p>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        When I'm not coding, you can find me exploring new coffee shops, reading about system design, or contributing to open source projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skillCategories.map((category) => (
                        <SkillCard key={category.title} {...category} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
