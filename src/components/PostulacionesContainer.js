'use client'
import { useAppContext } from '@/app/contexts/AppContext';
import React from 'react'

const PostulacionesContainer = () => {
   const { modelApplications } = useAppContext();
  return (
    <>

    <div>
      <h1 className="text-3xl font-bold text-center my-8">Mis Postulaciones</h1>
      <div className="max-w-4xl mx-auto px-4">
        {modelApplications.length === 0 ? (
          <p className="text-center text-gray-600">No tienes postulaciones aún.</p>
        ) :
          modelApplications.map((application) => (
            <div key={application._id} className="bg-white shadow-md rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-2">{application.castingTitle}</h2>
              <p className="text-gray-700 mb-4">{application.castingDescription}</p>
              <p className="text-gray-600"><span className="font-semibold">Estado:</span> {application.status}</p>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default PostulacionesContainer