import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />
            <main className="grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
