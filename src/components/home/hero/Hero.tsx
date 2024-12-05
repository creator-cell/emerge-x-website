import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import BookDemoButton from "./BookDemoButton";

const Hero = () => {
  return (
    <div className=" relative h-[100vh] overflow-hidden  shadow-customHeroShadow  ">
      <div>
        <video
          controlsList="nodownload"
          // Prevents right-click context menu
          loop
          muted
          autoPlay
          playsInline
          className="w-full hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover z-[-1]"
        >
          <source
            src="https://www.softbankrobotics.com/wp-content/uploads/asset/movie/hero_v2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video
          controlsList="nodownload"
          loop
          muted
          autoPlay
          playsInline
          className="w-full md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover z-[-1]"
        >
          <source
            src="https://www.softbankrobotics.com/wp-content/uploads/asset/movie/hero_sp_v2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" absolute left-0 bottom-0 w-full">
      <div className=" container  p-4 pb-10 w-[90%] ">
        <div>
          
          <h2 className=" text-[38px] md:text-[70px] font-[700] text-[#222720] leading-[105px]">
            Featuring over 
          </h2>
          <h2 className="text-[38px] md:text-[70px] font-[700] text-customGreen">
            50 modules
          </h2>
        </div>
        <div className=" flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-12">
          <p className=" text-[#232A20] text-xl md:text-[28px]">
            What services do we offer
          </p>{" "}
        </div>
        <div className="flex items-center justify-center mt-8">
          <BookDemoButton rightArrow={true} className=" text-2xl pl-[40px] gap-4" />
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default Hero;
