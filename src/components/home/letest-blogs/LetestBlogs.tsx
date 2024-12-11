'use client';

import SectionHeading from "@/components/reusable/SectionHeading";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import Image from "next/image";
import React from "react";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Define the type for the blog data
type BlogData = {
  img: string;
  title: string;
  slugid: string;
};

const LetestBlogs: React.FC = () => {
  useGSAP(() => {
    const circle = gsap.timeline({
      scrollTrigger: {
        trigger: "#container",
        start: "top 60%",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
    });

    const card = gsap.timeline({
      scrollTrigger: {
        trigger: "#latest-blogs-section",
        start: "top 70%",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
    });

    circle.to("#latest-blogs-section", {
      width: "200vw",
      ease: "power1.out",
    });

    card.from(".blog-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power1.out",
    });
  }, []);

  const letestBlogData: BlogData[] = [
    { img: "/image 1.png", title: "Frontline Workers", slugid: "#" },
    { img: "/image 2.png", title: "Safety Management System", slugid: "#" },
    { img: "/image 3.png", title: "biological hazard", slugid: "#" },
    { img: "/image 4.png", title: "Difference between hazard and risk", slugid: "#" },
    { img: "/image 5.png", title: "Safety Management Tools", slugid: "#" },
    { img: "/image 6.png", title: "Critical Control Management", slugid: "#" },
  ];

  return (
    <div className="relative overflow-hidden h-[200vh]" id="container">
      <div
        id="latest-blogs-section"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-square bg-black rounded-full -z-10"
      />

      <div className="flex justify-center">
        <div className="bg-transparent">
          <SectionWrapper>
            <SectionHeading text="Latest Blogs" className="text-white mt-48" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[70px] gap-y-10 lg:gap-x-[110px] mt-8 md:mt-14 lg:mt-16">
              {letestBlogData.map((e, i) => (
                <div key={e.slugid} className="blog-card">
                  <BlogCard img={e.img} title={e.title} slugid={e.slugid} />
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
};

const BlogCard: React.FC<BlogData> = ({ img, title, slugid }) => {
  return (
    <div className="text-center flex flex-col items-center md:gap-4 py-8">
      <div className="w-full rounded-[20px] overflow-hidden">
        <Image src={img} alt="services_images" height={600} width={600} />
      </div>
      <div className="flex items-center justify-between w-full px-2 mt-7 md:mt-10 gap-4">
        <h3 className="text-black text-xl md:text-2xl text-start font-semibold w-[70%]">
          {title}
        </h3>
        <button className="rounded-full text-sm md:text-base w-[102px] py-1.5 md:py-2 bg-customGreen text-white font-semibold">
          View more
        </button>
      </div>
    </div>
  );
};

export default LetestBlogs;
