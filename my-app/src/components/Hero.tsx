import React from 'react';
import Image from 'next/image';
import foto1 from '../../public/bg_home.jpeg';
import { ArrowRight } from './icons';
import { Button } from './ui/Button';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export function Hero({ scrollToSection }: HeroProps) {
  return (
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
        <Button onClick={() => scrollToSection('sobre')}>
          Conhecer mais
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>
    </section>
  );
}
