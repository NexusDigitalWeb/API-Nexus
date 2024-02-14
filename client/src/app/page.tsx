"use client"
import Navbar from "@/components/Navbar/Navbar";
import HomeComponent from "@/components/home/HomeComponent";
import ServicesPage from "@/components/services/ServicesPage";
import React, { useEffect, useState } from "react";
import Questions from "@/components/questions/Questions";
import FomrMail from "@/components/fomr-mail/FomrMail";
import Loader from "@/components/Loaders/Loader";
import { getServices } from "@/utils/servicesRequest";

const Home = (): React.ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAllServices = async () => {
      const allServices = await getServices();
      if (allServices) setIsLoading(false);
    };
    getAllServices();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <HomeComponent />
          <ServicesPage />
          <Questions />
          <FomrMail />
        </>
      )}
    </>
  );
};

export default Home;
