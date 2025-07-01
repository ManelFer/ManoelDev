'use client';

import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { useScroll } from '../hooks/useScroll';

const navLinks = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'contato', label: 'Contato' }
];

function App() {
  const { activeSection, scrollToSection } = useScroll(navLinks.map(link => link.id));

  return (
    <div className="min-h-screen bg-[#f0e9e6] text-[#191F25]">
      <Navigation 
        navLinks={navLinks} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
