"use client"

import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "./ui/button";
import Lottie from "lottie-react";
import animationData from "../../public/lott.json";
import Link from "next/link";

export default function AboutUs() {
  const ref = useRef<HTMLDivElement>(null);
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Section is in view if it's at least 50% visible
      const isEntering = rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5;
      const isLeaving = rect.bottom < windowHeight * 0.5 || rect.top > windowHeight * 0.5;

      if (isEntering) {
        leftControls.start({ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } });
        rightControls.start({ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } });
      } else if (isLeaving) {
        leftControls.start({ opacity: 0, x: "-100%", transition: { duration: 0.8, ease: "easeIn" } });
        rightControls.start({ opacity: 0, x: "100%", transition: { duration: 0.8, ease: "easeIn", delay: 0.2 } });
      }
    };

    // Run once on mount to check initial position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [leftControls, rightControls]);

  return (
    <section id="about-section" className=" px-4 relative overflow-hidden">
      <div className="relative z-10 max-w-[1336px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Container (Image/Placeholder) */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={leftControls}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <Lottie
            animationData={animationData}
            className="md:w-[1000px] md:h-[1000px] w-auto h-auto md:-ml-[10rem] -ml-[1rem]"
          />
        </motion.div>

        {/* Right Container (Text Content) */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: "100%" }}
          animate={rightControls}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="font-semibold text-[16px] leading-[19.36px] tracking-[4px] text-[#3DA229] uppercase mb-6 block">
            ABOUT US
          </span>
          <h2 className="text-[32px] lg:text-[40px] font-normal leading-[38.73px] tracking-normal mb-6">
            At EmergeX, we aim higher and strive harder to make workplace safety
          </h2>

          <p className="text-gray-300 text-[16px] leading-normal tracking-normal mb-8">
            EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting. EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting.
          </p>

          <Link href="/about-us">
            <Button className="buttogGradientBG hover:bg-[#45a049] text-[16px] px-8 py-6 text-white rounded-[10px]">
              Explore Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}