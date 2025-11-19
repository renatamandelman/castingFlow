import Image from "next/image";
import Link from "next/link";
import React from "react";

const ModelCard = ({ model }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };


  return (
   <Link
  href={`/models/${model._id}`}
  className="bg-white p-3 flex flex-col items-start justify-evenly w-[80%] h-full max-w-4xl 
             rounded-xl shadow-lg  hover:shadow-md hover:shadow-[#E06B80] transition-all duration-300 border border-gray-100"
>
  {/* Imagen */}
  <div className="w-full flex justify-center  mb-4">
    <Image
    src={ `/assets/models/${model?.profileImageUrl}` }
    width={120}
    height={120}
    alt="Foto de Perfil del Modelo"
    className="rounded-xl" 
  />
  </div>

  {/* Info */}
  <div className="w-full ">
    <h2 className="font-extrabold text-[#CD2C58] text-xl leading-tight mb-1 text-center">
      {model.firstName} {model.lastName}
    </h2>

    <p className="text-gray-600 text-sm mb-2 text-center">
      {model.city}, {model.country}
    </p>

    <p className="text-gray-700 mb-3 text-center">
      Experiencia: <span className="font-semibold">{model.experience}</span>
    </p>

    {/* Medidas */}
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-600 text-sm mb-3">
      <p><strong>Altura:</strong> {model.measurements?.height} cm</p>
      <p><strong>Peso:</strong> {model.measurements?.weight} kg</p>
      <p><strong>Calzado:</strong> {model.measurements?.shoeSize}</p>
    </div>

    {/* Skills */}
    {model.skills?.length > 0 && (
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {model.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>
    )}
  </div>
</Link>

  );
};

export default ModelCard;
