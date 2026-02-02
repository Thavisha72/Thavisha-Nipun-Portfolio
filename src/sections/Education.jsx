import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import sltcLogo from '../assets/SLTC LOGO.png';
import stjosephLogo from '../assets/stjoseph.jpg';
import iasLogo from '../assets/iassl.png';
import EsoftLogo from '../assets/Esoft.jpg';

const educationData = [
    {
        id: 1,
        degree: "BSc(Hons) in Data Science",
        institution: "SriLanka Technological Campus",
        period: "2022 - Present",
        description: "CGPA: 3.68",
        Modules: "Machine Learning, Artificial Intelligence, Deep Learning, Business Intelligence, Tensors and Graphs, Statistics",
        location: "Colombo, Sri Lanka",
        logo: sltcLogo
    },
    {
        id: 2,
        degree: "Diploma in Applied Statistics ",
        institution: "Institute Of Applied Statistics",
        period: "2024-2025",
        description: "GPA: 3.76",
        Modules: "Nonparametric Statistics, Applied Regression Analysis, Categorical Data Analysis, and Time Series Data Analysis",
        location: "Colombo, Sri Lanka",
        logo: iasLogo
    },
    {
        id: 3,
        degree: "Certificate in English and IT",
        institution: "Esoft Metro Campus",
        period: "2022",
        Modules: "Spoken English, HTML, CSS, Photoshop, Microsft Office",
        location: "Anuradhapura, Sri Lanka",
        logo: EsoftLogo
    },
    {
        id: 4,
        degree: "Secondary Education",
        institution: "St. Joseph's Collage",
        period: "2007-2020",
        description: "Advanced Level: Physical Science Stream",
        location: "Anuradhapura, Sri Lanka",
        logo: stjosephLogo
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 bg-background relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase flex items-center justify-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        Academic Background
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Education</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-muted/50 dark:bg-white/5 border border-border dark:border-[#a855f7]! rounded-[40px] p-8 hover:border-primary/50 hover:bg-muted dark:hover:bg-white/10 dark:hover:shadow-lg dark:hover:shadow-primary/10 transition-all h-full flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 border border-border overflow-hidden">
                                            <img src={item.logo} alt={item.institution} className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {item.degree}
                                            </h3>
                                            <div className="text-muted-foreground font-medium text-sm mt-1">
                                                {item.institution}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0 hidden md:block">
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                </div>

                                <div className="text-muted-foreground font-medium mb-4 flex items-center gap-2 text-sm">
                                    <MapPin className="w-4 h-4" />
                                    {item.location}
                                </div>

                                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                                    {item.description}
                                </p>

                                {item.Modules && (
                                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                                        <span className="font-semibold text-foreground">Modules: </span>
                                        {item.Modules}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary/80 bg-primary/5 p-3 rounded-lg w-fit">
                                <Calendar className="w-4 h-4" />
                                {item.period}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
