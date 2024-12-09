"use client";
import { navList } from "@/enums/Navbar/navbarlist";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import BookDemoButton from "../home/hero/BookDemoButton";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  console.log("pathName", pathName);
  return (
    <>
      <div className="w-full fixed top-4 left-0 z-30">
        <div className="w-full relative flex items-center justify-center">
          <div className="flex items-center justify-between rounded-xl md:rounded-2xl lg:rounded-full shadow-customNavbarShadow px-10 py-3 md:py-5 lg:py-4  mx-6   backdrop-blur-lg gap-4 w-full  lg:w-[90%]">
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
                const active = pathName == e.link;
                return (
                  <li
                    key={i}
                    className={`hover:text-customGreen text-md lg:text-xl ${
                      active ? "text-customGreen" : "text-[#767676]"
                    }`}
                  >
                    <Link href={e.link}>{e.label}</Link>
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
      </div>

      <div
        className={`bg-white block md:hidden   w-[250px] h-screen fixed left-0 top-0 border-r transition-transform duration-300 ${
          isSidebarOpen ? "transform-none" : "transform -translate-x-full "
        } lg:transform-none lg:translate-x-0`}
        style={{ zIndex: 3000 }}
      >
        <ul className=" space-y-2 pt-5">
          {navList?.map((e, i) => {
            const isActive = pathName === e.link;
            return (
              <li
                key={i}
                className=" text-base hover:bg-[#f9fafb]  px-5 py-1.5"
              >
                {" "}
                <Link
                  href={e.link}
                  className={`flex items-center gap-[16px] ${
                    isActive ? "text-[#3DA229]" : "text-[#767676]"
                  }`}
                >
                  {e.label}
                </Link>
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
