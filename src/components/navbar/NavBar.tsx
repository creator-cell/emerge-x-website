import { navList } from "@/enums/Navbar/navbarlist";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between rounded-[20px] shadow-customNavbarShadow px-10 py-6 sticky top-0 mx-4 mt-4 z-40 bg-white">
      <div className="w-[191px] h-auto">
        <Image src={"/logo/main-logo.png"} alt="" width={200} height={70} />
      </div>

      <ul className=" hidden md:flex items-center gap-4 lg:gap-[45px]  ">
        {navList?.map((e, i) => (
          <li
            key={e.label + i}
            className=" hover:text-customGreen text-md lg:text-[25px]"
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
    </div>
  );
};

export default NavBar;
