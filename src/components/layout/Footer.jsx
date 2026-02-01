import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
