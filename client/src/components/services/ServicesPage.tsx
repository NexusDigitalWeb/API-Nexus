"use client"
import React from 'react'
import anime from "animejs";
import { Waypoint } from "react-waypoint";
import ServicesComponent from './ServicesComponent';
import GetProposal from './GetProposal';


const ServicesPage = (): React.ReactElement => {
  const handleWaypointToLeft = (target: string) => {
    anime({
      targets: target,
      left: 0,
      duration: 2000,
      easing: "easeInOutExpo",
    });
  };
  
  return (
    <div className='h-full w-full mt-10 lg:mt-16 lg:flex lg:flex-col' id='servicesPage'>
      <div className='flex flex-col lg:flex-row justify-center items-center relative left-[1000px] lg:left-[2000px] animation-waypoint lg:justify-start lg:ml-24 lg:mb-10'>
        <div className='bg-[#B9FF66] w-[60%] rounded-[10px] mt-3 tablet:p-2 lg:w-[200px]'>
          <h2 className='text-[36px] text-center font-bold lg:text-[40px]'>Servicios</h2>
        </div>

        <p className='mt-5 p-4 text-center tablet:text-lg lg:text-xl lg:mt-10 lg:mb-8'>Como agencia digital, optimizamos tu expansión en línea con soluciones profesionales.</p>
      </div>
      <Waypoint onEnter={() => handleWaypointToLeft('.animation-waypoint')}/>
      <ServicesComponent/>
      <GetProposal/>
    </div>
  )
}

export default ServicesPage