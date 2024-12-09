"use client";
import React, { useEffect, useRef, useState } from "react";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Virtual, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import VerticalSlider from "./VerticalSlider";

const SingleServiceSliderSection: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

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

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePreview = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className=" bg-greyishblack text-white pt-[70px] md:pt-[150px] pb-10   rounded-t-[40px] md:rounded-t-[90px] lg:rounded-t-[110px]">
      <div className=" mx-4 flex flex-col  md:flex-row md:justify-between  md:px-[50px]">
        <div className="w-full md:w-[25%]">
          <p className=" text-xl md:text-[36px] md:leading-[43px]">
            At EmergeX, we aim higher and strive harder to make workplace safety
          </p>
        </div>

        <div className="mx-4 w-full md:w-[30%]">
          <div className=" h-[300px]">
            <VerticalSlider activeIndex={activeIndex} />
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-col md:flex-row md:justify-between gap-5 md:pl-[50px] ">
        <div className="w-full  md:w-[30%] flex items-end">
          <div>
            <h2 className="text-2xl font-semibold mb-6 max-w-sm">
              What&apos;s New?
            </h2>
            <p className="text-sm  leading-[24px] font-[400]">
              EmergeX will assist you to better understand and manage workplace
              safety by integrating hazards and incident reporting with
              investigations, actions and metrics reporting.
            </p>
          </div>
        </div>
        <div className=" w-full md:w-[60%]">
          <SwiperComponent
            ref={swiperRef}
            modules={[Virtual, Autoplay]}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              240: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
            }}
            virtual
            style={{ position: "relative" }}
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <SwiperSlide key={index}>
                <div className="w-full ">
                  <div className="w-full px-4">
                    <Image
                      src={"/image-blogs-details.png"}
                      alt="slideimg"
                      width={800}
                      height={400}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-[40%]"></div>

        <div className="flex items-center gap-4 mt-5 w-[55%]">
          <button
            onClick={slideNext}
            className=" w-10 h-10  hover:bg-customGreen rounded-full border text-white flex items-center justify-center"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={slidePreview}
            className=" w-10 h-10 rounded-full  hover:bg-customGreen border text-white flex items-center justify-center"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceSliderSection;
