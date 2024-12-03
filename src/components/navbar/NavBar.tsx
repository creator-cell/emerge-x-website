"use client";
import { navList } from "@/enums/Navbar/navbarlist";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="flex items-center justify-between rounded-[20px] shadow-customNavbarShadow px-10 py-6 sticky top-0 mx-4 mt-4 z-40 bg-white gap-4">
        <div className="w-[191px] h-auto ">
          <Image src={"/logo/main-logo.png"} alt="" width={200} height={70} />
        </div>

        <ul className=" w-[80%] hidden md:flex items-center gap-3  justify-between  ">
          {navList?.map((e, i) => (
            <li
              key={i}
              className=" hover:text-customGreen text-md lg:text-[28px]"
            >
              <Link href={e.link}>{e.label}</Link>
            </li>
          ))}
          <li>
            {" "}
            <button className=" text-[33px]">
              <GiHamburgerMenu />
            </button>
          </li>
        </ul>
        <button onClick={toggleSidebar} className=" md:hidden text-[33px]">
          <GiHamburgerMenu />
        </button>
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
                    isActive ? "text-[#3DA229]" : "text-[#303030]"
                  }`}
                >
                  {e.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
