import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CastingCard = ({casting}) => {
  return (
    <Link href={`/${casting._id}`} className='bg-[#FFC69D]  p-2 m-3 flex flex-row  items-center w-[80%] rounded-md shadow-xl'>
         <div className='flex align-center p-2'>
          <Image
            src={`/assets/logoCompany.png`}
            alt={`${casting.title}`}
            className=""
            width={50}
            height={50}
          />
          </div>
        <div className='ml-10 w-[70%]'> 
        <h1 className='font-bold text-[#CD2C58] text-xl'>{casting.title}</h1>
        <p className='text-[14px]'>{casting.description}</p>
        <p className='mt-2 text-[14px] flex flex-row'><svg className="w-3.5 mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg> {casting.location}</p>
        <p className='mt-2 text-[16px] flex flex-row items-center'><svg className="w-2 mr-2 " aria-hidden="true" data-prefix="fal" data-icon="dollar-sign" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-dollar-sign fa-w-8 fa-7x"><path fill="currentColor" d="M191.9 259.3L73.7 222.2C49.2 214.5 32 189 32 160.3 32 124.8 57.6 96 89 96h73.8c22.2 0 43.3 8.6 60.1 24.5 3.1 2.9 7.8 3.2 11 .3l11.9-10.8c3.4-3.1 3.6-8.4.4-11.6-22.8-22-52.7-34.5-83.3-34.5H144V8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v56H89c-49.1 0-89 43.2-89 96.3 0 42.6 26.4 80.6 64.1 92.4l118.2 37.1c24.6 7.7 41.7 33.2 41.7 61.9 0 35.4-25.6 64.3-57 64.3H93.2c-22.2 0-43.3-8.6-60.1-24.5-3.1-2.9-7.8-3.2-11-.3L10.3 402c-3.3 3-3.6 8.4-.3 11.5 22.8 22 52.7 34.5 83.3 34.5H112v56c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-56h23c49.1 0 89-43.2 89-96.3 0-42.5-26.4-80.5-64.1-92.4z" class=""></path></svg> {casting.payRate}</p>
        <div className='mt-3'>
            <p className='font-semibold text-[#CD2C58] '>Requisitos</p>
          <ul className='ml-5 text-[14px]'>
    {casting.requirements.split('. ').map((requirement, index) => (
        <li className='list-disc' key={index}>
            {requirement}
        </li>
    ))}
</ul>
        </div>
        </div>

    </Link>
  )
}

export default CastingCard