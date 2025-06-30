'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Database, Globe, Smartphone, Phone, MapPin, Linkedin,  ArrowRight } from 'lucide-react';
import Image from 'next/image';
import foto1 from '../../public/bg_home.jpeg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'servicos', 'contato'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f0e9e6] text-[#191F25]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#191F25] text-[#f0e9e6] z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold">Manoel Ferreira Matos</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: 'inicio', label: 'Início' },
                  { id: 'sobre', label: 'Sobre' },
                  { id: 'servicos', label: 'Serviços' },
                  { id: 'contato', label: 'Contato' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id 
                        ? 'bg-[#272E36] text-[#f0e9e6]' 
                        : 'text-[#B1b2b9] hover:bg-[#272E36] hover:text-[#f0e9e6]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#B1b2b9] hover:text-[#f0e9e6] hover:bg-[#272E36] focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#272E36]">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'sobre', label: 'Sobre' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'contato', label: 'Contato' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'bg-[#191F25] text-[#f0e9e6]' 
                      : 'text-[#B1b2b9] hover:bg-[#191F25] hover:text-[#f0e9e6]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
          <Image
            src={foto1}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-[#191F25] bg-opacity-75"></div>
        </div>
        
        <div className="relative z-10 text-center text-[#f0e9e6] px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Manoel F. Matos
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#B1b2b9]">
            Desenvolvedor de sistema | Arquiteto de sistemas
          </p>
          <button
            onClick={() => scrollToSection('sobre')}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#191F25] bg-[#f0e9e6] hover:bg-[#B1b2b9] transition-colors"
          >
            Conhecer mais
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-[#f0e9e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-8 text-[#191F25]">Quem sou eu?</h2>
              <p className="text-lg text-[#5b5d62] mb-6 leading-relaxed">
                Olá me chamo Manoel Ferreira Matos, sou especialista em desenvolvimento de sistema e análise de sistemas. Gosto muito de motos clássicas e jogar.
                <br />
                
              </p>
              <a href="https://github.com/ManelFer">
                <button className="inline-flex items-center px-6 py-3 bg-[#191F25] text-[#f0e9e6] rounded-md hover:bg-[#272E36] transition-colors">
                Saiba mais
                <ArrowRight className="ml-2" size={18} />
              </button>
              </a>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-[#B1b2b9] rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-[#9095a1] rounded-full flex items-center justify-center">
                  <Code size={80} className="text-[#f0e9e6]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-[#B1b2b9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#191F25]">Meus Serviços</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code size={48} />,
                title: "Desenvolvimento Web",
                description: "Criação de sites e aplicações web modernas e responsivas"
              },
              {
                icon: <Database size={48} />,
                title: "Banco de Dados",
                description: "Design e otimização de bancos de dados relacionais"
              },
              {
                icon: <Globe size={48} />,
                title: "Sistemas Web",
                description: "Desenvolvimento de sistemas web completos e escaláveis"
              },
              {
                icon: <Smartphone size={48} />,
                title: "Apps Mobile",
                description: "Desenvolvimento de aplicações móveis nativas e híbridas"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-[#f0e9e6] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-[#191F25] mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#191F25] text-center">
                  {service.title}
                </h3>
                <p className="text-[#5b5d62] text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://github.com/ManelFer">
              <button className="inline-flex items-center px-8 py-3 bg-[#191F25] text-[#f0e9e6] rounded-md hover:bg-[#272E36] transition-colors">
                Ver todos os serviços
                <ArrowRight className="ml-2" size={20} />
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contato" className="py-20 bg-[#191F25] text-[#f0e9e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Contatos</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-[#B1b2b9]" size={24} />
                  <span className="text-lg">(79) 9 9919-9735</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-[#B1b2b9]" size={24} />
                  <span className="text-lg">N. S. do Socorro | Sergipe</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="text-[#B1b2b9]" size={24} />
                  <span className="text-lg">www.linkedin.com/in/manoel-mato</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#272E36] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 bg-[#191F25] border border-[#5b5d62] rounded-md focus:outline-none focus:border-[#B1b2b9] text-[#f0e9e6]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full px-4 py-3 bg-[#191F25] border border-[#5b5d62] rounded-md focus:outline-none focus:border-[#B1b2b9] text-[#f0e9e6]"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Sua mensagem"
                    className="w-full px-4 py-3 bg-[#191F25] border border-[#5b5d62] rounded-md focus:outline-none focus:border-[#B1b2b9] text-[#f0e9e6] resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#f0e9e6] text-[#191F25] rounded-md hover:bg-[#B1b2b9] transition-colors font-semibold"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#272E36] text-[#B1b2b9] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">Manoel F. Matos Dev</p>
            </div>
            <div className="text-sm">
              <p>© 2025 Dev. FullStack Manoel F. M.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;