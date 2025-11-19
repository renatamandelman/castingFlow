'use client'
import React from 'react'
import ModelCard from './ModelCard';
import { useAppContext } from '@/app/contexts/AppContext';

const RecruiterContainer = () => {
    const {models} = useAppContext();

  return (
     <>
    <div className="flex justify-center items-center flex-col">
    <h1 className='font-bold text-2xl text-[#CD2C58]'>Modelos</h1>
    <div className='grid grid-cols-4 gap-3  mt-10 justify-center items-start w-[90%]'>
        
            {models.map(model => (
                <ModelCard model={model} key={model._id}/>
            ))}
     

    </div>
    </div>
    </>
  )
}

export default RecruiterContainer