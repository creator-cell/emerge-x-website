'use client'

import SectionHeading from "@/components/reusable/SectionHeading";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Define the type for the blog data
type BlogData = {
  img: string;
  title: string;
  slugid: string;
};

const LetestBlogs: React.FC = () => {
  const [width, setWidth] = useState<string>("40%");  // Initial width
  const [borderRadius, setBorderRadius] = useState<string>("50%"); // Initial border-radius

  const letestBlogData: BlogData[] = [
    { img: "/image 1.png", title: "Frontline Workers", slugid: "#" },
    { img: "/image 2.png", title: "Safety Management System", slugid: "#" },
    { img: "/image 3.png", title: "biological hazard", slugid: "#" },
    { img: "/image 4.png", title: "Difference between hazard and risk", slugid: "#" },
    { img: "/image 5.png", title: "Safety Management Tools", slugid: "#" },
    { img: "/image 6.png", title: "Critical Control Management", slugid: "#" },
  ];

  // Handle the scroll event to adjust width and border-radius
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 900) {
        setWidth("100%");
        setBorderRadius("0%");
        return;
      }
      const section = document.getElementById("latest-blogs-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calculate the visibility of the section
        const visibility = Math.min(1, (windowHeight - sectionTop) / sectionHeight);
        console.log(visibility);

        let newWidth;
        let newRadius;

        if (visibility >= 0.4580812267690844) {
          // When visibility is above 45%, set width to 100% and border-radius to 0
          newWidth = 100;
          console.log(visibility * 50)
          newRadius = Math.max(0, 10 - visibility * 50)
          if (visibility >= 0.530812267690844) {
            newRadius = 0;
          }
        } else if (visibility >= 0.33403659666684005 && visibility <= 0.44) {
          console.log('call1');
          newWidth = 96; // Width starts at 20%, increases to 100%
          newRadius = Math.max(0, 70 - visibility * 50);
        } else if (visibility >= 0.28403659666684005) {
          newWidth = 75;
        }else if (visibility >= 0.21403659666684005) {
          newWidth = 60;
        }else if (visibility >= 0.16403659666684005) {
          newWidth = 62;
        }else if (visibility >= 0.12403659666684005) {
          newWidth = 50;
        }


        else {
          // On scrolling up, keep increasing the width and decreasing the radius
          newWidth = 30 + visibility * 80; // Width starts at 20%, increases to 100%
          newRadius = Math.max(0, 70 - visibility * 50); // Border-radius starts at 50%, decreases to 0%
        }

        // Adjust width and border-radius based on section visibility
        setWidth(`${newWidth}%`);
        setBorderRadius(`${newRadius}%`);
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center ">
      <div
        className="bg-white border-transparent"
        id="latest-blogs-section"
        style={{
          width: width,
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
          transition: "width 0.6s ease-out, border-radius 0.6s ease-out", // Smoother and slower transition
        }}
      >
        <SectionWrapper>
          <SectionHeading text="Latest Blogs" className="text-black mt-64" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[70px] gap-y-10 lg:gap-x-[110px] mt-8 md:mt-14 lg:mt-16">
            {letestBlogData.map((e, i) => (
              <div key={i} className="text-center flex flex-col items-center md:gap-4 py-8">
                <div className="w-full rounded-[20px] overflow-hidden">
                  <Image
                    src={e.img}
                    alt="services_images"
                    height={600}
                    width={600}
                  />
                </div>

                <div className="flex items-center justify-between w-full px-2 mt-7 md:mt-10 gap-4">
                  <h3 className="text-black text-xl md:text-2xl text-start font-semibold w-[70%]">
                    {e.title}
                  </h3>
                  <button className="rounded-full text-sm md:text-base w-[102px] py-1.5 md:py-2 bg-customGreen text-white font-semibold">
                    View more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default LetestBlogs;
