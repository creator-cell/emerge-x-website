"use client";

import Image from "next/image";
import React from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";
import { blogs } from "@/components/blogs/blogData";
import CardBlog from "@/components/blogs/CardBlog";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Define the type for the blog data
type BlogData = {
  img: string;
  title: string;
};

const LetestBlogs: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 500px)"); // For screens up to 768px

  // const letestBlogData: BlogData[] = [
  //   { img: "/services/About US.jpg", title: "Frontline Workers", slugid: "#" },
  //   { img: "/services/Preparedness.jpg", title: "Safety Management System", slugid: "#" },
  //   { img: "/services/Prevention.jpg", title: "biological hazard", slugid: "#" },
  //   {
  //     img: "/services/Recovery.jpg",
  //     title: "Difference between hazard and risk",
  //     slugid: "#",
  //   },
  //   { img: "/services/Response.jpg", title: "Safety Management Tools", slugid: "#" },
  //   { img: "/services/About US.jpg", title: "Critical Control Management", slugid: "#" },
  // ];


  return (
    <div className="relative overflow-visible  h-auto p-9  " id="container">
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
              {blogs.map((e, i) => (
                <div
                  key={e.id}
                  className="blog-card lg:opacity-0 lg:scale-50 mt-8"
                  id="blogCard"
                >
                  <CardBlog 
                   key={i}
                   data={e}
                   list={false}
                   styleHeading="text-[14px] lg:text-[16px]"
                   styleBox="aspect-square max-w-[270px]"
                   styleCard="items-start max-w-[270px] mx-auto"
                   curveIconStyle="w-[40%]"
                   dateButtonStyle="w-[32%] left-2 "
                    />
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

const BlogCard: React.FC<BlogData> = ({ img, title, }) => {
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
