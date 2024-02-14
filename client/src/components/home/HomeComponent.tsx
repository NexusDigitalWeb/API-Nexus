import Image from "next/image";
import React from "react";
import GetProposalButton from "../buttons/GetProposalButton";
import WhatsappButton from "../buttons/WhatsappButton";

const newVisit = async () => {
  try {
      const response = await fetch('https://nexusdigitalservices.fly.dev/')
      const json = await response.json();

      return json
  } catch (error) {
      console.error(error);
  }
};
newVisit();

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
          <GetProposalButton />
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
      <div className="fixed bottom-[15px] right-[15px] z-10 lg:bottom-[20px] lg:right-[20px] flex items-center gap-5">
      <WhatsappButton/>
      </div>
    </div>
  );
};

export default HomeComponent;
