"use client";
import React from "react";
import { useState } from "react";
import sendEmail from "@/utils/formMail.utils";
import Link from "next/link";
import Image from "next/image";

const FomrMail = (): React.ReactElement => {
  const [email, setEmail] = useState("");
  const [sendingEmail, setSendingEmail] = useState<boolean>(false);
  const [badRequest, setBadRequest] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSendingEmail(true);

    try {
      const response = await sendEmail(email);

      if (response.status === 0) {
        console.log("Correo electrónico enviado con éxito");
        setEmail("");
        setSendingEmail(false);
        setBadRequest(false);
      } else {
        console.error("Error al enviar el correo electrónico");
        setEmail("");
        setSendingEmail(false);
        setBadRequest(true);
      }
    } catch (error) {
      setEmail("");
      setSendingEmail(false);
      setBadRequest(true);
      setTimeout(() => {
        setBadRequest(false);
      }, 3000);
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="lg:flex lg:justify-center">
      <div
        className="flex w-full flex-col max-w-[1400px] items-center bg-[#191A23] px-[20px] lg:px-[30px] xl:px-[60px] pt-[50px] pb-[30px] gap-[37px] xl:rounded-t-[45px]"
        id="contactUs"
      >
        <div className="flex w-full flex-col lg:flex-row lg:justify-between items-center gap-3 xl:pr-[100px]">
          <Link href="/" className="h-full text-white  flex items-center">
            <p className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold">
              Nexus.
            </p>
          </Link>
          <div className="flex flex-col lg:flex-row lg:gap-5 lg:underline items-center justify-around h-[141px] text-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
            <Link href='#servicesPage'>Servicios</Link>
            <Link href='#frequentQuestions'>Preguntas frecuentes</Link>
            <Link href='#contactUs'>Contactanos</Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 w-full">
          <div className=" flex flex-col items-center gap-4 lg:items-start">
            <h4 className="flex flex-col items-center justify-center w-[115px] h-[23px] md:w-[130px] md:h-[33px] lg:w-[150px] lg:h-[40px] md:text-[20px] lg:text-[22px] rounded-[7px] bg-[#B9FF66]">
              Contactanos:
            </h4>
            <div className="text-[13px] md:text-[15px] xl:text-[18px] text-white flex flex-col items-center lg:items-start gap-[15px]">
              <p>Email: nexusdigitalcontact@gmail.com</p>
              <p>Tel: +54 3329-528349</p>
              <p className="text-[14px] md:text-[18px] xl:text-[20px] 2xl:text-[22px] text-center p-1">
                ¡Dejanos tu email para recibir mas información!
              </p>
            </div>
          </div>

          <form
            className="h-[216px] xl:h-[200px] w-[100%] xl:max-w-[650px] max-w-[500px] items-center justify-center flex gap-[22px] flex-col xl:flex-row p-[20px] bg-[#292A32] rounded-[14px]"
            onSubmit={handleSubmit}
          >
            <input
              className="rounded-[14px] text-white bg-transparent border px-[25px] py-[21px] h-[66px] w-full text-[14px] md:text-[18px]"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="rounded-[14px] h-[68px] bg-[#B9FF66] px-[35px] py-[20px] w-full xl:w-[200px] md:text-[20px]"
              type="submit"
            >
              <p className={`${sendingEmail ? "animate-pulse" : ""}`}>
                {!sendingEmail && !badRequest ? "Enviar" : ""}
                {sendingEmail && "Enviando..."}
                {badRequest ? "Email inexistente" : ""}
              </p>
            </button>
          </form>
        </div>
        <div className="w-full items-center justify-center lg:justify-start flex gap-[20px]">
          <Link
            href="/"
            className="flex items-center justify-center bg-white rounded-[50%] h-[30px] w-[30px] md:h-[40px] md:w-[40px] xl:h-[50px] xl:w-[50px] "
          >
            <Image
              src="https://res.cloudinary.com/dcvvyhf8p/image/upload/v1703111301/Principal%20web%20Nexus/linkedin_ho0ezf.png"
              alt="linkedin-image"
              width={15}
              height={15}
              className=" xl:w-[20px] xl:h-[20px] "
            />
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center bg-white rounded-[50%] h-[30px] w-[30px] md:h-[40px] md:w-[40px] xl:h-[50px] xl:w-[50px]"
          >
            <Image
              src="https://res.cloudinary.com/dcvvyhf8p/image/upload/v1703128780/Principal%20web%20Nexus/insta2_dlawkn.png"
              alt="linkedin-image"
              width={25}
              height={25}
              className="xl:w-[30px] xl:h-[30px] "
            />
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center bg-white rounded-[50%] h-[30px] w-[30px] md:h-[40px] md:w-[40px] xl:h-[50px] xl:w-[50px]"
          >
            <Image
              src="https://res.cloudinary.com/dcvvyhf8p/image/upload/v1703111300/Principal%20web%20Nexus/twitter_kvec7o.png"
              alt="linkedin-image"
              width={17.6}
              height={14.4}
              className="xl:w-[25px] xl:h-[25px] "
            />
          </Link>
        </div>
        <hr className="w-[95%] lg:w-full border" />
        <div className="w-full text-center lg:text-start text-[11px] xl:text-[18px] md:text-[15px]  text-white">
          <p>@2023 Nexus, Todos Los Derechos Reservados</p>
        </div>
      </div>
    </div>

  );
};

export default FomrMail;
