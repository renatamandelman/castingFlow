import Image from "next/image";
import Link from "next/link";
import React from "react";





const castingRecruiter = ({ castingItem }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("es-AR", options);
  };

  const formatPayRate = (rate) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(rate);
  };

   const getStatusClasses = (status) => {
    switch (status?.toLowerCase()) {
      case "open": return "bg-green-100 text-green-800 border-green-200";
      case "closed": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const applicantCount = castingItem.applications?.length || 0;

  return (
    <div className="bg-white flex flex-col w-full max-w-4xl mx-auto rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#E06B80]/20 transition-all duration-300 border border-gray-100 overflow-hidden">
      
      <div className="p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
          <Link href={`/castingItems/${castingItem._id}`} className="group">
             <h2 className="font-extrabold text-[#CD2C58] text-xl sm:text-2xl leading-tight group-hover:underline">
              {castingItem.title}
            </h2>
          </Link>
         
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusClasses(castingItem.status)}`}>
            {castingItem.status}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2 text-[#CD2C58]">
              <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.493 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
            </svg>
            <span className="truncate">{castingItem.location}</span>
          </div>
          <div className="flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2 text-[#CD2C58]">
              <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4h.25V2.75A.75.75 0 015.75 2zm-1 5.5h10.5a1.25 1.25 0 011.25 1.25v8.5a1.25 1.25 0 01-1.25 1.25H4.75a1.25 1.25 0 01-1.25-1.25v-8.5a1.25 1.25 0 011.25-1.25z" clipRule="evenodd" />
            </svg>
            <span>{formatDate(castingItem.jobDate)}</span>
          </div>
     
          <div className="flex items-center font-semibold text-green-700">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2 text-green-600">
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v.5h-3a.75.75 0 000 1.5h3v.5a.75.75 0 001.5 0v-.5h3a.75.75 0 000-1.5h-3v-.5zM10 8.5a.75.75 0 01.75.75v.5h3a.75.75 0 010 1.5h-3v.5a.75.75 0 01-1.5 0v-.5h-3a.75.75 0 010-1.5h3v-.5A.75.75 0 0110 8.5zM10.75 12.25a.75.75 0 00-1.5 0v.5h-3a.75.75 0 000 1.5h3v.5a.75.75 0 001.5 0v-.5h3a.75.75 0 000-1.5h-3v-.5z" />
            </svg>
            {formatPayRate(castingItem.payRate)}
          </div>
        </div>

   
        <p className="text-gray-700 text-sm line-clamp-2">
          {castingItem.description}
        </p>
      </div>


      <div className="bg-gray-50/80 p-5 sm:p-6 border-t border-gray-100 flex-grow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 text-[#CD2C58]">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.358-.442 3 3 0 00-4.308-3.516 6.484 6.484 0 001.905 3.959c.023-.222.014-.442-.025-.654zM12.75 15.25a.75.75 0 00-1.5 0v.5h-3a.75.75 0 000 1.5h3v.5a.75.75 0 001.5 0v-.5h3a.75.75 0 000-1.5h-3v-.5z" />
            </svg>
            Postulantes
          </h3>
          <span className="bg-[#CD2C58] text-white text-xs font-bold px-2.5 py-1 rounded-full">
            {applicantCount}
          </span>
        </div>

        
      </div>
    </div>
  );
};

export default castingRecruiter;