"use client";

import React, { useRef, useState } from "react";
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
  const [slideIndex, setSlideIndex] = useState(0);
  console.log(slideIndex);

  const swiperRef = useRef(null);

  const SlidesData = [
    { img: "/image 7.png" },
    { img: "/image 8.png" },
    { img: "/image 9.png" },
    { img: "/image 10.png" },
    { img: "/image 11.png" },
  ];

  return (
    <div className="flex justify-center mx-auto mt-20 md:mt-28">
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Adjust to suit your needs
        initialSlide={1}
        spaceBetween={30} // Adjust to add spacing between slides
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={false}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
        className="w-full max-w-[90%]" // Ensure it adapts to screen size
      >
        {SlidesData.map((e, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[230px] md:w-[350px] rounded-2xl overflow-hidden">
              <Image src={e.img} alt="slideimages" width={450} height={700} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
