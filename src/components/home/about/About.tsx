"use client";

import SectionHeading from "@/components/reusable/SectionHeading";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import React, { useState, useEffect } from "react";
import { MdVerifiedUser } from "react-icons/md";

const About = () => {
  const [mainwidth, setMainWidth] = useState<any>(60); // Initial width
  const [borderRadius, setBorderRadius] = useState<any>(50); // Initial border-radius for circular effect

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
  ];

  // Handle the scroll event to adjust width and border-radius
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calculate visibility of the section
        const visibility = Math.min(1, (windowHeight - sectionTop) / sectionHeight);

        let newWidth = mainwidth; // Default width
        let newRadius = borderRadius; // Default radius

        // When section is in view, start turning it circular
        if (visibility >= 0.1) {
          newWidth = 100; // Set to full width
          newRadius = "50%"; // Make the section a circle
        } else if (visibility > 0) {
          // Gradually transition from circle to rounded rectangle as you scroll
          newWidth = 50 + visibility * 50;
          newRadius = "20%"; // Rounded corners when it's not fully visible
        } else {
          // Reset to initial state before scrolling
          newWidth = 60;
          newRadius = "50%";
        }

        // Update the state to adjust the shape dynamically
        setMainWidth(newWidth);
        setBorderRadius(newRadius);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mainwidth, borderRadius]); // Ensure the effect updates properly when mainwidth or borderRadius change

  return (
    <div className="flex justify-center">
      <div
        className="bg-[#222720] rounded-tl-[280px] rounded-tr-[280px] md:mt-32"
        style={{
          width: `${mainwidth}%`,
          borderTopLeftRadius: `${borderRadius}`,
          borderTopRightRadius: `${borderRadius}`,
          transition: "width 0.6s ease-out, border-radius 0.6s ease-out", // Smooth transition
        }}
      >
        <SectionWrapper className="pt-16">
          <div className="text-center flex flex-col items-center rounded-tl-3xl">
            <SectionHeading
              text="About us"
              className={` ${mainwidth <= 78 ? "mt-24" : "mt-20"} text-white`}
            />
          </div>

          <div
            className={`${
              mainwidth <= 78 && "pt-20"
            } grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 pb-16`}
            id="about-section"
          >
            <div>
              <p className="text-white text-justify w-full leading-[44px] font-[400] text-[32px] mt-10 md:mt-20 lg:mt-20 px-4">
                At EmergeX, we aim higher and strive harder to make workplace
                safety
              </p>
              <p className="text-justify text-white w-full leading-[44px] font-[400] text-[18px] mt-8 md:mt-20 lg:mt-16 px-4">
                EmergeX will assist you to better understand and manage
                workplace safety by integrating hazards and incident reporting
                with investigations, actions and metrics reporting. EmergeX will
                assist you to better understand and manage workplace safety by
                integrating hazards and incident reporting with investigations,
                actions and metrics reporting.
              </p>
              <div className="flex items-start justify-start mt-20 px-4">
                <button
                  type="submit"
                  className="px-[20px] py-[8px] text-[16px] sm:text-base bg-[#3DA229] rounded-full text-white hover:bg-[#3DA229] transition-all duration-300 ease-in-out"
                >
                  Explore Now
                </button>
              </div>
            </div>

            <div className="flex items-center flex-col flex-wrap gap-[60px] gap-x-[70px] lg:gap-x-[110px] mt-8">
              {aboutCardData?.map((e, i) => (
                <div
                  key={i}
                  className={`${
                    i % 2 === 0 ? "rotate-[355deg]" : "rotate-[5deg]"
                  } border border-solid border-[#517741] rounded-[24px] p-[16px] flex flex-col gap-6 py-8 w-full sm:w-1/2 lg:w-1/3`}
                >
                  <div className="text-[40px]">
                    <MdVerifiedUser color="#517741" />
                  </div>
                  <h3 className="text-[20px] text-start  font-semibold text-[#517741]">
                    {e.heading}
                  </h3>
                  <p className="text-justify text-base  font-[400] text-[#517741]">
                    {e.discription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default About;
