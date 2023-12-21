import Image from "next/image";
import React from "react";

const Loader = (): React.ReactElement => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Image
        src="https://res.cloudinary.com/dcvvyhf8p/image/upload/v1702579471/Principal%20web%20Nexus/wojoafrdm4nmoez0mw1k.png"
        width={300}
        height={300}
        alt="spinner"
        className="animate-pulse"
      />
    </div>
  );
};

export default Loader;
