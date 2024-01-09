import React from 'react'
import GetProposalButton from '../buttons/GetProposalButton'
import anime from 'animejs';
import { Waypoint } from 'react-waypoint';

const GetProposal = () => {
    const handleWaypointToLeft = (target: string) => {
        anime({
          targets: target,
          left: 0,
          duration: 2000,
          easing: "easeInOutExpo",
        });
      };
  return (
    <div className='h-full w-full p-[15px] tablet:p-8'>
        <div className='bg-[#F3F3F3] shadow w-full h-full rounded-[20px] flex flex-col justify-center items-center p-5 relative left-[1000px] animation-button tablet:p-6'>
             <h2 className='font-medium text-[26px] tablet:text-center tablet:text-[28px]'>Dejemos que las cosas pasen.</h2>
             <p className='text-left mt-5 tablet:text-lg'>¡Contáctanos hoy mismo para descubrir cómo nuestra agencia puede ayudarte en tu negocio!</p>
             <GetProposalButton/>
        </div>
        <Waypoint onEnter={() => handleWaypointToLeft('.animation-button')}/>
    </div>
  )
}

export default GetProposal