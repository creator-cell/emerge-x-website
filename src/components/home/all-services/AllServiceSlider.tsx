"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "@/components/reusable/SectionHeading";
import Image from "next/image";

const sliderData = [
  {
    image: "/services-slider1.png",
    text: "Mitigation/ Prevention",
  },
  {
    image: "/services-slider2.png",
    text: "Preparedness",
  },
  {
    image: "/services-slider1.png",
    text: "Response",
  },
  {
    image: "/services-slider2.png",
    text: "Recovery",
  },
];

const AllServiceSlider: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(270);

  const { scrollYProgress, scrollY } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth); // Dynamically calculate card width
    }
  }, [cardRef.current]);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-150%"]
    // [0, -((cardWidth * (sliderData.length - 1)) + 60)]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      // Calculate the current X offset
      const offset = progress * (sliderData.length - 1) * cardWidth;
      console.log("🚀 ~ scrollY:", scrollY)


      // Calculate the new index without rounding values > 0.5 up
      const newIndex = Math.round(offset / cardWidth);

      // Ensure the index doesn't exceed bounds
      setActiveIndex(Math.min(newIndex, sliderData.length - 1));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section className="container relative pt-32 h-[500vh]" ref={targetRef}>
      <motion.div
        className="sticky top-8 bg-cover bg-center md:mx-4 rounded-xl md:rounded-[56px] overflow-hidden h-[700px] md:h-[800px]"
      >
        {/* Image Transition */}
        <div className="w-full h-full absolute top-0 left-0">
          {/* Current Image */}
          <motion.img
            key={activeIndex} // Trigger animation every time activeIndex changes
            src={sliderData[activeIndex]?.image}
            alt={sliderData[activeIndex]?.text}
            className="w-full h-full object-cover object-center absolute top-0 left-0"
            initial={{
              opacity: 0, // Start invisible
              filter: "blur(10px)", // Start with blur
            }}
            animate={{
              opacity: 1, // Fade in
              filter: "blur(0px)", // Remove blur
            }}
            exit={{
              opacity: 0, // Fade out
              filter: "blur(10px)", // Apply blur
            }}
            transition={{
              duration: 0.6, // Duration of the image fade
              ease: "easeOut", // Smooth easing
            }}
          />
        </div>

        <div className="w-full h-full bg-gray-800 bg-opacity-70 absolute top-0 right-0">
          <div className="w-full relative">
            <SectionHeading text="All Services" className="text-white mt-10" />
            <div className="w-full flex md:items-end md:py-10 gap-20 md:gap-5 flex-col md:flex-row md:justify-between">
              <div className="w-full md:w-[48%] flex items-center justify-center gap-4 md:pb-10">
                <div className="w-[75%] flex flex-col gap-4 md:gap-20">
                  <div className="w-full">
                    <div className="w-full md:p-4">
                      <div className="md:py-3">
                        <AnimatePresence mode="wait">
                          <motion.p
                            className="text-base md:text-lg lg:text-[60px] text-white md:mt-10"
                            style={{ lineHeight: "70px" }}
                            key={`current-placeholder-${activeIndex}`}
                            initial={{
                              opacity: 0,
                              y: 50, // Start above the normal position
                            }}
                            animate={{
                              opacity: 1,
                              y: 0, // Move to the normal position
                            }}
                            exit={{
                              opacity: 0,
                              y: -50, // Exit to above the normal position
                            }}
                            transition={{
                              duration: 0.5, // Control the speed of the animation
                              ease: "easeOut", // Smooth easing
                            }}
                          >
                            {sliderData[activeIndex]?.text}
                          </motion.p>
                        </AnimatePresence>

                        <p className="text-base md:text-lg lg:text-xl text-white md:mt-10">
                          EmergeX will assist you to better understand and manage
                          workplace safety by integrating hazards and incident
                          reporting with investigations, actions, and metrics
                          reporting.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="bg-customGreen px-4 py-1.5 md:px-6 md:py-2 text-white w-fit rounded-[60px] text-base md:text-2xl">
                    Explore Now
                  </button>
                </div>
              </div>

              <div className="w-full md:w-[50%] overflow-hidden pl-8  pb-6">
                <motion.div
                  style={{
                    x,
                  }}
                  className="w-full flex mt-32 items-end mx-auto gap-6"
                >
                  {sliderData.map((e, i) => (
                    <ServiceCard
                      key={i}
                      ref={i === 0 ? cardRef : undefined}
                      image={e.image}
                      text={e.text}
                      isActive={activeIndex === i} // Highlight active card
                      isLastIndex={i === sliderData.length - 1} // Check if it's the last card
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ServiceCard = React.forwardRef<HTMLDivElement, { image: string; text: string; isActive: boolean, isLastIndex: boolean }>(
  ({ image, text, isActive, isLastIndex }, ref) => (
    <AnimatePresence>
      <motion.div
        className="md:h-[420px] flex items-end"
        ref={ref}
        initial={{
          scale: 1,
          translateY: 0,
          // translateX: 0,
          padding: "0 0",
        }}
        animate={{
          scale: isActive ? 1.2 : 1,
          translateY: isActive ? -30 : 0,
          // translateX: (isActive && isLastIndex) ? 0 : -0,
          // ...(isActive ? { translateX: 80 } : { translateX: 70 }),
          padding: isActive ? "0 20px" : "0 10px",
        }}
        exit={{
          scale: 1,
          translateY: 0,
          // translateX: 0,
          padding: "0 10px",
        }}
        transition={{
          duration: 0.6,
          ease: "easeIn",
        }}
      >
        <div className="rounded-2xl overflow-visible w-full md:w-[240px]">
          <Image src={image} alt={text} height={800} width={400} />
        </div>
      </motion.div>
    </AnimatePresence>
  )
);

ServiceCard.displayName = "ServiceCard";

export default AllServiceSlider;
