"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  console.log(slideIndex);

  const swiperRef = useRef(null);
  //   const goNext = () => {
  //     if (swiperRef.current && swiperRef.current.swiper) {
  //       swiperRef.current.swiper.slideNext();
  //     }
  //   };
  //   const goPrev = () => {
  //     if (swiperRef.current && swiperRef.current.swiper) {
  //       swiperRef.current.swiper.slidePrev();
  //     }
  //   };

  const SlidesData = [
    { img: "/image 7.png" },
    { img: "/image 8.png" },
    { img: "/image 9.png" },
    { img: "/image 10.png" },
    { img: "/image 11.png" },
  ];

  return (
    <div className=" w-[95%] md:w-[70%] lg:w-[60%] mx-auto mt-28">
      {/* <div onClick={goPrev}>
        <div />
      </div> */}
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        initialSlide={1}
        // spaceBetween= {100}

        // loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          // scale: 4,
          slideShadows: false,
        }}
        pagination={false}
        navigation={{
          nextEl: ".review-swiper-button-next",
          prevEl: ".review-swiper-button-prev",
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
      >
     
          <div>
            {SlidesData.map((e, index) => (
              <SwiperSlide>
                <div key={index} className="w-[230px] md:w-[350px] rounded-2xl overflow-hidden">
                  <Image
                    src={e.img}
                    alt="slideimages"
                    width={450}
                    height={700}
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
    
      </Swiper>
      {/* <div onClick={goNext}>
      
      </div> */}
    </div>
  );
};

export default Slider;
