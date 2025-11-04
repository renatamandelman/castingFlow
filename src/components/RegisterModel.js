'use client'
import { useAppContext } from '@/app/contexts/AppContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RegisterModel = () => {
  const {createModel} = useAppContext();

  const handleAddModel = (e) => {

    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    createModel(values);

  };
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        

        <div>
          <Image
            className="mx-auto h-12 w-auto"
            src="/assets/logoCompany.png" 
            alt="CastingFlow Logo"
            width={48}
            height={48}
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Crea tu cuenta de Modelo
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/login" className="font-medium text-[#CD2C58] hover:text-[#B0264A]">
              Inicia sesión aquí
            </Link>
          </p>
        </div>

        {/* Formulario */}
        <form className="mt-8 space-y-10" onSubmit={(e) => handleAddModel(e)}>
          
          {/* --- SECCIÓN 1: INFORMACIÓN DE CUENTA --- */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Datos de tu Cuenta
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="tu@email.com"
                />
              </div>
              <div></div> {/* Espacio vacío para alinear la grilla */}

              {/* Password */}
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

              {/* Confirmar Password */}
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
              Información Personal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="Ej: María"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Apellido
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="Ej: González"
                />
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Fecha de Nacimiento
                </label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  required
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Género
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                >
                  <option value="" disabled>Selecciona una opción...</option>
                  <option value="female">Femenino</option>
                  <option value="male">Masculino</option>
                  <option value="other">Otro</option>
                  <option value="prefer not to say">Prefiero no decirlo</option>
                </select>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  País
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
                  Ciudad
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
              Perfil Profesional
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="profileImageUrl" className="block text-sm font-medium text-gray-700">
                  URL de tu Foto de Perfil
                </label>
                <input
                  id="profileImageUrl"
                  name="profileImageUrl"
                  type="url"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="https://ejemplo.com/tu-foto.jpg"
                />
              </div>

              <div>
                <label htmlFor="portfolioLink" className="block text-sm font-medium text-gray-700">
                  Link a tu Portafolio
                </label>
                <input
                  id="portfolioLink"
                  name="portfolioLink"
                  type="url"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="Ej: tu-instagram.com/usuario"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Medidas (Opcional)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                  Altura (cm)
                </label>
                <input
                  id="height"
                  name="height"
                  type="number"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="Ej: 175"
                />
              </div>

              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                  Peso (kg)
                </label>
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="Ej: 60"
                />
              </div>
              
              <div>
                <label htmlFor="shoeSize" className="block text-sm font-medium text-gray-700">
                  Calzado (AR)
                </label>
                <input
                  id="shoeSize"
                  name="shoeSize"
                  type="number"
                  className="mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#CD2C58] focus:border-[#CD2C58] sm:text-sm"
                  placeholder="Ej: 38"
                />
              </div>
            </div>
          </div>


          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#CD2C58] hover:bg-[#B0264A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0264A]"
              

            >
              Crear mi cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterModel;