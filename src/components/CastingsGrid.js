'use client'
import { useAppContext } from "@/app/contexts/AppContext";
import React, { useEffect } from 'react'
import CastingCard from './CastingCard';

const CastingsGrid = () => {
    const {castings, getCastings} = useAppContext();
       
    useEffect(() => {
      getCastings();
    }, [getCastings]);

  return (
    <>
    <div className="flex justify-center items-center">
    <div className='flex flex-col mt-10 justify-center items-center'>
        
            {castings.map(casting => (
                <CastingCard casting={casting} key={casting._id}/>
            ))}
     

    </div>
    </div>
    </>
  )
}

export default CastingsGrid