import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./VerticalSlider.css";

interface VerticalSliderTypes {
  activeIndex: number;
}
const VerticalSlider: React.FC<VerticalSliderTypes> = ({ activeIndex }) => {
  const data = [
    { line: "Prevention" },
    { line: "Preparedness" },
    { line: "Recovery" },
    { line: "Response" },
    { line: "Prevention" }, 
    { line: "Preparedness" },
    { line: "Recovery" },
    { line: "Response" },
  ];
  const swiperRefVertical = useRef<any>(null);

  useEffect(() => {
    swiperRefVertical.current.swiper.slideTo(activeIndex);
  }, [activeIndex]);
  return (
    <>
      <Swiper
        ref={swiperRefVertical}
        direction={"vertical"}
        slidesPerView={5}
        className="mySwiper"
      >
        {data?.map((e, i) => (
          <SwiperSlide key={i}>
            {" "}
            <h3 className=" text-[24px]"> {e.line}</h3>
          </SwiperSlide>
        ))}
        <div className=" absolute bottom-0 w-full bg-gradient-to-t from-greyishblack to-transparent z-40  h-[75%]"></div>
      </Swiper>
    </>
  );
};

export default VerticalSlider;
