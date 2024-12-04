import React from "react";
import SectionWrapper from "../reusable/SectionWrapper";
import Image from "next/image";
import Link from "next/link";
import { navList } from "@/enums/Navbar/navbarlist";
import FooterSubscribeForm from "./FooterSubscribeForm";

const Footer = () => {
  return (
    <footer className=" border-t-2 border-t-customGreen mt-32 pb-20">
      <SectionWrapper className=" mt-20 md:mt-32">
        <div className=" grid grid-cols-1  lg:grid-cols-3 gap-x-8 gap-y-14 px-4  ">
          <div className=" space-y-5">
            <div className="w-[172px] h-auto">
              <Image
                src={"/logo/main-logo.png"}
                alt=""
                width={200}
                height={70}
              />
            </div>

            <p className="font-[400] text-base">
              EmergeX will assist you to better understand and manage workplace
              safety by integrating hazards and incident reporting with
              investigations, actions and metrics reporting.
            </p>
            <div className=" space-y-4">
              <strong>Subscribe Us</strong>
              <div className="flex items-center gap-3">
                {" "}
                <div className="bg-black rounded-full p-3"></div>{" "}
                <div className="bg-black rounded-full p-3"></div>
                <div className="bg-black rounded-full p-3"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-start lg:justify-center">
            <div>
              <h2 className=" font-semibold text-base mb-5">Useful links</h2>
              <ul className=" space-y-4">
                {navList?.map((e, i) => (
                  <li key={i} className=" hover:text-customGreen text-base">
                    <Link href={e.link}>{e.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div >
            <h2 className=" font-semibold text-base text-center mb-5">
              Subscribe for our newsletter
            </h2>
            <FooterSubscribeForm />
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;
