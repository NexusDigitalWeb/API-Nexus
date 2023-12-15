import Image from 'next/image'
import React from 'react'
import BookingsButton from '../buttons/BookingsButton'

const HomeComponent = (): React.ReactElement => {
  return (
    <div className='w-full justify-center items-center'>
        <div className='flex flex-col h-full'>
            <h1 className='font-medium text-[35px] p-5 leading-[54.87px]'>Transformamos tu presencia digital para garantizar tu éxito.</h1>
            <Image src='/Illustration.png' alt='home-image' width={361.44} height={310} className='w-[361.44px] h-[280px] mt-5' />
            <p className='leading-6 mt-4 p-5'>En <span className='font-bold'>Nexus</span>, nos comprometemos a impulsar tu negocio digital con desarrollo web, SEO, marketing estratégico y manejo de redes sociales.</p>
            <div className='w-full h-full mt-5 flex justify-center'>
            <BookingsButton />
            </div>
        </div>
    </div>
  )
}

export default HomeComponent