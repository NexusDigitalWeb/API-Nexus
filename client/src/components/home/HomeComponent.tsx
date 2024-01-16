import Image from "next/image";
import React from "react";
import BookingsButton from "../buttons/BookingsButton";

const HomeComponent = (): React.ReactElement => {
  return (
    <div
      className="w-full h-full lg:h-[85vh] justify-evenly items-center lg:flex"
      id="home"
    >
      <div className="flex flex-col w-full lg:w-[50%]">
        <h1 className="font-medium text-[35px] tablet:text-[40px] p-5 leading-[54.87px] lg:text-[60px] lg:leading-[76.56px]">
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
        <div className="hidden tablet:flex w-full justify-center items-center h-full lg:hidden">
          <div className="max-w-[480px]">
            <Image
              src="https://res.cloudinary.com/dcvvyhf8p/image/upload/v1704722815/Principal%20web%20Nexus/homeimagedesktop_z3vxkc.png"
              alt="home-image"
              width={50}
              height={50}
              className="w-auto h-auto mt-5 tablet:flex"
              layout="responsive"
            />
          </div>
        </div>
        <p className="leading-6 mt-4 p-5 tablet:text-xl lg:text-[20px]">
          En <span className="font-bold">Nexus</span>, nos comprometemos a
          impulsar tu negocio digital con desarrollo web, SEO, marketing
          estratégico y manejo de redes sociales.
        </p>
        <div className="w-full h-full mt-5 flex justify-center">
          <BookingsButton />
        </div>
      </div>
      <div className="hidden lg:flex max-h-[450px]">
        <Image
          src="https://res.cloudinary.com/dcvvyhf8p/image/upload/v1704722815/Principal%20web%20Nexus/homeimagedesktop_z3vxkc.png"
          alt="home-image"
          width={50}
          height={50}
          className="w-auto h-auto mt-5 tablet:flex"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default HomeComponent;
