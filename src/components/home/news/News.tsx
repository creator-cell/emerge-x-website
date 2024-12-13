import SectionHeading from "@/components/reusable/SectionHeading";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import React from "react";
import Slider from "./Slider";
import Link from "next/link";

const News = () => {
  return (
    <div className="bg-white text-greyishblack flex flex-col items-center justify-center" id="news">
      <SectionHeading text="News" />
      <Slider />
      <div className="text-center md:text-[26px] text-[20px] mt-10">
        Work Strategy
      </div>
      <div className="text-center">
        <Link href={'/news'}>
          <button className="px-[20px] py-[8px] text-base bg-[#222720] text-white rounded-full  mt-10   ">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default News;
