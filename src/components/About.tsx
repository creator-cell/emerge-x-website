import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../../public/lott.json";
 
export default function AboutUsSection() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: 0.6, once: false });
 
  // Animation variants for the container and individual text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Increased stagger for a more gradual reveal
      },
    },
  };
 
  const textVariants = {
    hidden: { opacity: 0, x: "50vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 1,
        ease: "easeOut",
      },
    },
  };
 
  useEffect(() => {
    if (isInView) {
      controls.start("visible"); // Play animation when in view
    } else {
      controls.start("hidden"); // Reverse animation when out of view
    }
  }, [controls, isInView]);
 
  return (
    <section className="px-4 relative overflow-hidden py-12 container">
      <div className="lg:grid lg:grid-cols-2 gap-6 items-center">
        {/* Left Container (Lottie for Desktop) */}
        <div className="hidden lg:flex flex-col gap-6 items-start">
          <div className="relative">
            <Lottie animationData={animationData} className="sm:h-[80vh] max-h-[35rem] w-auto h-auto m-4" />
          </div>
        </div>
 
        {/* Right Container (Text and Mobile Lottie) */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col items-start max-lg:items-center"
        >
          {/* Tagline */}
          <motion.span
            variants={textVariants}
            className="font-semibold text-[16px] leading-[19.36px] tracking-[4px] text-[#3DA229] uppercase mb-4"
          >
            ABOUT US
          </motion.span>
 
          {/* Heading */}
          <motion.h2
            variants={textVariants}
            className="text-[32px] md:text-[40px] font-normal leading-[45px] tracking-normal mb-8 text-gray-300 max-w-2xl"
          >
            At EmergeX, we aim higher and strive harder to make workplace safety
          </motion.h2>
 
          {/* Lottie for Mobile (below md) */}
          <motion.div
            variants={textVariants}
            className="lg:hidden w-full mb-8"
          >
            <Lottie animationData={animationData} className="w-full h-[20rem] mx-auto" />
          </motion.div>
 
          {/* Paragraph */}
          <motion.p
            variants={textVariants}
            className="text-gray-300 text-[16px] leading-relaxed tracking-wide mb-8 max-w-xl"
          >
            EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting. 
          </motion.p>
 
          {/* Button */}
          <motion.div variants={textVariants}>
            <Link href="/about-us">
              <Button className="buttogGradientBG hover:bg-[#45a049] text-[16px] px-8 py-6 text-white rounded-[10px]">
                Explore Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
 