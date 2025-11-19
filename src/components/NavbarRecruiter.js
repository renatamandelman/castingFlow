'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from '@/app/contexts/AppContext'

const NavbarRecruiter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
 const { recruiter } = useAppContext();
  return (
    <nav
      className={`w-full h-[70px]  px-4 mt-1 flex items-center justify-between z-50`}
    >

      <Link href="/" className="flex items-center">
        <Image
          src={'/assets/logo.png'}
          width={150}
          height={150}
          alt="logo"
        />
      </Link>

  
      <ul
        className={`
          md:flex md:flex-row md:w-[25%] md:justify-between md:font-bold md:mr-4 md:pr-2
          absolute md:static top-[70px] left-0 w-full bg-white md:bg-transparent text-black md:text-current font-semibold
          flex-col items-start md:items-center transition-all duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible md:visible md:opacity-100"}
        `}
      >

        <li className=" flex flex-col md:flex-row items-start md:items-center w-full md:w-auto cursor-pointer">
          <Link href="/recruiter">Modelos</Link>
        </li>
         <li className=" flex flex-col md:flex-row items-start md:items-center w-full md:w-auto cursor-pointer">
         <Link href="/recruiter/postulaciones">Mis castings</Link>
        </li>
          <li className="flex flex-col md:flex-row items-start md:items-center w-full md:w-auto cursor-pointer">
    <Link href="/" >
  <Image
    className="rounded-full border-2 border-[#CD2C58] object-cover"
    src={`/assets/recruiters/${recruiter.companyLogoUrl}`}
    width={50}
    height={50}
    alt="Foto de Perfil del Recruiter"
  />
</Link>
       
       </li>
      </ul>
    </nav>
  );
};

export default NavbarRecruiter;