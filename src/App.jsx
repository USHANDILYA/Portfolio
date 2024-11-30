// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Designing from './components/Designing';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import ResearchPublications from './components/ResearchPublications'; // Import Research Publications component
import Volunteering from "./components/Volunteering";
import Achievements from "./components/Achievements";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Designing />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <ResearchPublications /> {/* Add Research Publications section here */}
      <Volunteering />
      <Achievements />
      <Footer />
    </>
  );
}
