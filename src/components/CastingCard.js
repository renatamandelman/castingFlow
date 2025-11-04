import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Si usas Heroicons, importa estos. Si no, puedes mantener tus SVGs o buscar alternativas.
// import { MapPinIcon, CurrencyDollarIcon, BuildingOfficeIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';

const CastingCard = ({ casting }) => {
  // Función para formatear el número de pago
  const formatPayRate = (rate) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(rate);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const getStatusClasses = (status) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link 
      href={`/castings/${casting._id}`} 
      className='bg-white p-6 m-3 flex flex-col md:flex-row items-start w-[80%] max-w-4xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'
    >
      <div className='shrink-0 mr-6 mb-4 md:mb-0'>
        <Image
          src={ '/assets/logoCompany.png'}
          alt={`${casting.recruiter?.companyName || casting.title} logo`}
          className="rounded-full object-cover border-2 border-gray-200"
          width={64}
          height={64}
        />
      </div>

      <div className='grow'> 
        <div className="flex justify-between items-start mb-2">
            <h2 className='font-extrabold text-[#CD2C58] text-2xl leading-tight pr-4'>
            {casting.title}
            </h2>
            <span 
                className={`px-3 py-1 rounded-full text-xs font-semibold uppercase whitespace-nowrap ${getStatusClasses(casting.status)}`}
            >
                {casting.status}
            </span>
        </div>
        
        {casting.recruiter?.companyName && (
          <p className="text-gray-600 text-sm mb-3 flex items-center">
            <span className="font-semibold">{casting.recruiter.companyName}</span>
          </p>
        )}

        <p className='text-gray-700 text-base mb-4'>
          {casting.description}
        </p>

        <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-600 text-sm'>
          <p className='flex items-center'>

            <svg className="w-4 h-4 mr-2 fill-[#CD2C58]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg> 
            {casting.location}
          </p>
          <p className='flex items-center font-semibold text-green-700'>
            {formatPayRate(casting.payRate)}
          </p>
          <p className='flex items-center'>
            <svg className="w-4 h-4 mr-2 fill-[#CD2C58]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192zm-128 80c0-6.7 2.8-13 7.7-17.3l.7-.7c5-4.4 11.2-6.7 17.4-6.7c7 0 13.5 2.5 18.4 7.4L424.4 336c5 4.9 7.6 11.5 7.6 18.5s-2.6 13.6-7.6 18.5L384 416l-32-32-24.4 24.4c-4.9 5-11.5 7.6-18.5 7.6s-13.6-2.6-18.5-7.6L256 384l-32 32-24.4-24.4c-4.9-5-7.6-11.5-7.6-18.5s2.6-13.6 7.6-18.5L320 272z"/></svg>
            <span>{formatDate(casting.jobDate)}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CastingCard;