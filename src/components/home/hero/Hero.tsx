"use client";
import React from "react";

const Hero = () => {
  return (
    <div className=" relative  rounded-xl md:rounded-[50px]  h-[75vh] overflow-hidden mt-14 shadow-customHeroShadow mx-4 ">
      <div>
        <video
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()} // Prevents right-click context menu
          loop
          muted
          autoPlay
          playsInline
          className="w-full"
        >
          <source
            src="https://www.softbankrobotics.com/wp-content/uploads/asset/movie/hero_v2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" container absolute bottom-6 right-0 p-4 left-1/2 transform -translate-x-1/2 w-[90%]">
        <div>
          <h2 className=" text-[38px] md:text-[70px] font-[700] text-[#222720]">
            Featuring over 
          </h2>
          <h2 className="text-[38px] md:text-[70px] font-[700] text-customGreen">
            50 modules
          </h2>
        </div>
        <div className=" flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-8">
          <p className=" text-[#232A20] text-2xl">What services do we offer</p>{" "}
          <button className=" bg-customGreen text-white  rounded-2xl px-4  md:px-8 py-2 text-md">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
