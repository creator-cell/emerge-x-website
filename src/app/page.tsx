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

gsap.registerPlugin(useGSAP, ScrollTrigger);



export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });


  // useGSAP(() => {
  //   const mm = gsap.matchMedia();

  //   // For screens wider than 1024px
  //   mm.add("(min-width: 1024px)", () => {
  //     // Timeline for animations triggered by the #container
  //     const containerTimeline = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#container",
  //         start: "top bottom",
  //         end: "bottom center",
  //         scrub: 1,
  //         markers: true,
  //       },
  //     });

  //     // 1. Move the service card upwards
  //     containerTimeline.to("#serviceId", {
  //       translateY: -300,
  //       duration: 1,
  //     }, "a");

  //     // 2. Expand the circle
  //     containerTimeline.to("#latest-blogs-section", {
  //       width: "250vw",
  //       ease: "power1.out",
  //       borderRadius: "6px",
  //       duration: 1,
  //     }, "a");

  //     // 3. Reveal the section heading
  //     containerTimeline.to("#sectionHeading", {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: "power1.out",
  //     }, "-=0.5");

  //     // 4. Show the blog cards
  //     containerTimeline.to(".blog-card", {
  //       opacity: 1,
  //       y: 0,
  //       stagger: 0.2,
  //       duration: 1,
  //       ease: "power1.out",
  //     }, "-=0.1");

  //     // Separate timeline for the #card-container
  //     // const cardTimeline = gsap.timeline({
  //     //   scrollTrigger: {
  //     //     trigger: "#card-container",
  //     //     start: "-40% top",
  //     //     end: "bottom center",
  //     //     scrub: 1,
  //     //   },
  //     // });

  //     // Animation for blog cards in the #card-container
  //     containerTimeline.from(".blog-card", {
  //       opacity: 0,
  //       y: 50,
  //       delay: 0.5,
  //       stagger: 0.2,
  //       duration: 0.8,
  //       ease: "power1.out",
  //     });
  //   });

  //   // For screens smaller than 768px
  //   mm.add("(max-width: 768px)", () => {
  //     // Timeline for animations triggered by the #container
  //     const containerTimeline = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#container",
  //         start: "top 80%",
  //         end: "bottom center",
  //         scrub: 1,
  //       },
  //     });

  //     // 1. Move the service card upwards
  //     containerTimeline.to("#serviceId", {
  //       translateY: -300,
  //       duration: 1,
  //     }, "a");

  //     // 2. Expand the circle
  //     containerTimeline.to("#latest-blogs-section", {
  //       width: "550vw",
  //       ease: "power1.out",
  //       borderRadius: "6px",
  //       duration: 1,
  //     }, "a");

  //     // 3. Show the blog cards
  //     containerTimeline.to(".blog-card", {
  //       opacity: 1,
  //       y: 0,
  //       stagger: 0.2,
  //       duration: 0.8,
  //       ease: "power1.out",
  //     }, "a+=0.3");

  //     // Separate timeline for the #card-container
  //     // const cardTimeline = gsap.timeline({
  //     //   scrollTrigger: {
  //     //     trigger: "#card-container",
  //     //     start: "-40% top",
  //     //     end: "bottom center",
  //     //     scrub: 1,
  //     //   },
  //     // });

  //     // Animation for blog cards in the #card-container
  //     containerTimeline.from(".blog-card", {
  //       opacity: 0,
  //       y: 50,
  //       delay: 0.5,
  //       stagger: 0.2,
  //       duration: 0.8,
  //       ease: "power1.out",
  //     });
  //   });

  //   // Cleanup on unmount
  //   return () => {
  //     mm.revert();
  //   };
  // }, []);



  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Common animations
    const commonAnimations = (timeline: any) => {
      // 1. Move the service card upwards
      timeline.to("#serviceId", {
        translateY: -300,
        duration: 1,
      }, "a");

      // 2. Expand the circle
      timeline.to("#latest-blogs-section", {
        width: "250vw", // Default for larger screens
        ease: "power1.out",
        borderRadius: "6px",
        duration: 1,
      }, "a");

      // 3. Show the blog cards
      timeline.to(".blog-card", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power1.out",
      }, "a+=0.3");
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

      commonAnimations(xlTimeline);
    });

    mm.add("(min-width: 1024px) and (max-width: 1279px)", () => {
      // For large screens (LG)
      const lgTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#container",
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
          markers: true, // Debug markers for LG
        },
      });

      commonAnimations(lgTimeline);
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
        width: "350vw", // Smaller circle width for medium screens
        ease: "power1.out",
        borderRadius: "6px",
        duration: 1,
      }, "a");

      commonAnimations(mdTimeline);
    });

    // mm.add("(max-width: 767px)", () => {
    //   // For small screens (SM)
    //   const smTimeline = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: "#container",
    //       start: "top 80%",
    //       end: "bottom center",
    //       scrub: 1,
    //     },
    //   });

    //   // Adjust circle width for small screens
    //   smTimeline.to("#latest-blogs-section", {
    //     width: "550vw", // Even larger circle width for small screens
    //     ease: "power1.out",
    //     borderRadius: "6px",
    //     duration: 1,
    //   }, "a");

    //   commonAnimations(smTimeline);
    // });

    // Cleanup on unmount
    return () => {
      mm.revert();
    };
  }, []);


  const isMobile = useMediaQuery('(max-width: 640px)'); // For screens up to 768px

  return (
    <div className=" md:space-y-0 relative" id="home">
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
          <div className="relative h-[400vh]">
            <div id="serviceId" className="sticky top-0 mt-6 z-0 h-[200vh] ">
              <AllServices />
            </div>
            <div className="relative z-10">
              <LetestBlogs />
            </div>
          </div>
      }
      <div className="relative z-[440] -top-52">
        <News />
      </div>
      <div className="relative -top-24">
        <Contact />
      </div>
    </div>
  );
}
