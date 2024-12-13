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
    mm.add("(min-width: 1280px)", () => {
      // For extra-large screens (XL)
      const xlTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#container",
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
          markers: false, // Debug markers for XL
        },
      });

      xlTimeline.to("#latest-blogs-section", {
        width: "100vw",
        height: "100vw",
        ease: "power1.out",
        borderRadius: "0",
        duration: 0.81,
      });

      xlTimeline.to(
        "#serviceId",
        {
          translateY: -300,
          duration: 0.2,
          opacity: 0,
          // css: {
          //   display: "none"
          // }
        },
        "b"
      );

      // xlTimeline.to("#serviceId", {
      //   opacity: 0,
      //   duration: 0.2,
      // })

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
      });

      lgTimeline.to(
        "#serviceId",
        {
          translateY: -300,
          duration: 0.2,
          opacity: 0,
          // css: {
          //   display: "none"
          // }
        },
        "b"
      );

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
      // mdTimeline.to("#latest-blogs-section", {
      //   width: "100vw",
      //   height: "100%",
      //   ease: "power1.out",
      //   borderRadius: "0",
      //   duration: 1,
      // },);

      mdTimeline.to(
        "#latest-blogs-section",
        {
          width: "100vw",
          height: "100vw",
          ease: "power1.out",
          borderRadius: "0",
          duration: 0.81,
        },
        "b"
      );

      mdTimeline.to(
        "#serviceId",
        {
          translateY: -300,
          duration: 1,
          opacity: 0,
        },
        "b"
      );

      // mdTimeline.to("#serviceId", {
      //   opacity: 0,
      //   duration: 0.2,
      // })

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
          start: "top bottom",
          end: "top 25%",
          scrub: true,
          markers: true,
        },
      });
    });

    // Cleanup on unmount
    return () => {
      mm.revert();
    };
  }, []);

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
