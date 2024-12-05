import SectionHeading from "@/components/reusable/SectionHeading";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import React from "react";

const About = () => {
  const aboutCardData = [
    {
      heading: "Action Management",
      discription:
        "Assess your website’s performance and provide improvement recommendations.",
    },
    {
      heading: "Action Management",
      discription:
        "Assess your website’s performance and provide improvement recommendations.",
    },
    {
      heading: "Action Management",
      discription:
        "Assess your website’s performance and provide improvement recommendations.",
    },
    {
      heading: "Action Management",
      discription:
        "Assess your website’s performance and provide improvement recommendations.",
    },
    {
      heading: "Action Management",
      discription:
        "Assess your website’s performance and provide improvement recommendations.",
    },
    {
      heading: "Action Management",
      discription:
        "Assess your website’s performance and provide improvement recommendations.",
    },
  ];
  return (
    <SectionWrapper>
      <div className="text-center flex flex-col items-center">
        <SectionHeading text="About us" />

        <p className=" w-full md:w-[80%]  leading-[44px]  text-[#222720] font-[400] text-[28px] md:text-[20px] lg:text-[20px] mt-8 md:mt-20 lg:mt-28 px-4">
        EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting.EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting.EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting.
        </p>
      </div>

      <div className=" grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-x-[70px] lg:gap-x-[110px] mt-28">
        {aboutCardData?.map((e, i) => (
          <div
            key={i}
            className=" text-center  flex flex-col  items-center gap-4 border-b border-dashed border-b-black py-8"
          >
            <h3 className="text-2xl text-[#232A20] font-semibold">
              {e.heading}
            </h3>
            <p className="w-[75%]  md:w-[50%] text-base text-[#232A20] font-[400]">
              {e.discription}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
