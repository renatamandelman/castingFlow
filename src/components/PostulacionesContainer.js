'use client'
import { useAppContext } from '@/app/contexts/AppContext';
import React from 'react'
import PostulacionCard from './PostulacionCard';

const PostulacionesContainer = () => {
   const { model, getModelApplications, modelApplications } = useAppContext();

   
  return (
    <>

    <div>
      <h1 className="text-2xl font-bold text-center my-2 text-[#CD2C58]">Mis Postulaciones</h1>
      <div className=" px-4 flex flex-col mt-5 justify-center items-center">
        {modelApplications.length === 0 ? (
          <p className="text-center text-gray-600">No tienes postulaciones aún.</p>
        ) :
          modelApplications.map((application) => (
           <PostulacionCard key={application._id} application={application} />
          ))
        }
      </div>
    </div>
    </>
  )
}

export default PostulacionesContainer