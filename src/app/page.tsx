"use client";

import About from "@/components/home/about/About";
import AllServices from "@/components/home/all-services/AllServices";
import Contact from "@/components/home/contactus/Contact";
import Hero from "@/components/home/hero/Hero";
import LetestBlogs from "@/components/home/letest-blogs/LetestBlogs";
import News from "@/components/home/news/News";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMediaQuery } from "usehooks-ts";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Common animations
    const commonAnimations = (timeline: any) => {
      // 1. Move the service card upwards
      timeline.to("#serviceId", {
        translateY: -300,
        duration: 1,
      }, "a");

      timeline.to("#sectionHeading", {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }, "a");

      // 2. Expand the circle
      // timeline.to("#latest-blogs-section", {
      //   width: "100vw",
      //   height: "100vw",
      //   ease: "power1.out",
      //   borderRadius: "0",
      //   duration: 1,
      // }, "a");

      // 3. Set overflow to hidden for #container (Separate this animation)
      // timeline.to("#container", {
      //   css: { overflow: "hidden" },
      //   duration: 0.5,
      // }, "a+=0.7");
    };

    // Breakpoint-specific animations
    mm.add("(min-width: 1280px)", () => {
      // For extra-large screens (XL)
      const xlTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#container",
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
          markers: true, // Debug markers for XL
        },
      });


      xlTimeline.to("#latest-blogs-section", {
        width: "100vw",
        height: "100vw",
        ease: "power1.out",
        borderRadius: "0",
        duration: .81,
      }, "b");

      xlTimeline.to("#serviceId", {
        translateY: -300,
        duration: 0.2,
      }, "b");


      // Run common animations
      commonAnimations(xlTimeline);

      // Blog card animation
      xlTimeline.to(".blog-card", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        scale: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".blog-card",
          start: "top 75%",
          end: "top 25%",
          scrub: true,
          // markers: true
        },
      });
    });

    mm.add("(min-width: 1024px) and (max-width: 1279px)", () => {
      // For large screens (LG)
      const lgTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#container",
          start: "top bottom",
          end: "center bottom",
          scrub: 1,
          markers: false, // Debug markers for LG
        },
      });

      // Adjust circle width for medium screens
      lgTimeline.to("#latest-blogs-section", {
        width: "100vw",
        height: "100%",
        ease: "power1.out",
        borderRadius: "0",
        duration: 1,
      }, "a-=0.2");

      // Run common animations
      commonAnimations(lgTimeline);

      // Blog card animation for LG
      lgTimeline.to("#blogCard", {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".blog-card",
          start: "top 75%",
          end: "top 25%",
          scrub: true,
        },
      });
    });

    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      // For medium screens (MD)
      const mdTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#container",
          start: "top 90%",
          end: "bottom center",
          scrub: 1,
        },
      });

      // Adjust circle width for medium screens
      mdTimeline.to("#latest-blogs-section", {
        width: "100vw",
        height: "100%",
        ease: "power1.out",
        borderRadius: "0",
        duration: 1,
      }, "a-=0.2");

      // Run common animations for MD
      commonAnimations(mdTimeline);

      mdTimeline.to(".blog-card", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        scale: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".blog-card",
          start: "top 75%",
          end: "top 25%",
          scrub: true,
          markers: true
        },
      });
    });

    // Cleanup on unmount
    return () => {
      mm.revert();
    };
  }, []);

  const isMobile = useMediaQuery('(max-width: 768px)'); // For screens up to 768px

  return (
    <div className="space-y-4 relative" id="home">
      <div ref={targetRef} className="relative">
        <Hero scrollYProgress={scrollYProgress} />
        <div className="w-screen flex justify-center" id="about-us">
          <About scrollYProgress={scrollYProgress} />
        </div>
      </div>
      {
        isMobile ? (
          <>
            <AllServices />
            <LetestBlogs />
          </>
        ) :
          <div className="relative h-[400vh] md:h-[455vh] lg:h-[355vh] xl:h-[400vh]">
            <div id="serviceId" className="sticky top-0 mt-6 z-0 h-[200vh] ">
              <AllServices />
            </div>
            <div className="relative z-10">
              <LetestBlogs />
            </div>
          </div>
      }
      <News />
      <Contact />
    </div>
  );
}
