import React from 'react';
// Update the import path below to the correct location of your icon components.
// For example, if your icons are in 'src/components/icons', use './icons' instead of '../icons'.
import { Code, ArrowRight } from './icons';
import Image from 'next/image';

export function About() {
  return (
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
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B1b2b9] to-[#9095a1] rounded-full shadow-2xl" />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/perfil.jpeg"
                    alt="Perfil"
                    width={288} // 72 * 4
                    height={288}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
