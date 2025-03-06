"use client";

import Contact from "@/components/home/contactus/Contact";
import LetestBlogs from "@/components/home/letest-blogs/LetestBlogs";
import News from "@/components/home/news/News";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getApiHelper } from "@/components/helper/apiHelper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { blogsData } from "@/store/reducer/blog";
import { newsData } from "@/store/reducer/news";
import ServiceSection from "@/components/home/all-services/ServiceSection";
import { useGetBlogsQuery } from "@/store/blogs";
import SingleServiceSliderSection from "@/components/services/SingleServiceSliderSection";
import SectionHeading from "@/components/reusable/SectionHeading";
import HomeServiceSlider from "@/components/home/all-services/HomeServiceSlider";
import { useGetNewsQuery } from "@/store/news";
import Hero from "@/components/Hero";
import AboutUs from "@/components/About";
import Services from "@/components/Services";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const latestBlogRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [latestBlogSectionHeight, setlatestBlogSectionHeight] = useState(0);

  const blogsAllData = useSelector((state: RootState) => state.blog.blogsData);
  const newsAllData = useSelector((state: RootState) => state.news.newsData);

  const dispatch = useDispatch();

  useEffect(() => {
    getNewsData();
    getBlogData();
  }, []);

  const getBlogData = async () => {
    try {
      const response: any = await getApiHelper(
        "https://emerge-x-backend-c2kvq.ondigitalocean.app/v1/blog?page=1&limit=10",
        "GET"
      );
      if (response?.success) {
        dispatch(blogsData(response?.data));
        console.log("Blogs Data:", response?.data);
      } else {
        console.error("Failed to fetch blogs:", response?.error);
      }
    } catch (error: any) {
      console.error("API error:", error.error || error.message);
    }
  };

  const getNewsData = async () => {
    try {
      const response: any = await getApiHelper(
        "https://emerge-x-backend-c2kvq.ondigitalocean.app/v1/news?page=1&limit=10",
        "GET"
      );

      if (response?.success) {
        // dispatch(newsData(response?.data));
        console.log("Blogs Data:", response?.data);
      } else {
        console.error("Failed to fetch blogs:", response?.error);
      }
    } catch (error: any) {
      console.error("API error:", error.error || error.message);
    }
  };

  useEffect(() => {
    const preventZoom = (event: any) => {
      if (event.ctrlKey || event.metaKey || event.key === "0") {
        event.preventDefault();
      }
    };

    const preventWheelZoom = (event: any) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", preventZoom);
    document.addEventListener("wheel", preventWheelZoom, { passive: false });

    return () => {
      document.removeEventListener("keydown", preventZoom);
      document.removeEventListener("wheel", preventWheelZoom);
    };
  }, []);

  const { data } = useGetBlogsQuery({ page: 1, limit: 10 });
  const { data: newsData } = useGetNewsQuery({ page: 1, limit: 5 });
  console.log("🚀 ~ Home ~ newsData:", newsData);

  return (
    <div className="space-y-4 relative bg-black" id="home">
      <div ref={targetRef} className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-950 via-green-900 to-black opacity-30 z-0" />

        {/* <Hero scrollYProgress={scrollYProgress} /> */}
        <Hero/>

        <div className="" id="about">
          {/* <About scrollYProgress={scrollYProgress} /> */}
          <AboutUs/>
        </div>
      </div>
      <>
        {/* <ServiceSection /> */}
        <div id="services" className="scroll-mt-20">
  <Services />
</div>

        <div id="blogs" className="scroll-mt-20">
        {data?.blog && data.blog.length > 0 && <LetestBlogs data={data} />}
        </div>
      </>
      <div id="news" className="scroll-mt-20">
      {newsData && newsData?.news?.length > 0 && (
        <News newdData={newsData?.news} />
      )}
      </div>
      <Contact />
    </div>
  );
}
