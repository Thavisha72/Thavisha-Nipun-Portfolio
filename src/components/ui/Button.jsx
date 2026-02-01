import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = "primary", className = "", ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer";
    const variants = {
        primary: "bg-white text-black hover:bg-gray-200 shadow-lg shadow-white/10",
        secondary: "bg-gray-800 text-white hover:bg-gray-700",
        outline: "border border-gray-700 text-gray-300 hover:border-white hover:text-white"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
