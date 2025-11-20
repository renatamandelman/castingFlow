'use client'
import { useAppContext } from '@/app/contexts/AppContext';
import React from 'react'
import PostulacionCard from './PostulacionCard';
import CastingRecruiter from './CastingRecruiter';

const PostulacionesRecruiter = () => {
   const { recruiterApplications } = useAppContext();

   
  return (
    <>

    <div>
      <h1 className="text-2xl font-bold text-center my-2 text-[#CD2C58]">Mis Postulaciones</h1>
      <div className=" px-4 flex flex-col mt-5 justify-center items-center">
        {recruiterApplications.length === 0 ? (
          <p className="text-center text-gray-600">No tienes postulaciones aún.</p>
        ) :
          recruiterApplications.map((castingItem) => (
           <CastingRecruiter key={castingItem._id} castingItem={castingItem} />
          ))
        }
      </div>
    </div>
    </>
  )
}

export default PostulacionesRecruiter