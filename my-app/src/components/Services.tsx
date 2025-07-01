import React from 'react';
import { Code, Database, Globe, Smartphone, ArrowRight } from './icons';

const services = [
  {
    icon: <Code size={48} />,
    title: "Desenvolvimento Web",
    description: "Criação de sites e aplicações web modernas e responsivas"
  },
  {
    icon: <Database size={48} />,
    title: "Banco de Dados",
    description: "Design e arquitetura de bancos de dados relacionais"
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
];

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-[#B1b2b9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#191F25]">Meus Serviços</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
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
  );
}
