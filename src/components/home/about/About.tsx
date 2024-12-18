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
          <div className=" w-full ">
            <p className="text-white text-justify leading-6 sm:leading-9 md:leading-[44px] font-[400] text-[15px] sm:text-[24px] md:text-[32px] mt-10 px-4">
              Emerge-X: Your Partner in quick,
              effective emergency solutions

            </p>
            <p className="text-justify text-white  opacity-45 leading-6 whitespace-pre-line  sm:leading-8  font-[400] text-xs sm:text-[18px] mt-8 px-4">
              Welcome to Emerge-X, a seasoned leader in Emergency Management Solutions with 15 years of expertise. Our innovative software platform is tailored to enhance organizational safety and resilience through the four pillars of the Emergency Management Cycle: Mitigation/Prevention, Preparedness, Response, and Recovery.

              Proactive risk reduction is paramount at Emerge-X. Leveraging cutting-edge technology, such as AI-driven monitoring and health management tools, we identify and address potential hazards preemptively to safeguard your workforce effectively.

              Preparedness is key to efficient emergency management. Our diverse training solutions, complemented by real-time tracking, ensure your team is well-equipped to handle any crisis. Emergency drills further refine your organization's readiness.

              During crises, our response solutions, supported by AI and automation, provide instant access to critical information for swift decision-making. Our recovery services focus on learning and improvement, offering automated incident reporting and root cause analysis to enhance future preparedness.

              Emerge-X is devoted to equipping organizations with the necessary tools for confident emergency navigation. We strive to instill a culture of safety, resilience, and continuous enhancement in emergency management.

              Come join us in shaping a safer tomorrow.

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
