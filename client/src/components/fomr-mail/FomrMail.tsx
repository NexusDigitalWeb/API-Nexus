"use client"
import React from 'react'
import { useState } from 'react';
import sendEmail from '@/utils/formMail.utils';


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
        <div className='flex flex-col items-center gap-2'>
            <div className='h-[175px] items-center justify-center flex flex-col gap-[5px]'>
                <h2 className='flex flex-col items-center justify-center w-[226px] h-[97px]'>
                    <span className='w-[235px]  h-[46px] rounded-[7px] pr-[7px] pl-[7px] text-center text-[36px] lead-[45.94px] bg-[#B9FF66] gap-[]'>Contactanos</span>

                </h2>
                <p className='text-[14px] text-center p-1'>Dejanos tu email para recibir mas informacion!!</p>
            </div>
            <form className='flex gap-4 flex-col  p-5 ' onSubmit={handleSubmit}>
                <label className='flex flex-col justify-center bg-[#ebe7e7]  text-[14px] gap-1 h-[120px] px-7 rounded-[45px]'>
                    Email
                    <input className='rounded-[14px] px-[20px] py-[18px] h-[30px] border border-black' type="email text-[14px]" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <button className='rounded-[14px] text-[#FFFFFF] bg-[#191A23] px-[35px] py-[15px]' type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FomrMail