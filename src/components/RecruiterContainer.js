'use client'
import React from 'react'
import ModelCard from './ModelCard';
import { useAppContext } from '@/app/contexts/AppContext';

const RecruiterContainer = () => {
    const {models} = useAppContext();

  return (
     <>
    <div className="flex justify-center items-center ">
    <div className='grid grid-cols-4 gap-3  mt-16 justify-center items-start w-[80%]'>
        
            {models.map(model => (
                <ModelCard model={model} key={model._id}/>
            ))}
     

    </div>
    </div>
    </>
  )
}

export default RecruiterContainer