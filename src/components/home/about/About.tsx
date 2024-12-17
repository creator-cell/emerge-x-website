"use client";

import SectionHeading from "@/components/reusable/SectionHeading";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import { MotionValue, useMotionTemplate, useTransform } from "framer-motion";
import React from "react";
import { MdVerifiedUser } from "react-icons/md";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface AboutProps {
  scrollYProgress: MotionValue<number>;
}

const About = ({ scrollYProgress }: AboutProps) => {


  const router = useRouter()

  // Initial dimensions and scroll-based transformations
  const width = useTransform(scrollYProgress, [0, 0.5], [60, 100]);
  const widthValue = useMotionTemplate`${width}vw`;

  const borderRadious = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const borderRadiousValue = useMotionTemplate`${borderRadious}px`;



  const aboutCardData = [
    {
      heading: "Vision",
      discription:
        "Pioneering the future of wearable technology for a safer tomorrow.",
    },
    {
      heading: "Mission",
      discription:
        "Focused on delivering real-time health monitoring and emergency response solutions.",
    },
  ];

  return (
    <motion.div
      style={{
        width: widthValue,
        borderRadius: borderRadiousValue,
        minHeight: "60vw",
        // minWidth: "60vh",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
      }}
      className="flex justify-center lg:pl-8 items-center relative z-30 bg-[#222720] rounded-lg transition-transform duration-500 ease-in-out"
    >
      <SectionWrapper className="mt-8 md:mt-12 lg:mt-12 w-full">
        <div className="text-center flex flex-col items-center">
          <SectionHeading
            text="About us"
            className=" text-white"
          />
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-10 pb-16 w-full"
          id="about-section"
        >
          <div className=" w-full lg:w-[70%]">
            <p className="text-white text-justify leading-6 sm:leading-9 md:leading-[44px] font-[400] text-[15px] sm:text-[24px] md:text-[32px] mt-10 px-4">
              At EmergeX, we aim higher and strive harder to make workplace safety
            </p>
            <p className="text-justify text-white  opacity-45 leading-6 whitespace-pre-line  sm:leading-8  font-[400] text-xs sm:text-[18px] mt-8 px-4">
              EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting.EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting..
            </p>
            <div className="flex items-start justify-start mt-12 px-4">
              <button
                type="submit"
                onClick={() => router.push('/about-us')}
                className="px-[20px] py-[8px] text-[16px] sm:text-base bg-[#3DA229] rounded-full text-white hover:bg-[#3DA229] transition-all duration-300 ease-in-out"
              >
                Explore Now
              </button>
            </div>
          </div>
          <div className="flex items-center flex-col flex-wrap gap-[60px] mt-8 p-6">
            {aboutCardData.map((e, i) => (
              <div
                key={i}
                className={`${i % 2 === 0 ? "rotate-[355deg]" : "rotate-[5deg]"
                  } border border-solid border-[#517741] rounded-[24px] p-[16px] flex flex-col gap-6 py-8 w-full sm:w-1/2 md:w-[60%] lg:w-[40%]`}
              >
                <div className="text-[40px]">
                  <MdVerifiedUser color="#517741" />
                </div>
                <h3 className="text-[20px] font-semibold text-[#517741]">
                  {e.heading}
                </h3>
                <p className="text-base font-[400] text-[#517741]">
                  {e.discription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </motion.div>
  );
};

export default About;
