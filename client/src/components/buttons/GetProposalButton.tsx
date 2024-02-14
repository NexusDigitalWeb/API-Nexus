import Link from "next/link";
import React from "react";

const GetProposalButton = () => {
  return (
    <Link
      href="#contactUs"
      className="w-[80%] h-[68px] mt-5 flex items-center justify-center rounded-[14px] text-center text-white bg-[#191A23] tablet:mt-3 tablet:text-lg tablet:w-[50%]"
    >
      Obtén más información
    </Link>
  );
};

export default GetProposalButton;
