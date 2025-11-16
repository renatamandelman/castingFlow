'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from '@/app/contexts/AppContext'

const NavbarModel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
 const { model } = useAppContext();
  return (
    <nav
      className={`absolute w-full h-[70px]  px-4 flex items-center justify-between z-50`}
    >

      <Link href="/" className="flex items-center">
        <Image
          src={'/assets/logo.png'}
          width={100}
          height={100}
          alt="logo"
        />
      </Link>

  
      <ul
        className={`
          md:flex md:flex-row md:w-[30%] md:justify-between md:font-bold md:mr-4 md:pr-2
          absolute md:static top-[70px] left-0 w-full bg-white md:bg-transparent text-black md:text-current font-semibold
          flex-col items-start md:items-center transition-all duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible md:visible md:opacity-100"}
        `}
      >

        <li className="relative flex flex-col md:flex-row items-start md:items-center w-full md:w-auto cursor-pointer">
          <Link href="/model">Castings</Link>
        </li>
         <li className="relative flex flex-col md:flex-row items-start md:items-center w-full md:w-auto cursor-pointer">
         <Link href="/model/postulaciones">Mis postulaciones</Link>
        </li>

        <Link href="/" className="flex items-center justify-center">
        <Image
        className="rounded-2xl"
          src={`/assets/${model?.profileImageUrl}` || "/assets/Haleyjames.webp"}
          width={50}
          height={50}
          alt="logo"
        />
       
      </Link>
       
      </ul>
    </nav>
  );
};

export default NavbarModel;