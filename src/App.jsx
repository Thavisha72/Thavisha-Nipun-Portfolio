import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Education />
      <Contact />
    </Layout>
  );
}

export default App;
