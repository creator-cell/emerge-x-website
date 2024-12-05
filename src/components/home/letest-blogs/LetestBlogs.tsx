import SectionHeading from "@/components/reusable/SectionHeading";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import Image from "next/image";
import React from "react";

const LetestBlogs = () => {
  const letestBlogData = [
    { img: "/image 1.png", title: "Frontline Workers", slugid: "#" },
    { img: "/image 2.png", title: "Safety Management System", slugid: "#" },
    { img: "/image 3.png", title: "biological hazard", slugid: "#" },
    { img: "/image 4.png", title: "Difference between hazard and risk", slugid: "#" },
    { img: "/image 5.png", title: "Safety Management Tools", slugid: "#" },
    { img: "/image 6.png", title: "Critical Control Management", slugid: "#" },
  ];
  return (
    <SectionWrapper>
      <SectionHeading text="Latest Blogs" />
      <div className=" grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-x-[70px] gap-y-10 lg:gap-x-[110px]  mt-8 md:mt-20 lg:mt-28">
        {letestBlogData?.map((e, i) => (
          <div
            key={i}
            className=" text-center  flex flex-col  items-center  md:gap-4  py-8 "
          >
            <div className="w-full rounded-[20px] overflow-hidden ">
              <div><button>test</button></div>
              <div></div>
              <div></div>
              <Image
                src={e.img}
                alt="services_images"
                height={600}
                width={600}
              />
            </div>

            <div className="flex items-center justify-between  w-full  px-2 mt-7 md:mt-10 gap-4">
              <h3 className=" text-black text-xl md:text-2xl text-start  font-semibold w-[70%] ">{e.title}</h3>
              <button className=" rounded-full text-sm md:text-base w-[102px] py-1.5 md:py-2 bg-customGreen text-white font-semibold">
                View more
              </button>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default LetestBlogs;
