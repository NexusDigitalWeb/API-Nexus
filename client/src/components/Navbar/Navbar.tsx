"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import NavbarMenuMobile from './NavbarMenuMobile';

const Navbar = (): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className='h-[100px] w-[100%]'>
      <div className='flex justify-between pr-4 pl-4 h-full'>
      <Link href='/' className='h-full flex items-center'>
        <p className='text-2xl font-extrabold border-b-2 border-black'><span className='text-[#a4ff35] border-5'>N</span>exus.</p>
      </Link>

      <button onClick={handleClick}>
        <Image src='/Burgermenuicon.png' alt='burger-menu-icon' width={20} height={20}/>
      </button>
      </div>
      <NavbarMenuMobile open={isMenuOpen} set={setIsMenuOpen}/>
    </div>
  )
}

export default Navbar