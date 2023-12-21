"use client";
import { getServices } from "@/utils/servicesRequest";
import anime from "animejs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

export interface Services {
  _id: string;
  title: string;
  description: string;
  photo: string;
}

const handleWaypointToRight = (target: string) => {
    anime({
      targets: target,
      left: 0,
      duration: 2000,
      easing: "easeInOutExpo",
    });
  };

const ServicesComponent = () => {
  const [services, setServices] = useState<Services[]>();

  useEffect(() => {
    const getAllServices = async () => {
      const servicesRequest = await getServices();
      setServices(servicesRequest);
    };
    getAllServices();
  }, []);

  return (
    <div className="h-full w-full p-2">
      {services?.map((item) => (
        <div
          key={item._id}
          className={`flex flex-col justify-center items-start p-7 h-full w-full mb-10 border-[#191A23] border-b-4 border rounded-[20px] relative right-[1000px] window-animation-${item.title.replace(/\s/g, "")}`}
        >
            <Waypoint onEnter={() => handleWaypointToRight(`.window-animation-${item.title.replace(/\s/g, "")}`)}/>
          <h3 className="font-bold text-[26px] text-center bg-[#B9FF66] rounded-[20px] border-[#191A23] border-b-2 mb-5">
            {item.title}
          </h3>
          <div className="flex justify-between items-end w-full">
            <Link href={`/services/${item._id}`}>
              <Image
                src={
                  "https://res.cloudinary.com/dcvvyhf8p/image/upload/v1702912190/Principal%20web%20Nexus/zy49eamfjbcelqqvchqr.png"
                }
                alt="arrow-learn-more"
                width={200}
                height={200}
                className="w-auto h-auto"
              />
            </Link>
            <Image
              src={item.photo}
              width={100}
              height={100}
              alt={item.photo}
              className="w-auto h-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesComponent;
