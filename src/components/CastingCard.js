import { useAppContext } from "@/app/contexts/AppContext";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CastingCard = ({ casting }) => {
  // ... (Lógica de estado y funciones auxiliares permanecen igual)
  const { createApplication, model } = useAppContext();
  const [isApplied, setIsApplied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSubmitMessage = async () => {
    if (!message.trim()) return;
    await createApplication({ casting: casting._id, model: model._id, message });
    setIsApplied(true);
    closeModal();
  };

  const formatPayRate = (rate) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency", currency: "ARS", minimumFractionDigits: 0, maximumFractionDigits: 0,
    }).format(rate);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("es-ES", options);
  };

  const getStatusClasses = (status) => {
    switch (status.toLowerCase()) {
      case "open": return "bg-green-100 text-green-800";
      case "closed": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      {/* CONTENEDOR PRINCIPAL */}
      {/* Cambios:
          - w-[80%] max-w-4xl -> w-full max-w-4xl mx-auto (Centrado y ancho completo en móvil con margen lateral de seguridad)
          - p-6 m-3 -> p-4 sm:p-6 my-3 sm:m-3 (Menos padding interno en móvil)
      */}
      <div className="bg-white p-4 sm:p-6 my-3 sm:m-3 flex flex-col md:flex-row items-start w-full max-w-4xl mx-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
        
        {/* SECCIÓN DEL LOGO */}
        <div className="shrink-0 mr-6 mb-4 md:mb-0 flex justify-center md:block w-full md:w-auto">
           {/* Centramos el logo en móvil */}
          <Image
            src={
              casting?.recruiter?.companyLogoUrl
                ? `/assets/recruiters/${casting.recruiter.companyLogoUrl}`
                : "/assets/defaultCompany.png"
            }
            alt={casting?.recruiter?.companyName || "Logo"}
            width={64}
            height={64}
            // Hacemos la imagen redonda para que se vea más moderna y uniforme
            className="rounded-full object-cover" 
          />
        </div>

        {/* SECCIÓN DE CONTENIDO */}
        <div className="grow w-full">
          
          {/* TÍTULO Y ESTADO */}
          {/* Cambios: flex-wrap para que el estado baje si el título es muy largo */}
          <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
            <h2 className="font-extrabold text-[#CD2C58] text-lg sm:text-xl leading-tight pr-4">
              {casting.title}
            </h2>
            <span
              className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold uppercase whitespace-nowrap ${getStatusClasses(
                casting.status
              )}`}
            >
              {casting.status}
            </span>
          </div>

          {/* NOMBRE DE LA EMPRESA */}
          {casting.recruiter?.companyName && (
            <p className="text-gray-600 text-sm mb-3 flex items-center">
              <span className="font-semibold">
                {casting.recruiter.companyName}
              </span>
            </p>
          )}

          {/* DESCRIPCIÓN */}
          <p className="text-gray-700 text-sm sm:text-base mb-4 line-clamp-3 md:line-clamp-none">
            {/* line-clamp-3: limita a 3 líneas en móvil y muestra '...' */}
            {casting.description}
          </p>

          {/* SECCIÓN INFERIOR: DATOS Y BOTÓN */}
          {/* Cambios cruciales para responsividad:
              - flex justify-between -> flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end
              - En móvil: columna con espacio entre elementos.
              - En escritorio: fila, justificado a los extremos, alineado abajo.
          */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end text-gray-600 text-sm">
            
            {/* CONTENEDOR DE DATOS (Ubicación, Pago, Fecha) */}
            {/* Cambios:
                - flex items-center gap-x-6 gap-y-2 -> flex flex-wrap gap-y-2 gap-x-4 sm:gap-x-6
                - Permite que los elementos se acomoden en varias filas si no caben.
            */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 sm:gap-x-6">
              {/* Ubicación */}
              <p className="flex items-center shrink-0">
                <svg className="w-4 h-4 mr-2 fill-[#CD2C58] shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                </svg>
                <span className="truncate max-w-[150px] sm:max-w-none">{casting.location}</span>
              </p>
              
              {/* Pago */}
              <p className="flex items-center font-semibold text-green-700 shrink-0">
                {formatPayRate(casting.payRate)}
              </p>
              
              {/* Fecha */}
              <p className="flex items-center shrink-0">
                <svg className="w-4 h-4 mr-2 fill-[#CD2C58] shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192zm-128 80c0-6.7 2.8-13 7.7-17.3l.7-.7c5-4.4 11.2-6.7 17.4-6.7c7 0 13.5 2.5 18.4 7.4L424.4 336c5 4.9 7.6 11.5 7.6 18.5s-2.6 13.6-7.6 18.5L384 416l-32-32-24.4 24.4c-4.9 5-11.5 7.6-18.5 7.6s-13.6-2.6-18.5-7.6L256 384l-32 32-24.4-24.4c-4.9-5-7.6-11.5-7.6-18.5s2.6-13.6 7.6-18.5L320 272z" />
                </svg>
                <span>{formatDate(casting.jobDate)}</span>
              </p>
            </div>
            
            {/* BOTÓN DE POSTULACIÓN */}
            {/* Cambios: w-full sm:w-auto para que ocupe todo el ancho en móvil */}
            <div className="w-full sm:w-auto">
              <button
                onClick={openModal}
                disabled={isApplied}
                // Cambios: ml-2 -> sm:ml-2. Se elimina el margen izquierdo en móvil.
                className={`text-md w-full sm:w-auto sm:ml-2 p-2 py-2.5 sm:py-2 rounded text-white font-semibold transition-colors duration-200
                ${
                  isApplied
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#CD2C58] hover:bg-[#b0264a]"
                }`}
              >
                {isApplied ? "Postulado" : "Postularme"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL (Ya era bastante responsivo, solo un pequeño ajuste de ancho) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg animate-in fade-in zoom-in duration-200">
            {/* ... Contenido del modal igual ... */}
            <h2 className="text-xl font-bold text-[#CD2C58] mb-4">
              Mensaje de postulación
            </h2>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 h-28 outline-none focus:ring-2 focus:ring-[#CD2C58] resize-none"
              placeholder="Escribí un mensaje para el reclutador..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmitMessage}
                disabled={!message.trim()}
                className={`px-4 py-2 rounded-lg text-white font-semibold transition-colors ${!message.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#CD2C58] hover:bg-[#b0264a]'}`}
              >
                Enviar postulación
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CastingCard;