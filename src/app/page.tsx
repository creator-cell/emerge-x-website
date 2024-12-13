"use client";

import About from "@/components/home/about/About";
import AllServices from "@/components/home/all-services/AllServices";
import Contact from "@/components/home/contactus/Contact";
import Hero from "@/components/home/hero/Hero";
import LetestBlogs from "@/components/home/letest-blogs/LetestBlogs";
import News from "@/components/home/news/News";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const latestBlogRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [latestBlogSectionHeight, setlatestBlogSectionHeight] = useState(0);

  // useEffect(() => {
  //   if (latestBlogRef?.current) {
  //     setlatestBlogSectionHeight(latestBlogRef.current.offsetHeight)
  //     // setlatestBlogSectionHeight(latestBlogRef.current.clientHeight)
  //   }

  // }, [latestBlogRef])


  useEffect(() => {
    const preventZoom = (event: any) => {
      if (event.ctrlKey || event.metaKey || event.key === '0') {
        event.preventDefault();
      }
    };

    const preventWheelZoom = (event: any) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', preventZoom);
    document.addEventListener('wheel', preventWheelZoom, { passive: false });

    return () => {
      document.removeEventListener('keydown', preventZoom);
      document.removeEventListener('wheel', preventWheelZoom);
    };
  }, []);


  const serviceBlogRefScope = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Common animations
    const commonAnimations = (timeline: any) => {
      // 1. Move the service card upwards
      timeline.to(
        "#serviceId",
        {
          translateY: -300,
          duration: 1,
          css: {
            display: "none",
          },
        },
        "a"
      );

      timeline.to(
        "#sectionHeading",
        {
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
        },
        "a"
      );

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
    mm.add("(min-width: 1024px)", () => {
      // For extra-large screens (XL)
      const xlTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#container",
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
          // markers: true,
        },
      });
      xlTimeline.to("#serviceId", {
        translateY: -300,
        duration: 1,
        opacity: 0,
      }, "b");

      xlTimeline.to("#latest-blogs-section", {
        width: "100vw",
        height: "100vw",
        ease: "power1.out",
        borderRadius: "0",
        duration: 0.81,
      }, "b");

      xlTimeline.to("#sectionHeading", {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }, "b").from("#sectionHeading", {
        css: {
          fontSize: "2rem",
        }
      })

      xlTimeline.to(".blog-card", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        scale: 1,
        ease: "power1.out",
      }, "b+=0.5");


    });



    mm.add("(min-width: 765px) and (max-width: 1023px)", () => {
      // For medium screens (MD)
      const mdTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#container",
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
          markers: false,
        },
      });


      mdTimeline.to("#serviceId", {
        translateY: -300,
        duration: 1,
        opacity: 0,
      }, "d");

      mdTimeline.to("#latest-blogs-section", {
        width: "100vw",
        height: "100vw",
        ease: "power1.out",
        borderRadius: "0",
        duration: 0.81,
      }, "d");

      mdTimeline.to("#sectionHeading", {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }, "d").from("#sectionHeading", {
        css: {
          fontSize: "2rem",
        }
      })

      mdTimeline.to(".blog-card", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        scale: 1,
        ease: "power1.out",
      }, "d+=0.5");

    });

    // Cleanup on unmount
    return () => {
      mm.revert();
    };
  }, {
    scope: serviceBlogRefScope
  });

  const isMobile = useMediaQuery("(max-width: 768px)"); // For screens up to 768px

  useEffect(() => {
    const updateHeight = () => {
      if (latestBlogRef?.current) {
        const blogSectionHeight = latestBlogRef.current.clientHeight || 0;
        const viewportHeight = window.innerHeight * 2;

        console.log("🚀 ~ updateHeight ~ viewportHeight:", viewportHeight);
        // Adjust height dynamically, with optional limits for larger screens
        const calculatedHeight = Math.min(
          viewportHeight + blogSectionHeight,
          2 * viewportHeight
        );
        setlatestBlogSectionHeight(calculatedHeight);
      }
    };

    // Initial height calculation
    updateHeight();

    // Recalculate on window resize
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [latestBlogRef, latestBlogSectionHeight]);
  console.log("🚀 ~ Home ~ latestBlogSectionHeight:", latestBlogSectionHeight);




  return (
    <div className="space-y-4 relative " id="home">
      <div ref={targetRef} className="relative">
        <Hero scrollYProgress={scrollYProgress} />

        <div className="w-full flex justify-center" id="about-us">
          <About scrollYProgress={scrollYProgress} />
        </div>
      </div>
      {isMobile ? (
        <>
          <AllServices />
          <LetestBlogs />
        </>
      ) : (
        <div
          ref={serviceBlogRefScope}
          className={cn("relative ")}
          style={{
            height: `${latestBlogSectionHeight}px`, // Dynamically calculated height
          }}
        >
          {/* <div className={cn("relative h-[400vh] md:h-[455vh] lg:h-[355vh] xl:h-[400vh]")}> */}
          <div
            id="serviceId"
            className="opacity-100 sticky top-0 mt-6 z-0 h-[200vh] "
          >
            <AllServices />
          </div>
          <div ref={latestBlogRef} className="relative z-10">
            <LetestBlogs />
          </div>
        </div>
      )}
      <News />
      <Contact />
    </div>
  );
}
