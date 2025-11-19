'use client';

import { useAppContext } from '@/app/contexts/AppContext'; // 1. Importa el Context
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation'; 

const LoginPage = () => {
  const { login,  } = useAppContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());

    const success = await login(values.email, values.password);

    if (!success) {
      console.error("Login fallido");
    } 
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        
        <div>
      
          <h2 className=" text-center text-3xl font-extrabold text-gray-900">
            Iniciar Sesión
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ¿No tienes una cuenta?{' '}
            <Link href="/register" className="font-medium text-[#CD2C58] hover:text-[#B0264A]">
              Regístrate aquí
            </Link>
          </p>
        </div>

        <form className="mt-5 space-y-6" onSubmit={handleSubmit}>
    
          <div className="rounded-md space-y-4">
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email" 
                type="email"
                autoComplete="email"
                required
                className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                placeholder="tu@email.com"
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
                autoComplete="current-password"
                required
                className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                placeholder="Contraseña"
              />
            </div>
          </div>

    
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#CD2C58] hover:bg-[#B0264A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0264A] disabled:opacity-50"
            >
            Iniciar Sesion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;