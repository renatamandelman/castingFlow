'use client';

import Link from 'next/link';
import Image from 'next/image';



// Icono de Reclutador (SVG)
const RecruiterIcon = () => (
  <svg className="w-16 h-16 mx-auto text-[#CD2C58]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18M3 21h18" />
  </svg>
);

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        {/* Encabezado */}
        <div>
          <Image
            className="mx-auto h-12 w-auto"
            src="/assets/logoCompany.png" // Tu logo
            alt="CastingFlow Logo"
            width={48}
            height={48}
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Únete a CastingFlow
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Elige el tipo de cuenta que quieres crear.
          </p>
        </div>

        {/* Opciones de Registro */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Opción 1: Soy Modelo */}
          <Link
            href="/register/model"
            className="group relative flex flex-col items-center justify-center p-10 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="p-4 bg-pink-50 rounded-full">
             <svg className="w-16 h-16 mx-auto text-[#CD2C58]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A1.5 1.5 0 0118 21.75H6.75a1.5 1.5 0 01-1.249-1.632z" />
  </svg>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Soy Modelo
            </h3>
            <p className="mt-2 text-center text-sm text-gray-600">
              Quiero crear mi portafolio, buscar castings y postularme a trabajos.
            </p>
            <span className="mt-6 font-semibold text-[#CD2C58] group-hover:underline">
              Crear cuenta de Modelo &rarr;
            </span>
          </Link>

          {/* Opción 2: Soy Reclutador */}
          <Link
            href="/register/recruiter"
            className="group relative flex flex-col items-center justify-center p-10 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="p-4 bg-pink-50 rounded-full">
              <RecruiterIcon />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Soy Reclutador
            </h3>
            <p className="mt-2 text-center text-sm text-gray-600">
              Quiero publicar castings, buscar talento y gestionar mis postulantes.
            </p>
            <span className="mt-6 font-semibold text-[#CD2C58] group-hover:underline">
              Crear cuenta de Reclutador &rarr;
            </span>
          </Link>
        </div>

        {/* Link de Login */}
        <p className="mt-10 text-center text-sm text-gray-600">
          ¿Ya tienes una cuenta?{' '}
          <Link href="/login" className="font-medium text-[#CD2C58] hover:text-[#B0264A]">
            Inicia sesión aquí
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;