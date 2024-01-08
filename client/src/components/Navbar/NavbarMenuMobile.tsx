"use client"
import Link from 'next/link'
import React, { Dispatch, SetStateAction, useEffect } from 'react'

const NavbarMenuMobile = ({ open, set }: { open: boolean, set: Dispatch<SetStateAction<boolean>> }): React.ReactElement => {
  
  // Agrega o remueve las propiedades al cuerpo al cambiar el estado de 'open'
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (open) {
        body.style.position = 'fixed';
        body.style.width = '100%';
        body.style.height = '100%';
      } else {
        body.style.position = '';
        body.style.width = '';
        body.style.height = '';
      }
    }

    // Limpieza al desmontar el componente
    return () => {
      if (body) {
        body.style.position = '';
        body.style.width = '';
        body.style.height = '';
      }
    };
  }, [open]);

  return (
    <div className={`transition-all duration-300 ease-in fixed top-0 left-0 h-screen w-screen flex justify-center bg-[#f2efef] transform ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <ul className='flex flex-col justify-center items-center gap-10 text-xl tablet:text-2xl'>
            <Link href='#servicesPage' onClick={() => set(false)}>Servicios</Link>
            <Link href='#frequentQuestions' onClick={() => set(false)}>Preguntas frecuentes</Link>
            <Link href='#contactUs' onClick={() => set(false)}>Contáctanos</Link>
        </ul>
    </div>
  );
}

export default NavbarMenuMobile;
