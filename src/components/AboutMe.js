'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutMe = () => {
  return (
    
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl p-8 sm:p-10 flex flex-col md:flex-row gap-8">
        
        <div className="flex-shrink-0 md:w-1/4 flex flex-col items-center text-center">
          <Image
            src="/assets/profile.jpg" 
            alt="Foto del Alumno"
            width={160}
            height={160}
            className="rounded-full border-4 border-[#CD2C58] shadow-md object-cover h-40 w-40 mb-4"
          />
          <h1 className="text-2xl font-extrabold text-gray-900">
           Renata Mandelman
          </h1>
          <p className="text-[#CD2C58] font-semibold text-base mt-1">
            Estudiante de Tecnología Multimedial
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed text-sm">
 Diseñadora multimedial con formación en tecnología, diseño visual y comunicación digital. 
 Adaptable, proactiva y orientada a soluciones creativas y funcionales.

          </p>


          <div className="flex gap-4 mt-6">
            <Link 
              href="https://github.com/renatamandelman" 
              target="_blank"
              className="text-gray-400 hover:text-[#CD2C58] transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </Link>
            <Link 
              href="https://linkedin.com/in/renata-mandelman" 
              target="_blank"
              className="text-gray-400 hover:text-[#0077B5] transition-colors"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </Link>
          </div>
        </div>

        <div className="flex-grow md:w-2/3 flex flex-col gap-8 pt-8 md:pt-0">
          
          <div className="pb-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              🚀 Sobre CastingFlow
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              CastingFlow es una plataforma SAAS diseñada para agilizar y optimizar los procesos de casting, 
              conectando eficazmente a modelos con reclutadores. Busca simplificar la gestión de aplicaciones y 
              la búsqueda de talento.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Web App</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Fullstack</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Programación 3</span>
            </div>
          </div>

          <div className="pb-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              🛠️ Tecnologías Clave
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <TechBadge name="Next.js" />
              <TechBadge name="React" />
              <TechBadge name="Tailwind CSS" />
              <TechBadge name="Node.js" />
              <TechBadge name="Express.js" />
              <TechBadge name="MongoDB" />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

const TechBadge = ({ name }) => (
  <div className="flex items-center justify-center sm:justify-start gap-2 p-2 rounded-lg bg-gray-50 border border-gray-200">
    <div className="w-2 h-2 rounded-full bg-[#CD2C58]"></div>
    <span className="text-sm font-medium text-gray-700">{name}</span>
  </div>
);

export default AboutMe;