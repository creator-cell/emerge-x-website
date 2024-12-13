"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import NavBar from "../navbar/NavBar";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Default to true for visibility on load
  const [isFloatingNav, setIsFloatingNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollY > viewportHeight * 0.5) {
        setIsFloatingNav(true);
      } else {
        setIsFloatingNav(false);
      }

      // Update visibility on load or initial scroll
      if (scrollY < 50) {
        setVisible(true); // Ensure visibility at top of the page
      }
    };

    // Set initial states based on current scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });
  const checked = useSelector((state: RootState) => state.cart.isChecked);


  if (checked) {
    return;
  }
  return (
    <div className="w-full container">
      {!isFloatingNav ? (
        <AnimatePresence>
          <motion.div
            initial={{
              opacity: 1,
              y: 0,
            }}
            animate={{
              y: visible ? 0 : -100,
              opacity: visible ? 1 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
            exit={{
              opacity: 0,
              y: -100,
            }}
            className="w-full fixed top-4 left-0 z-10"
          >
            <NavBar />
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{
              opacity: 1,
              y: -100,
            }}
            animate={{
              y: visible ? 0 : -100,
              opacity: visible ? 1 : 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className={cn(
              "flex  w-full fixed top-3 inset-x-0 mx-auto  z-[5000]  items-center justify-center ",
              className
            )}
          >
            <NavBar />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
