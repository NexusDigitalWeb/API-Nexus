"use client"
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

const NavbarMenuMobile = ({ open, set }: { open: boolean, set: Dispatch<SetStateAction<boolean>> }): React.ReactElement => {
  return (
    <div className={`transition-all duration-300 ease-in absolute h-[90vh] w-screen flex justify-center bg-[#ebe9e9] transform ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <ul className='flex flex-col justify-center items-center gap-10 text-xl'>
            <Link href='/' onClick={() => set(false)}>Servicios</Link>
            <Link href='/' onClick={() => set(false)}>Preguntas frecuentes</Link>
            <Link href='/' onClick={() => set(false)}>Contactanos</Link>
        </ul>
    </div>
  )
}

export default NavbarMenuMobile
