'use client';

import { useAppContext } from '@/app/contexts/AppContext';
 import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RegisterRecruiter = () => {
  const router = useRouter();
  const { createRecruiter, getRecruiter } = useAppContext();
  

  const handleAddRecruiter =  async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());

   const newRecruiter = await createRecruiter(values);
  await getRecruiter(newRecruiter );
  router.push("/recruiter");
 


  };

  return (
    <div className="flex items-center justify-center  px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg"> {/* Aumentado a max-w-4xl para más campos */}
        
        <div>
          <Image
            className="mx-auto "
            src="/assets/logo.png" 
            alt="CastingFlow Logo"
            width={120}
            height={120}
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registro de Reclutador
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/login" className="font-medium text-[#CD2C58] hover:text-[#B0264A]">
              Inicia sesión
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-10" onSubmit={handleAddRecruiter}> 
  
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Datos de tu Cuenta
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email de Contacto
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="contacto@empresa.com"
                />
              </div>
       
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Nombre de la Empresa
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="Ej: Mi Marca S.A."
                />
              </div>

         
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="Mínimo 6 caracteres"
                />
              </div>

    
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirmar Contraseña
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="Repite tu contraseña"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Contacto y Ubicación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Teléfono (Opcional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="Ej: +5491112345678"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Dirección (Opcional)
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="Ej: Av. Corrientes 1234"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  País (Opcional)
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="Ej: Argentina"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  Ciudad (Opcional)
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="Ej: Buenos Aires"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Detalles de la Empresa
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-700">
                  Sitio Web (Opcional)
                </label>
                <input
                  id="companyWebsite"
                  name="companyWebsite"
                  type="text"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="https://www.tuempresa.com"
                />
              </div>

              <div>
                <label htmlFor="companyLogoUrl" className="block text-sm font-medium text-gray-700">
                  URL del Logo (Opcional)
                </label>
                <input
                  id="companyLogoUrl"
                  name="companyLogoUrl"
                  type="text"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="https://ejemplo.com/logo.png"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Descripción de la Empresa (Opcional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="Una breve descripción de tu empresa y el tipo de talentos que buscas."
                ></textarea>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#CD2C58] hover:bg-[#B0264A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0264A] disabled:opacity-50 disabled:cursor-not-allowed"
              to='/model'
            >
              Crear Cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterRecruiter;