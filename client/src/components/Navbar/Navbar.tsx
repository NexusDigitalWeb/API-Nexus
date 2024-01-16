"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavbarMenuMobile from "./NavbarMenuMobile";

const Navbar = (): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="h-[100px] w-[100%] flex justify-center lg:mt-[15px]" id="home">
      <div className="flex justify-between pr-4 pl-4 h-full w-[88%]">
        <Link href="/" className="h-full flex items-center">
          <p className="text-2xl font-extrabold tablet:text-3xl lg:text-4xl lg:hover:text-[41px] transition-all duration-200 ease-in ">Nexus.</p>
        </Link>

        <div className="hidden tablet-md:flex justify-center items-center lg:text-[20px]">
          <ul className="flex gap-5 lg:gap-7">
            <Link href="#servicesPage" className="lg:hover:bg-[#B9FF66] lg:p-2 rounded hover:shadow-md transition-all ease-in duration-100">Servicios</Link>
            <Link href="#frequentQuestions" className="lg:hover:bg-[#B9FF66] lg:p-2 rounded hover:shadow-md transition-all ease-in duration-100">Preguntas frecuentes</Link>
            <Link href="#contactUs" className="lg:hover:bg-[#B9FF66] lg:p-2 rounded hover:shadow-md transition-all ease-in duration-100">Contáctanos</Link>
          </ul>
        </div>

        <button className="w-[20px] tablet-md:hidden" onClick={handleClick}>
          <Image
            src="https://res.cloudinary.com/dcvvyhf8p/image/upload/v1702579474/Principal%20web%20Nexus/hbzjkxegujijaeii7ely.png"
            alt="burger-menu-icon"
            width={100}
            height={100}
            layout="responsive"
          />
        </button>
      </div>
      <div className="tablet-md:hidden">
        <NavbarMenuMobile open={isMenuOpen} set={setIsMenuOpen} />
      </div>
    </div>
  );
};

export default Navbar;
