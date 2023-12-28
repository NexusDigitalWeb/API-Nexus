"use client"
import React from 'react'
import { useState } from 'react';
import sendEmail from '@/utils/formMail.utils';
import Link from 'next/link';
import Image from 'next/image';


const FomrMail = (): React.ReactElement => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await sendEmail(email)

            if (response.status === 0) {
                console.log('Correo electrónico enviado con éxito');
            } else {
                console.error('Error al enviar el correo electrónico');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <div className='flex flex-col items-center bg-[#191A23] px-[20px] pt-[50px] pb-[30px] gap-[37px]' id='contactUs'>
            <div className='flex flex-col items-center gap-3'>
                <Link href='/' className='h-full text-white  flex items-center'>
                    <p className='text-3xl font-extrabold'>Nexus.</p>
                </Link>
                <div className='flex flex-col items-center justify-around h-[141px] text-white text-[16px]'>
                    <p >Servicios</p>
                    <p >Preguntas frecuentes</p>
                    <p >Contactanos</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-8 w-full'>
                <h4 className='flex flex-col items-center justify-center w-[115px] h-[23px] rounded-[7px] bg-[#B9FF66]'>
                    Contactanos
                </h4>
                <div className='text-[13px] text-white flex flex-col items-center gap-[15px]'>
                    <p>Email: nexusdigitalcontact@gmail.com</p>
                    <p>Tel: +54 3329-528349</p>
                    <p className='text-[14px] text-center p-1'>Dejanos tu email para recibir mas informacion!!</p>
                </div>
                <form className='h-[216px] w-[100%] max-w-[500px] items-center justify-center flex gap-[22px] flex-col p-[20px] bg-[#292A32] rounded-[14px]' onSubmit={handleSubmit}>

                    <input className='rounded-[14px] text-white bg-transparent border px-[25px] py-[21px] h-[66px] w-full' type="email text-[14px]" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

                    <button className='rounded-[14px] h-[68px] bg-[#B9FF66] px-[35px] py-[20px] w-full' type="submit">Enviar</button>
                </form>
            </div>
            <div className=' h-[30px] w-[130px] flex gap-[20px]'>
                <Link href='/' className='flex items-center justify-center bg-white rounded-[50%] h-[30px] w-[30px]'>
                    <Image
                        src="https://res.cloudinary.com/dcvvyhf8p/image/upload/v1703111301/Principal%20web%20Nexus/linkedin_ho0ezf.png"
                        alt="linkedin-image"
                        width={15}
                        height={15}
                        className=" "
                    />
                </Link>
                <Link href='/' className='flex items-center justify-center bg-white rounded-[50%] h-[30px] w-[30px]'>
                    <Image
                        src="https://res.cloudinary.com/dcvvyhf8p/image/upload/v1703128780/Principal%20web%20Nexus/insta2_dlawkn.png"
                        alt="linkedin-image"
                        width={25}
                        height={25}
                        className=" "
                    />
                </Link>
                <Link href='/' className='flex items-center justify-center bg-white rounded-[50%] h-[30px] w-[30px]'>
                    <Image
                        src="https://res.cloudinary.com/dcvvyhf8p/image/upload/v1703111300/Principal%20web%20Nexus/twitter_kvec7o.png"
                        alt="linkedin-image"
                        width={17.6}
                        height={14.4}
                        className=" "
                    />
                </Link>
            </div>
            <hr className='w-[95%] border' />
            <div className='text-[11px] text-white'>
                <p>@2023 Nexus, Todos Los Derechos Reservados</p>
            </div>
        </div>
    );
}

export default FomrMail