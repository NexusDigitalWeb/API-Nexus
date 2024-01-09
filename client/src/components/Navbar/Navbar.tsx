"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavbarMenuMobile from "./NavbarMenuMobile";

const Navbar = (): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="h-[100px] w-[100%]" id="home">
      <div className="flex justify-between pr-4 pl-4 h-full">
        <Link href="/" className="h-full flex items-center">
          <p className="text-2xl font-extrabold tablet:text-3xl">Nexus.</p>
        </Link>

        <button className="w-[20px]" onClick={handleClick}>
          <Image
            src="https://res.cloudinary.com/dcvvyhf8p/image/upload/v1702579474/Principal%20web%20Nexus/hbzjkxegujijaeii7ely.png"
            alt="burger-menu-icon"
            width={100}
            height={100}
            layout="responsive"
          />
        </button>
      </div>
      <NavbarMenuMobile open={isMenuOpen} set={setIsMenuOpen} />
    </div>
  );
};

export default Navbar;
