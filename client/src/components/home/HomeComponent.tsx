import Image from "next/image";
import React from "react";
import BookingsButton from "../buttons/BookingsButton";

const HomeComponent = (): React.ReactElement => {
  return (
    <div className="w-full justify-center items-center" id="home">
      <div className="flex flex-col h-full">
        <h1 className="font-medium text-[35px] tablet:text-[40px] p-5 leading-[54.87px]">
          Transformamos tu presencia digital para garantizar tu éxito.
        </h1>
        <Image
          src="https://res.cloudinary.com/dcvvyhf8p/image/upload/v1702579471/Principal%20web%20Nexus/jkrdw4gpegwkfpdge28w.png"
          alt="home-image"
          width={50}
          height={50}
          className="w-auto h-auto mt-5 tablet:hidden"
          layout="responsive"
        />
        <Image
          src="https://res.cloudinary.com/dcvvyhf8p/image/upload/v1704722815/Principal%20web%20Nexus/homeimagedesktop_z3vxkc.png"
          alt="home-image"
          width={50}
          height={50}
          className="w-auto h-auto mt-5 hidden tablet:flex"
          layout="responsive"
        />
        <p className="leading-6 mt-4 p-5 tablet:text-xl">
          En <span className="font-bold">Nexus</span>, nos comprometemos a
          impulsar tu negocio digital con desarrollo web, SEO, marketing
          estratégico y manejo de redes sociales.
        </p>
        <div className="w-full h-full mt-5 flex justify-center">
          <BookingsButton />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
