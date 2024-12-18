// import React, { useEffect, useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./VerticalSlider.css";

// interface VerticalSliderTypes {
//   activeIndex: number;
//   data: {
//     id: number
//     heading: string
//     content: string
//     image: string
//   }[];
// }


// const VerticalSlider: React.FC<VerticalSliderTypes> = ({ activeIndex, data }) => {

//   const swiperRefVertical = useRef<any>(null);

//   useEffect(() => {
//     swiperRefVertical.current.swiper.slideTo(2);
//   }, [activeIndex]);
//   return (
//     <>
//       <Swiper
//         ref={swiperRefVertical}
//         direction={"vertical"}
//         slidesPerView={3}
//         className="mySwiper"
//       >
//         {data?.map((e, i) => (
//           <SwiperSlide key={i}>
//             {" "}
//             <h3 className=" text-[24px]"> {e.heading}</h3>
//           </SwiperSlide>
//         ))}
//         <div className=" absolute bottom-0 w-full bg-gradient-to-t from-greyishblack to-transparent z-40  h-[75%]"></div>
//       </Swiper>
//     </>
//   );
// };

// export default VerticalSlider;


import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./VerticalSlider.css";

interface VerticalSliderTypes {
  activeIndex: number;
  data: {
    id: number;
    heading: string;
    content: string;
    image: string;
  }[];
}

const VerticalSlider: React.FC<VerticalSliderTypes> = ({ activeIndex, data }) => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    // Check if swiper instance is initialized and activeIndex has changed
    if (swiperInstance && typeof activeIndex === "number") {
      swiperInstance.slideTo(1); // Navigate to the correct slide
    }
  }, [activeIndex, swiperInstance]);

  return (
    <>
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)} // Get swiper instance
        direction={"vertical"}
        slidesPerView={3}
        className="mySwiper"
      >
        {data?.map((e, i) => (
          <SwiperSlide key={e.id}>
            <h3 className="text-[24px]">{e.heading}</h3>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-greyishblack to-transparent z-40 h-[75%]"></div>
      </Swiper>
    </>
  );
};

export default VerticalSlider;
