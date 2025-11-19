'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      className={`absolute w-full h-[70px]  px-4 flex items-center justify-between z-50`}
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
           md:static top-[70px] left-0 w-full bg-white md:bg-transparent text-black md:text-current font-semibold
          flex-col items-start md:items-center transition-all duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible md:visible md:opacity-100"}
        `}
      >

        <li className=" flex flex-col md:flex-row items-start md:items-center w-full md:w-auto cursor-pointer">
  <Link href="/">Castings</Link>        </li>

        <li className="px-4 py-2 md:p-0">
          <Link href="/login">Iniciar Sesión</Link>
        </li>
        {/* <li className="px-4 py-2 md:p-0">
          <Link href="/register">Registrarse</Link>
        </li> */}
         <li className="px-4 py-2 md:p-0">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;