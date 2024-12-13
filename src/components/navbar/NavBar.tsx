"use client";
import { navList } from "@/enums/Navbar/navbarlist";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import BookDemoButton from "../home/hero/BookDemoButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("#home");


  const pathName = usePathname();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const scrollToSection = (id: string) => {
    gsap.to(window, {
      duration: 1, // Duration in seconds
      scrollTo: { y: id, offsetY: 0 }, // Scroll to the section ID
      ease: "power2.inOut", // Easing function for smoothness
    });
    setIsSidebarOpen(false); // Close sidebar when clicking a link
  };


  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navList.map((item) => ({
        id: item.link,
        element: document.querySelector(item.link),
      }));

      sections.forEach((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div className="w-full relative flex items-center justify-center">
        <div className="bg-white flex items-center justify-between rounded-xl md:rounded-2xl lg:rounded-full shadow-customNavbarShadow px-10 py-3 md:py-5 lg:py-4  mx-6  gap-4 w-full  lg:w-[90%]">
          <div className="w-[130px] md:w-[192px] h-auto ">
            <Image
              src={"/logo/main-logo.png"}
              alt=""
              width={200}
              height={70}
            />
          </div>

          <ul className=" sm:w-[80%] lg:w-[60%] max-w-[900px]  hidden md:flex items-center   justify-between ">
            {navList?.map((e, i) => {
              const active = activeSection == e.link;
              return (
                <li
                  key={i}
                  className={`hover:text-customGreen cursor-pointer text-md lg:text-xl ${active ? "text-customGreen" : "text-[#767676]"
                    }`}
                >
                  <div
                    onClick={() => scrollToSection(e.link)}
                  >{e.label}</div>
                </li>
              );
            })}
            <li>
              <BookDemoButton
                rightArrow={false}
                className=" bg-customGreen text-white text-md lg:text-xl rounded-2xl md:py-[12px] sm:w-auto px-[8px]  md:w-[167px] text-md justify-center"
              />
            </li>
          </ul>
          <button onClick={toggleSidebar} className=" md:hidden text-[33px]">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      <div
        className={`bg-white block md:hidden   w-[250px] h-screen fixed left-0 top-0 border-r transition-transform duration-300 ${isSidebarOpen ? "transform-none" : "transform -translate-x-full "
          } lg:transform-none lg:translate-x-0`}
        style={{ zIndex: 3000 }}
      >
        <ul className=" space-y-2 pt-5">
          {navList?.map((e, i) => {
            const isActive = activeSection === e.link;
            return (
              <li
                key={i}
                className=" text-base hover:bg-[#f9fafb]  px-5 py-1.5"
              >
                {" "}
                <div
                  onClick={() => scrollToSection(e.link)}
                  className={`flex items-center gap-[16px] ${isActive ? "text-[#3DA229]" : "text-[#767676]"
                    }`}
                >
                  {e.label}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed w-full h-full bg-gray-800   bg-opacity-25 left-0 top-0   "
          style={{ zIndex: 40 }}
        ></div>
      )}
    </>
  );
};

export default NavBar;
