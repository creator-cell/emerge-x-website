"use client";
import type React from "react";
import type { NewsItem } from "@/store/news/types/news.types";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NewsProps {
  newdData: NewsItem[];
}

const News: React.FC<NewsProps> = ({ newdData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    const currentRef = sectionRef.current; // Capture ref value
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef); // Use captured value in cleanup
    };
  }, []); // Dependency array is empty, runs once on mount

  // Autoplay functionality
  useEffect(() => {
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    if (newdData.length > 1) { // Only run interval if there's more than one item
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % newdData.length);
      }, 5000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [newdData.length, activeIndex]); // Re-run if length changes or activeIndex changes (to reset timer on manual nav)

  // Arrow key navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (newdData.length > 1) { // Only allow navigation if there's more than one item
        if (event.key === "ArrowLeft") {
          setActiveIndex((prev) => (prev - 1 + newdData.length) % newdData.length);
        } else if (event.key === "ArrowRight") {
          setActiveIndex((prev) => (prev + 1) % newdData.length);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [newdData.length]);

  // Card animation variants - Adjusted for less visibility on the right
  const cardVariants = {
    active: {
      x: "-50%", // Center
      y: "-50%",
      scale: 1,
      opacity: 1,
      zIndex: 40, // Highest z-index
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
    next: {
      x: "-42%", // Shifted slightly right from center (Approx 8% shift)
      y: "-50%",
      scale: 0.9, // Slightly smaller
      opacity: 0.6, // Reduced opacity
      zIndex: 30,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
    nextNext: {
      x: "-34%", // Shifted slightly more right
      y: "-50%",
      scale: 0.8, // Smaller
      opacity: 0.3, // Further reduced opacity
      zIndex: 20,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
    // This 'hidden' state applies to cards further down the stack (beyond nextNext)
    // AND cards that have moved past 'active' to the left.
    hidden: {
      // We need a position far enough left OR right depending on context,
      // but opacity: 0 and lower zIndex handle hiding.
      // Let's define separate states for clarity or adjust the logic.
      // For simplicity, let's keep one hidden state but make it further left.
      x: "-100%", // Move further left off-screen
      // Or use opacity/scale to hide without specific x if preferred
      // x: "-50%", // Keep centered horizontally but hide with opacity/scale/zIndex
      y: "-50%",
      scale: 0.7, // Smallest
      opacity: 0, // Fully transparent
      zIndex: 10, // Lowest z-index
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  // Determine card position relative to activeIndex
  const getCardPosition = (index: number, activeIndex: number, totalItems: number) => {
    if (totalItems <= 1) return "active"; // Handle single item case

    const diff = index - activeIndex;

    if (diff === 0) return "active";
    if (diff === 1 || diff === -(totalItems - 1)) return "next";
    if (diff === 2 || diff === -(totalItems - 2)) return "nextNext";

    // Default to hidden for all other positions (further right or further left)
    return "hidden";
  };


  return (
    <section ref={sectionRef} id="news-section" className="py-8 sm:py-12 px-4 overflow-hidden relative">
      <div className="max-w-[900px] mx-auto text-left sm:text-center">
        {/* Title animations */}
        <motion.h2
          className="text-3xl mb-2 text-gray-300"
          initial={{ y: -100, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Our
        </motion.h2>
        <motion.h3
          className="text-[32px] sm:text-[48px] font-extrabold leading-[1.2] sm:leading-[57.6px] tracking-normal globalColor mb-8 sm:mb-12"
          initial={{ y: -100, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          Latest News
        </motion.h3>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          {newdData.length > 1 && ( // Only show arrows if more than one item
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              <div
                className="cursor-pointer absolute sm:left-[-30px] top-[-10px] sm:top-1/2 sm:-translate-y-1/2 left-[calc(10%-30px)] rounded-full z-50 border-none" // z-50 to be above cards
                onClick={() => setActiveIndex((prev) => (prev - 1 + newdData.length) % newdData.length)}
              >
                <Image
                  src="/logo/left.svg"
                  alt="Left Arrow"
                  width={24}
                  height={24}
                  className="text-white w-[40px] sm:w-full"
                />
              </div>
            </motion.div>
          )}

          {/* News Cards */}
          <motion.div
            className="relative w-full h-[300px] sm:h-[500px] max-w-[800px] md:mt-0 mt-12" // Container for the stack
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative h-full w-full"> {/* Ensure this inner div takes full space */}
              {newdData?.map((item, index) => {
                // Calculate position based on index relative to activeIndex
                const position = getCardPosition(index, activeIndex, newdData.length);

                return (
                  <motion.div
                    key={item._id || index}
                    // Apply absolute positioning and centering transforms
                    className="absolute left-[50%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-lg" // Changed left-[45%] to left-[50%]
                    variants={cardVariants}
                    initial="hidden" // Start hidden
                    animate={position} // Animate to calculated position (active, next, etc.)
                    onClick={() => {
                      // Allow clicking on 'next' or 'nextNext' to bring them to front
                      if (position === "next") {
                        setActiveIndex((prev) => (prev + 1) % newdData.length);
                      } else if (position === "nextNext") {
                        setActiveIndex((prev) => (prev + 2) % newdData.length);
                      }
                      // Optional: If you want any non-active card click to navigate
                      // if (index !== activeIndex) setActiveIndex(index);
                    }}
                    style={{
                      // Make non-active cards clickable
                      cursor: position !== "active" ? "pointer" : "default",
                      width: "100%", // Adjust width if needed, e.g., 80% of max-w-[700px]
                      height: "100%", // Adjust height if needed, e.g., 100% of h-[400px]
                      maxWidth: "7000px", // Example: 80% of 700px
                      maxHeight: "350px", // Example: 100% of 400px
                      transformOrigin: "center", // Ensure scaling happens from the center
                    }}
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={item.featureImage || "/placeholder.svg"}
                        alt={item.heading}
                        className="w-full h-full object-cover" // Ensure image covers the div
                      />
                      {/* Overlay and Text */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6 text-left"> {/* Adjusted padding and gradient */}
                        {/* Content appears only on the active card for clarity */}
                        {position === 'active' && (
                          <>
                            <Link href={`/news/${item._id}`} passHref legacyBehavior>
                              <a className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 rounded-md">
                                <h4 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 text-white ">
                                  {item.heading}
                                </h4>
                              </a>
                            </Link>
                            <div className="flex gap-2 text-xs sm:text-sm text-gray-300"> {/* Adjusted text size */}
                              <span>
                                {new Date(item.updatedAt).toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "long",
                                  year: "numeric",
                                })}
                              </span>
                            </div>
                          </>
                        )}
                        {/* Optionally add a subtle indicator or different style for non-active cards */}
                        {position !== 'active' && (
                          <div className="absolute inset-0 bg-black/30"></div> // Example: darker overlay for non-active
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Arrow */}
          {newdData.length > 1 && ( // Only show arrows if more than one item
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isVisible ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              <div
                className="cursor-pointer absolute sm:right-[-60px] top-[-10px] sm:top-1/2 sm:-translate-y-1/2 right-[calc(75%-20px)] rounded-full border-none z-50" // z-50 to be above cards
                onClick={() => setActiveIndex((prev) => (prev + 1) % newdData.length)}
              >
                <Image
                  src="/logo/right.svg"
                  alt="Right Arrow"
                  width={24}
                  height={24}
                  className="text-white w-[40px] sm:w-full"
                />
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex justify-start sm:justify-center mt-8 sm:mt-12 relative">
        <Link href="/news" className="relative">
          <Button className="relative cursor-pointer buttogGradientBG hover:bg-[#45a049] text-[14px] sm:text-[16px] px-6 sm:px-7 py-4 sm:py-8 text-white rounded-[10px] z-10">
            Explore all News
          </Button>
        </Link>
      </div>
      </div>
    </section>
  );
};

export default News;