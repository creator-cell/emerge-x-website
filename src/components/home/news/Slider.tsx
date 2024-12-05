"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const Slider = () => {
  const SlidesData = [
    { img: "/image 7.png" },
    { img: "/image 8.png" },
    { img: "/image 9.png" },
    { img: "/image 10.png" },
    { img: "/image 11.png" },
    { img: "/image 10.png" },
    { img: "/image 9.png" },
    { img: "/image 7.png" },
  ];


  const [slidesPerView, setSlidesPerView] = useState(4);

  // Update slidesPerView based on screen width
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(4); // Desktop/Tablet
      } else if (window.innerWidth >= 400) {
        setSlidesPerView(3); // Mobile
      }else{
        setSlidesPerView(2)
      }
    };

    updateSlidesPerView(); // Set initially
    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <div className="flex w-full justify-center  mx-auto  mt-10 md:mt-20 ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView} 

        initialSlide={1}
        centeredSlidesBounds={true}
        spaceBetween={0} // Adjust to add spacing between slides
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={false}
        navigation={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="w-full " // Ensure it adapts to screen size
      >
        {SlidesData.map((e, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[200px] md:w-[350px] rounded-[75px] overflow-hidden">
              <Image src={e.img} alt="slideimages" width={450} height={720} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
