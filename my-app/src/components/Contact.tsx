import React from 'react';
import { Phone, MapPin, Linkedin } from './icons';

export function Contact() {
  return (
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
  );
}
