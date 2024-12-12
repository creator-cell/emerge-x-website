"use client";

import About from "@/components/home/about/About";
import AllServices from "@/components/home/all-services/AllServices";
import Contact from "@/components/home/contactus/Contact";
import Hero from "@/components/home/hero/Hero";
import LetestBlogs from "@/components/home/letest-blogs/LetestBlogs";
import News from "@/components/home/news/News";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const serviceBlogRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const { scrollYProgress: serviceBlogScrollYProgress } = useScroll({
    target: serviceBlogRef,
  });



  return (
    <div className="space-y-20 md:space-y-0 relative" id="home">
      <div ref={targetRef} className="relative">
        <Hero scrollYProgress={scrollYProgress} />
        <div className="w-screen flex justify-center" id="about-us">
          <About scrollYProgress={scrollYProgress} />
        </div>
      </div>
      <div className="relative">
        <div className="relative z-0">
          <AllServices />
          <div className="relative z-10">
            <LetestBlogs />
          </div>
        </div>
      </div>

      <News />
      <Contact />
    </div>
  );
}
