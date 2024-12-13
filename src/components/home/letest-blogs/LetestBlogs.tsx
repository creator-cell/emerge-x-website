"use client";

import Image from "next/image";
import React from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Define the type for the blog data
type BlogData = {
  img: string;
  title: string;
  slugid: string;
};

const LetestBlogs: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 500px)"); // For screens up to 768px

  const letestBlogData: BlogData[] = [
    { img: "/image 1.png", title: "Frontline Workers", slugid: "#" },
    { img: "/image 2.png", title: "Safety Management System", slugid: "#" },
    { img: "/image 3.png", title: "biological hazard", slugid: "#" },
    {
      img: "/image 4.png",
      title: "Difference between hazard and risk",
      slugid: "#",
    },
    { img: "/image 5.png", title: "Safety Management Tools", slugid: "#" },
    { img: "/image 6.png", title: "Critical Control Management", slugid: "#" },
  ];


  return (
    <div
      className="relative overflow-visible  h-auto p-9  "
      id="container"
    >
      <div
        id="latest-blogs-section"
        className="absolute top-[30%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-square bg-white rounded-full -z-10"
      />

      <div className="flex justify-center" id="card-container">
        <div className="bg-transparent">
          <div>
            <h2
              id="sectionHeading"
              className=" md:opacity-0 text-black text-3xl font-bold text-center translate-y-[50px] transition-all duration-300 ease-in-out"
            >
              Latest Blogs
            </h2>

            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-x-[70px] lg:gap-x-[110px] mt-8 md:mt-14 lg:mt-16">
              {letestBlogData.map((e, i) => (
                <div
                  key={e.slugid}
                  className="blog-card lg:opacity-0 lg:scale-50"
                  id="blogCard"
                >
                  <BlogCard img={e.img} title={e.title} slugid={e.slugid} />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href={"/blogs"}>
                <button className="px-[20px] py-[8px] text-base bg-[#222720] text-white rounded-full  mt-20   ">
                  View All
                </button>
              </Link>
            </div>
          </div>
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
        <h3 className="text-black text-xl md:text-xl text-start font-semibold w-[70%]">
          {title}
        </h3>
        <Link href={"/blogs/wehln"}>
          <button className="rounded-full text-sm md:text-base w-[102px] py-1.5 md:py-2 bg-customGreen text-white font-semibold">
            View more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LetestBlogs;
