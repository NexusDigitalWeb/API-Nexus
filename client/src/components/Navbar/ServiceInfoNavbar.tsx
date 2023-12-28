import Link from "next/link";
import Image from "next/image";
import React from "react";

const ServiceInfoNavbar = () => {
  return (
    <div className="h-[100px] w-[100%]">
      <div className="flex justify-between items-center pr-4 pl-4 h-full">
        <Link href="/" className="h-full flex items-center">
            <Image src='https://res.cloudinary.com/dcvvyhf8p/image/upload/v1702912190/Principal%20web%20Nexus/zy49eamfjbcelqqvchqr.png' alt="go-back-icon" width={30} height={30} className="rotate-[210deg]"/>
        </Link>

        <p className="text-2xl font-extrabold">Nexus.</p>
      </div>
    </div>
  );
};

export default ServiceInfoNavbar;
