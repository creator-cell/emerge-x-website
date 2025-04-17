"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModalAnimation from "./reusable/ModalAnimation";

// Constants
const ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
  // transition: { duration: 1.2, ease: "easeOut" },
  transition: {
    type: "spring",
    stiffness: 80,
    damping: 12,
    mass: 1,
    ease: "easeOut",
  },
};

const VIDEO_CONFIG = {
  src: "/video/video.mp4",
  type: "video/mp4",
};


const Hero = () => {
  // Refs
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  // State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<string | null>(null);

  // Animation
  const isInView = useInView(sectionRef, {
    margin: "-100px 0px",
    once: true,
  });

  // Event Handlers
  const handleModalToggle = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  const handleVideoError = useCallback((e: Event) => {
    console.error("Video loading failed:", e);
    setVideoError("Failed to load video content");
  }, []);

  // Effects
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement.addEventListener("error", handleVideoError);

    const playVideo = async () => {
      try {
        await videoElement.play();
      } catch (error) {
        console.warn("Video autoplay failed:", error);
        setVideoError("Video playback requires user interaction");
      }
    };

    playVideo();

    return () => {
      videoElement.removeEventListener("error", handleVideoError);
    };
  }, [handleVideoError]);

  // Render
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="h-32 w-full bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 z-20" />

      <section
        ref={sectionRef}
        className="relative flex min-h-screen flex-col items-center justify-center px-4 py-32"
        aria-label="Hero Section"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-10">
          {videoError ? (
            <div className="h-full w-full bg-gray-900" role="alert">
              <p className="sr-only">{videoError}</p>
            </div>
          ) : (
            <div aria-hidden="true">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="h-screen w-full object-cover"
              >
                <source src={VIDEO_CONFIG.src} type={VIDEO_CONFIG.type} />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <ModalAnimation
              isVisible={isModalOpen}
              onClose={handleModalToggle}
            />
          )}
        </AnimatePresence>

        {/* Content */}
        <motion.div
          className="relative -bottom-[20vh] z-30 mx-auto max-w-5xl text-center text-white"
          initial={ANIMATION_VARIANTS.hidden}
          animate={isInView ? ANIMATION_VARIANTS.visible : ANIMATION_VARIANTS.hidden}
          transition={ANIMATION_VARIANTS.transition}

        >
          <h1 className="mb-6 text-2xl font-semibold tracking-normal md:text-[48px] md:leading-[54px]">
            <span className="block text-gray-300 sm:mb-1">
              Empowering excellence
            </span>
            <span className="block text-gray-300">
              with over{" "}
              <span className="text-[#4CAF50]" aria-label="50 Modules">
                50 Modules
              </span>
            </span>
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-base font-light leading-[25.2px] text-white md:text-[18px]">
            Comprehensive solutions tailored to your needs: Explore our wide
            range of services designed to empower your success.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="w-full rounded-[10px] demoButtonGradient py-7 text-white transition-colors hover:bg-[#45a049] sm:w-auto"
              onClick={handleModalToggle}
              aria-label="Book a demo"
            >
              Book a demo
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-[10px] border-white bg-transparent py-7 text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <Link href="/contact-us" aria-label="Contact us">
                Contact us
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;