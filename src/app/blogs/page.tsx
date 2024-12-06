import CardBlog from "@/components/blogs/CardBlog";
import HeroBlog from "@/components/blogs/HeroBlog";
import BreadCrumb from "@/components/reusable/BreadCrumb";

import SectionWrapper from "@/components/reusable/SectionWrapper";

import React from "react";

const page = () => {
  const navTrain = [
    { link: "/", label: "Home", id: "a1" },
    { link: "/", label: "Blogs", id: "a2" },
    { link: "/blogs", label: "View All", id: "a3" },
  ];
  const trandingData = [0, 2, 3, 4];
  const viewAllBlogsData = [0, 2, 3, 4, 5, 6, 7, 8, 1];
  return (
    <div className=" min-h-screen">
      <HeroBlog />
      <SectionWrapper>
        <div className=" flex justify-between gap-5 ">
          <div className="   w-full md:w-[60%] ">
            <BreadCrumb navTrainData={navTrain} />

            <div className="w-full  mt-8 ">
              <CardBlog
                list={false}
                styleBox="rounded-[26px] aspect-video"
                styleHeading="text-[16px] md:text-[36px]"
              />
            </div>
          </div>
          <div className=" hidden md:block  w-[35%] ">
            <div className="flex items-center gap-5 text-[20px]">
              <button className=" text-customGreen">Trending</button>
              <button>Recommended</button>
            </div>
            <div className=" flex flex-col gap-4 mt-8">
              {trandingData?.map((e, i) => (
                <CardBlog
                  key={i}
                  list={true}
                  styleHeading="text-[14px] lg:text-base"
                  styleBox="aspect-square max-w-[150px]"
                />
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[0] md:gap-x-[20px] lg:gap-x-[34px] gap-y-[100px] ">
          {viewAllBlogsData?.map((e, i) => (
            <CardBlog
              key={i}
              list={false}
              styleHeading="text-[14px] lg:text-[16px]"
              styleBox="aspect-square max-w-[270px]"
              styleCard="items-start max-w-[270px] mx-auto"
            />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default page;
