"use client";

import React, { useEffect, useRef, useState } from "react";
import { Virtual, Pagination } from "swiper/modules";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";

import Image from "next/image";

const sliderData = [
  {
    image: "/services-slider1.png",
    text: "Mitigation/ Prevention",
  },
  {
    image: "/services-slider2.png",
    text: "Preparedness",
  },
  {
    image: "/services-slider1.png",
    text: "Response",
  },
  {
    image: "/services-slider2.png",
    text: "Recovery",
  },
  {
    image: "/services-slider1.png",
    text: "Slide 5 Text",
  },
  {
    image: "/services-slider2.png",
    text: "Slide 6 Text",
  },
];

const AllServiceSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const swiperRefText = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeIndexText, setActiveText] = useState<number>(0);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    if (swiperInstance) {
      const updateIndex = () => setActiveIndex(swiperInstance.activeIndex);

      swiperInstance.on("slideChange", updateIndex);
      updateIndex(); // Set initial active index

      return () => {
        swiperInstance.off("slideChange", updateIndex);
      };
    }
  }, []);
  useEffect(() => {
    const swiperInstance = swiperRefText.current?.swiper;

    if (swiperInstance) {
      const updateIndex = () => setActiveText(swiperInstance.activeIndexText);

      swiperInstance.on("slideChange", updateIndex);
      updateIndex(); // Set initial active index

      return () => {
        swiperInstance.off("slideChange", updateIndex);
      };
    }
  }, []);

  useEffect(() => {
    goToSlideText(activeIndex);
  }, [activeIndex]);

  const goToSlideText = (index: number) => {
    if (swiperRefText.current) {
      swiperRefText.current.swiper.slideTo(index);
    }
  };

  //   const goToSlide = (index: number) => {
  //     if (swiperRef.current) {
  //       swiperRef.current.swiper.slideTo(index);
  //     }
  //   };
  return (
    <div className="w-full flex md:items-end md:py-10 gap-20 md:gap-5 flex-col md:flex-row md:justify-between ">
      <div className="w-full md:w-[48%] flex  items-center justify-center gap-4  md:pb-10 ">
        <div className="w-[75%] flex flex-col gap-4 md:gap-20 ">
          <div className="w-full">
            <div className="w-full md:p-4 ">
              <SwiperComponent
                ref={swiperRefText}
                modules={[Virtual, Autoplay]}
                autoplay={{ delay: 9000 }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                  },
                }}
                virtual
                style={{ position: "relative" }}
              >
                {sliderData?.map((e, i) => (
                  <SwiperSlide key={i}>
                    <div className=" md:py-3 ">
                      <p
                        className="  text-base md:text-lg lg:text-[60px] text-white md:mt-10  "
                        style={{ lineHeight: "70px" }}
                      >
                        Mitigation / Prevention
                      </p>
                      {/* text-white text-xl md:text-xl lg:text-[60px]  */}
                      <p className=" text-base md:text-lg lg:text-xl text-white md:mt-10 ">
                        EmergeX will assist you to better understand and manage
                        workplace safety by integrating hazards and incident
                        reporting with investigations, actions and metrics
                        reporting.
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </SwiperComponent>
            </div>
          </div>

          <button className=" bg-customGreen px-4 py-1.5 md:px-6 md:py-2 text-white w-fit rounded-[60px] text-base md:text-2xl">
            Explore Now
          </button>
        </div>
      </div>
      <div className="w-full md:w-[50%] ">
        <div className="w-full flex items-end mx-auto   ">
          <SwiperComponent
            ref={swiperRef}
            modules={[Virtual, Autoplay]}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              768: {
                slidesPerView: 2.3,
                spaceBetween: 2,
              },
              1024: {
                slidesPerView: 2.3,
                spaceBetween: 2,
              },
            }}
            virtual
          >
            {sliderData?.map((e, i) => (
              <SwiperSlide key={i}>
                <div className="md:h-[420px] flex items-end  ">
                  <div
                    className={`  rounded-2xl overflow-hidden transition-all  ${
                      activeIndex === i
                        ? "w-full md:w-[270px] "
                        : "w-full md:w-[240px]"
                    }`}
                  >
                    <Image src={e.image} alt="aa" height={800} width={400} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </div>
    </div>
  );
};

export default AllServiceSlider;
