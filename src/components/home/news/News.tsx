import SectionHeading from "@/components/reusable/SectionHeading";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import React from "react";
import Slider from "./Slider";

const News = () => {
  return (
    <div className="bg-white">

      <SectionWrapper>
        <SectionHeading text="News" className="pt-16"/>
        <Slider />
        <div className="text-center md:text-[26px] text-[20px] mt-5 xl:ml-0 lg:ml-20 md:ml-28 ml-10">Work Strategy</div>
        <div className="text-center">
          <button
            className="px-[20px] py-[8px] text-[16px] bg-[#222720] text-white rounded-full text-black mt-10 xl:ml-0 lg:ml-20 md:ml-28 ml-10"
          >
            View All
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default News;
