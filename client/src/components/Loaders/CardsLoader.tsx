import React, { useEffect, useRef } from "react";
import anime from "animejs";

const CardsLoader = (): React.ReactElement => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = anime({
      targets: containerRef.current,
      left: 0,
      duration: 2000,
      easing: "easeInOutExpo",
    });

    return () => {
      animation.pause();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center items-center p-7 h-full w-full mb-10 border-[#191A23] border-b-4 border rounded-[20px] relative right-[1000px] overflow-hidden"
    >
      <p className="text-xl animate-pulse">Loading service...</p>
    </div>
  );
};

export default CardsLoader;
