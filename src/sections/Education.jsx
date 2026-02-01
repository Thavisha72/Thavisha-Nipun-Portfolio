import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
    {
        id: 1,
        degree: "BSc in Data Science",
        institution: "University of Colombo School of Computing",
        period: "2022 - Present",
        description: "Focusing on Machine Learning, Deep Learning, and Statistical Analysis. Minor in Mathematics.",
        location: "Colombo, Sri Lanka"
    },
    {
        id: 2,
        degree: "Advanced Level (Physical Science)",
        institution: "Royal College",
        period: "2019 - 2021",
        description: "Passed with 3 A's. President of the Mathematics Society.",
        location: "Colombo, Sri Lanka"
    }
];

const Education = () => {
    return (
        <section id="education" className="py-20 bg-background relative">
            <div className="container mx-auto px-6 max-w-4xl">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-muted/50 border border-border rounded-2xl p-8 hover:border-primary/50 hover:bg-muted transition-all h-full flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {item.degree}
                                    </h3>
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <GraduationCap className="w-6 h-6" />
                                    </div>
                                </div>

                                <div className="text-muted-foreground font-medium mb-4 flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    {item.institution}
                                </div>

                                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                                    {item.description}
                                </p>
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
