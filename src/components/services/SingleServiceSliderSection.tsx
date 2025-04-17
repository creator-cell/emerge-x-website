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
import { AnimatePresence, motion } from "framer-motion";
import { servicesData } from "./services";
import { cn } from "@/lib/utils";


interface Props {
  subHeading?: string;
  link?: string;
  page?: string
}


const SingleServiceSliderSection: React.FC<Props> = ({
  subHeading,
  link,
  page
}) => {
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


  const serviceData = servicesData.find((e) => e.link === link)?.subServiceDatas;
  console.log(serviceData);


  return (
    <div className={` bg-greyishblack text-white  ${page !== "home" ? "pt-[70px] md:pt-[150px]" : "pt-24"}  pb-10   rounded-t-[40px] md:rounded-t-[90px] lg:rounded-t-[110px] `}>

      <div className="mx-4 flex flex-col items-center justify-center text-center md:flex-row md:justify-between md:items-start md:text-left md:px-[50px]">
        <div className="w-full md:w-[25%]">
          <p className="text-xl md:text-[36px] md:leading-[43px]">
            {subHeading}
          </p>
        </div>

        {page !== "home" && (
          <div className="mx-4 w-full md:w-[50%]">
            <div className="mt-8 md:mt-0 flex items-center justify-center md:justify-end">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-3xl w-full font-[400] md:text-right"
                >
                  {serviceData?.[activeIndex]?.heading}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>




      <div className=" w-full flex flex-col md:flex-row md:justify-between gap-5 md:pl-[50px] ">
        <div className="w-full  space-y-24 md:w-[30%] flex flex-col items-end">
          {
            page === "home" &&
            <div className="mx-4 w-full pl-4">
              <div className=" ">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeIndex}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-3xl w-full  font-[400] text-left">
                    {serviceData?.[activeIndex]?.heading}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          }
          <div className={cn("px-4 md:px-0",
            page !== "home" && "mt-12 md:mt-32"
          )}>
            <h2 className="text-2xl font-semibold mb-6 max-w-sm">
              What&apos;s New?
            </h2>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-sm  leading-[24px] font-[400]">
                {/* EmergeX will assist you to better understand and manage workplace
              safety by integrating hazards and incident reporting with
              investigations, actions and metrics reporting. */}
                {serviceData?.[activeIndex]?.content}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <div className=" w-full md:w-[60%]">
          <SwiperComponent
            ref={swiperRef}
            modules={[Virtual]}
            breakpoints={{
              240: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            virtual
            style={{ position: "relative", borderRadius: "16px" }}
          >
            {serviceData?.map((item, i) => (
              <SwiperSlide key={i} className="rounded-[16px]">
                <div className="w-full ">
                  <div className="w-full px-4">
                    <Image
                      src={item.image}
                      alt="slideimg"
                      width={800}
                      height={500}
                      className="rounded-[16px] max-h-[450px] w-full object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex items-center gap-4 mt-5">
          {
            serviceData && serviceData.length > 0 &&
            <>
              <button
                onClick={slidePreview}
                disabled={activeIndex === 0}
                className=" w-10 h-10 rounded-full disabled:grayscale disabled:opacity-50  hover:bg-customGreen/70  bg-customGreen border text-white flex items-center justify-center"
              >
                <FaArrowLeftLong />
              </button>
              <div>
                {activeIndex + 1} /{serviceData.length}
              </div>
              <button
                disabled={activeIndex === serviceData.length - 1}
                onClick={slideNext}
                className=" w-10 h-10  disabled:grayscale disabled:opacity-50  hover:bg-customGreen/70  bg-customGreen  rounded-full border text-white flex items-center justify-center"
              >
                <FaArrowRightLong />
              </button>

            </>
          }

        </div>
      </div>
    </div>
  );
};

export default SingleServiceSliderSection;
