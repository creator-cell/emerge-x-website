"use client";

// import gsap from "gsap"
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      } else {
        setSlidesPerView(2);
      }
    };

    updateSlidesPerView(); // Set initially
    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <div className="w-[90%] md:w-[70%]">
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
        modules={[EffectCoverflow, Navigation]}
        className="w-full mt-12" // Ensure it adapts to screen size
        style={{ position: "relative" }}
      >
        {SlidesData.map((e, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-[37px]  lg:rounded-[75px] overflow-hidden  w-fit  mx-auto">
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

//   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
//   let smoother =  ScrollSmoother.create({
//     content:"#smooth-content",
//     smooth:2,
//     effects:true
//   })
//   let container = document.querySelector('.container');
//   let sections = container?.querySelectorAll('.panel')  || []
//   gsap.to(sections,{
//     xPercent:-100*(sections?.length-1),
//     ease : "none",
//     scrollTrigger:{
//       trigger:".container",
//       pin:true,
//       scrub:true,
//       end:"+=3500"
//     }

//   })
//   return (
//     <>
//       <div id="smooth-wrapper">
//         <div id="smooth-content">
//           <div className="description panel blue">
//             <h1>test</h1>
//           </div>
//           <div className="container">
//             <section className="panel red">
//               1
//             </section>
//             <section className="panel red">
//               2
//             </section>
//             <section className="panel red">
//               3
//             </section>
//             <section className="panel red">
//               4
//             </section>
//             <section className="panel red">
//               5
//             </section>
//             <section className="panel red">
//               6
//             </section>

//           </div>

//         </div>

//       </div>
//     </>
//   )
// }

// export default Slider
