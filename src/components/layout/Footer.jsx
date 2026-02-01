import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Thavisha Nipun Bandara. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/Thavisha72" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href="https://linkedin.com/in/thavisha-nipun-bandara-3584a3202" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    <a href="https://twitter.com/Thavisha72" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                    <a href="mailto:thavishanipun@gmail.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
