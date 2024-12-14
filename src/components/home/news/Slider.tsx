// import React, { useState, useEffect } from "react";
// import "./Slider.css";

// const Slider = () => {
//   const SlidesData = [
//     { img: "/services/About US.jpg" },
//     { img: "/services/Recovery.jpg" },
//     { img: "/services/Prevention.jpg" },
//     { img: "/services/Preparedness.jpg" },
//     { img: "/services/Response.jpg" },
//     { img: "/services/About US.jpg" },
//     { img: "/services/Recovery.jpg" },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   // Auto-play logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % SlidesData.length);
//     }, 3000); // Change slides every 3 seconds

//     return () => clearInterval(interval); // Cleanup the interval on component unmount
//   }, [SlidesData.length]);

//   const handleMouseEnter = (index:any) => {
//     setActiveIndex(index); // Bring hovered image to the center
//   };

//   return (
//     <div className="slider-container">
//       <div className="slider">
//         {SlidesData.map((slide, index) => {
//           const isActive = index === activeIndex;
//           const isPrev2 =
//             index === (activeIndex - 2 + SlidesData.length) % SlidesData.length;
//           const isPrev1 =
//             index === (activeIndex - 1 + SlidesData.length) % SlidesData.length;
//           const isNext1 = index === (activeIndex + 1) % SlidesData.length;
//           const isNext2 = index === (activeIndex + 2) % SlidesData.length;

//           return (
//             <div
//               key={index}
//               className={`slide ${
//                 isActive
//                   ? "active"
//                   : isPrev2
//                   ? "prev2"
//                   : isPrev1
//                   ? "prev1"
//                   : isNext1
//                   ? "next1"
//                   : isNext2
//                   ? "next2"
//                   : ""
//               }`}
//               onMouseEnter={() => handleMouseEnter(index)}
//             >
//               <img src={slide.img} alt={`Slide ${index}`} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React, { useEffect, useRef, useState } from "react";
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
    { img: "/services/About US.jpg" },
    { img: "/services/Recovery.jpg" },
    { img: "/services/Prevention.jpg" },
    { img: "/services/Preparedness.jpg" },
    { img: "/services/Response.jpg" },
    { img: "/services/About US.jpg" },
    { img: "/services/Recovery.jpg" },
  ];
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

    useEffect(()=>{
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext();
      }
    },[])
  
    // const goToSlide = (index: number) => {
    //   if (swiperRef.current) {
    //     swiperRef.current.swiper.slideTo(index);
    //   }
    // };

    // const slideNext = () => {
    //   if (swiperRef.current) {
    //     swiperRef.current.swiper.slideNext();
    //   }
    // };
  return (
    <div className="md:px-10 w-full flex items-center justify-center relative">
      {/* <div className="w-[20%] h-full bg-white absolute z-30 top-0 left-0 border border-red-600"></div> */}
      {/* <div className="w-[20%] h-full bg-white absolute z-30 right-0 top-0 border border-red-600"></div> */}
      <Swiper
        effect={"coverflow"}
        ref={swiperRef}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        centeredSlidesBounds={true}
        spaceBetween={0}
        loop={true}
        autoplay
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 350,
          modifier: 2.5,
          slideShadows: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={false}
        navigation={false}
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: false,
        //   stopOnLastSlide: false,
        //   waitForTransition: true,
        // }}
      
        modules={[EffectCoverflow, Navigation,Autoplay]}
        className="w-full mt-12" // Ensure it adapts to screen size
        style={{
          position: "relative",

          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {SlidesData.map((e, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-[10px]  lg:rounded-[15px] overflow-hidden  w-fit  h-fit mx-auto">
              <div>
                <Image src={e.img} alt="slideimages" width={450} height={720} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
