"use client";
import React, { useEffect, useState } from "react";

const HeroBlog = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`h-screen overflow-hidden bg-hero-blog bg-cover bg-center rounded-b-[120px] transition-all duration-500 ${
        isScrolled ? " rounded-b-[50px] md:rounded-b-[120px]" : "rounded-b-[0px]"
      } `}
    >
      <div className=" container  h-full  relative ">
        <div className=" w-full absolute bottom-[30%]  md:bottom-28 left-0 flex justify-center md:justify-end p-4">
          <div className=" text-center md:text-right text-white flex flex-col gap-[44px] items-center  md:items-end ">
            <h2 className=" text-4xl sm:text-5xl md:text-[58px]  font-[700] ">
              What's New?
            </h2>
            <p className="  font-[400] text-xl w-[70%]  md:leading-10">
              Stay up-to-date with Everyting about EmergeX related.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlog;
