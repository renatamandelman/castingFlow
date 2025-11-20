'use client'
import { useAppContext } from "@/app/contexts/AppContext";
import React, { useEffect } from 'react'
import CastingCard from './CastingCard';

const CastingsGrid = () => {
    const {castings} = useAppContext();

  return (
    <>
    <div className="flex justify-center items-center flex-col">
      <h1 className='font-bold text-2xl text-[#CD2C58]'>Castings</h1>
    <div className='flex flex-col mt-2 justify-center items-center'>
        
            {castings.map(casting => (
                <CastingCard casting={casting} key={casting._id}/>
            ))}
     

    </div>
    </div>
    </>
  )
}

export default CastingsGrid