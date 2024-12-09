"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionWrapper from "@/components/reusable/SectionWrapper";
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
  {
    image: "/services-slider1.png",
    text: "Slide 5 Text",
  },
  {
    image: "/services-slider2.png",
    text: "Slide 6 Text",
  },
];

const AllServiceSlider: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const [activeCard, setActiveCard] = useState(sliderData[0]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  
  // Interpolating scrollYProgress to calculate X position for sliding
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  useEffect(() => {
    const unsubscribe = x.onChange((currentValue) => {
      const xValue = Math.round(-Number(currentValue.split("%")[0]));

      // Logic for active card selection based on x position
      if (sliderWrapperRef.current && cardRef.current) {
        let activeIndex = xValue / 35;
        if (activeIndex > sliderData.length - 1) {
          activeIndex = sliderData.length - 1;
        }
        setActiveCard(sliderData[Math.round(activeIndex)]);
      }
    });

    return () => unsubscribe();
  }, [x]);

  return (
    <section className="container relative pt-32 h-[500vh]" ref={targetRef}>
      <div
        style={{
          backgroundImage: `url('${activeCard?.image}')`,
        }}
        className="sticky top-8 bg-cover bg-center md:mx-4 rounded-xl md:rounded-[56px] overflow-hidden h-[700px] md:h-[800px]"
      >
        <div className="w-full h-full bg-gray-800 bg-opacity-70 absolute top-0 right-0">
          <div className="w-full relative">
            <SectionHeading text="All Services" className="text-white mt-10" />
            <div className="w-full flex md:items-end md:py-10 gap-20 md:gap-5 flex-col md:flex-row md:justify-between">
              <div className="w-full md:w-[48%] flex items-center justify-center gap-4 md:pb-10">
                <div className="w-[75%] flex flex-col gap-4 md:gap-20">
                  <div className="w-full">
                    <div className="w-full md:p-4">
                      <div className="md:py-3">
                        <p
                          className="text-base md:text-lg lg:text-[60px] text-white md:mt-10"
                          style={{ lineHeight: "70px" }}
                        >
                          {activeCard?.text}
                        </p>
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

              <div ref={sliderWrapperRef} className="w-full md:w-[50%] overflow-hidden">
                <motion.div
                  style={{
                    x,
                  }}
                  className="w-full flex mt-32 items-end mx-auto gap-6"
                >
                  {sliderData?.map((e, i) => (
                    <ServiceCard
                      key={i}
                      image={e.image}
                      text={e.text}
                      isActive={activeCard.text === e.text} // Pass active state to each card
                      ref={i === 0 ? cardRef : undefined}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = React.forwardRef<HTMLDivElement, { image: string; text: string; isActive: boolean }>(
  ({ image, text, isActive }, ref) => (
    <motion.div
      ref={ref}
      className="md:h-[420px] flex items-end"
      style={{
        scale: isActive ? 1.2 : 1, // Increase size of active card
        marginRight: "1rem", // Add margin between the cards
        transition: "scale 0.3s ease-in-out, margin 0.3s ease-in-out", // Smooth transition
      }}
    >
      <div className="rounded-2xl overflow-hidden w-full md:w-[240px]">
        <Image src={image} alt={text} height={800} width={400} />
      </div>
    </motion.div>
  )
);

ServiceCard.displayName = "ServiceCard";

export default AllServiceSlider;
