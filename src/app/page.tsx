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

gsap.registerPlugin(useGSAP, ScrollTrigger);



export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });


  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // For screens wider than 1024px
      const circle = gsap.timeline({
        scrollTrigger: {
          trigger: "#container",
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
        },
      });

      // First, animate the service card going up
      circle.to("#serviceId", {
        translateY: -300,
        duration: 1,  // Optional duration if you want to fine-tune the timing
      });

      // Then, animate the circle
      circle.to("#latest-blogs-section", {
        width: "250vw",
        ease: "power1.out",
        borderRadius: "6px",
        duration: 1,  // Optional duration
      }, "+=0.2");  // `+=0.2` ensures the circle animation starts after the first one finishes

      circle.to("#sectionHeading", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.out",
      }, "-=0.5");

      // Ensure the blog card animation starts **after** the circle animation completes
      circle.to(".blog-card", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power1.out",
      }, "-=0.1");  // "-=0.5" ensures that the card animation starts after the circle animation, with a slight overlap
    });

    mm.add("(max-width: 768px)", () => {
      // For screens smaller than 1024px
      const circle = gsap.timeline({
        scrollTrigger: {
          trigger: "#container",
          start: "top 80%",
          end: "bottom center",
          scrub: 1,
        },
      });

      circle.to("#latest-blogs-section", {
        width: "550vw",
        ease: "power1.out",
        borderRadius: "6px",
      });
    });

    const card = gsap.timeline({
      scrollTrigger: {
        trigger: "#card-container",
        start: "-40% top",
        end: "bottom center",
        scrub: 1,
      },
    });

    card.from(".blog-card", {
      opacity: 0,
      y: 50,
      delay: 0.5,
      stagger: 0.2,
      duration: 0.8,
      ease: "power1.out",
    });

    return () => {
      mm.revert(); // Clean up matchMedia listeners on component unmount
    };
  }, []);



  return (
    <div className="space-y-20 md:space-y-0 relative" id="home">
      <div ref={targetRef} className="relative">
        <Hero scrollYProgress={scrollYProgress} />
        <div className="w-screen flex justify-center" id="about-us">
          <About scrollYProgress={scrollYProgress} />
        </div>
      </div>
      <div className="relative h-[400vh]">
        <div id="serviceId" className="sticky top-0 mt-6 z-0 h-[200vh] ">
          <AllServices />
        </div>
        <div className="relative z-10">
          {/* <div
            id="latest-blogs-section"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-square bg-black rounded-full -z-10"
          /> */}
          <LetestBlogs />

        </div>
      </div>

      <News />
      <Contact />
    </div>
  );
}
