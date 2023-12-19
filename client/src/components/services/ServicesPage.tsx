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
    <div className='h-full w-full mt-10'>
      <div className='flex flex-col justify-center items-center relative left-[1000px] animation-waypoint'>
        <div className='bg-[#B9FF66] w-[60%] rounded-[10px] mt-3'>
          <h2 className='text-[36px] text-center font-bold'>Servicios</h2>
        </div>

        <p className='mt-5 p-4 text-center'>Como agencia digital, optimizamos tu expansión en línea con soluciones profesionales.</p>
      </div>
      <Waypoint onEnter={() => handleWaypointToLeft('.animation-waypoint')}/>
      <ServicesComponent/>
      <GetProposal/>
    </div>
  )
}

export default ServicesPage