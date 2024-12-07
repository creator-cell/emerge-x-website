import Headings from "@/components/about/Headings";
import OurteamCard from "@/components/about/OurteamCard";
import OurVisionCards from "@/components/about/OurVisionCards";
import BreadCrumb from "@/components/reusable/BreadCrumb";
import { HeroResusable } from "@/components/reusable/HeroReusable";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import Image from "next/image";
import React from "react";

const page = () => {
  const navTrain = [
    { link: "/", label: "Home", id: "a1" },
    { link: "/about-us", label: "About Us", id: "a2" },
  ];
  const visioncards = [0, 1, 2];
  const trustedCompanis = [0, 1, 2, 3, 4, 5];
  return (
    <div className=" min-h-screen">
      <HeroResusable
        title="Journey of Innovation and excellence"
        description="From humble beginnings to industry leadership, we have continuously pushed boundaries to deliver innovative solutions"
        image="/about-us/hero-about-us.png"
        className="bg-gradient-to-r from-black/10 to-black/90"
        textColor="white"
      />
      <SectionWrapper>
        <BreadCrumb navTrainData={navTrain} />

        <div className="mt-8 space-y-28">
          <div>
            <Headings
              label="Our Vision"
              heading="The ultimate of our success over the years"
            />

            <div className=" grid grid-cols-1 sm:grid-cols-3  gap-x-4 gap-y-6 ">
              {visioncards?.map((e, i) => (
                <OurVisionCards key={i} />
              ))}
            </div>
          </div>

          <div>
            <Headings
              label="Our Mission"
              heading="The ultimate of our success over the years"
            />
            <div className="flex items-center justify-center">
              <div className=" border w-full">
                <Image
                  src={"/about-us/ourmission-banner.png"}
                  alt="banner"
                  width={1800}
                  height={1600}
                />
              </div>
            </div>
          </div>

          <div>
            <Headings
              label="Our Team"
              heading="Together we combine outstanding team"
            />

            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
              {visioncards?.map((e, i) => (
                <OurteamCard key={i} />
              ))}
            </div>
          </div>

          <div>
            <h2 className=" text-xl text-center">Trusted top companies</h2>

            <div className="flex flex-wrap justify-center gap-16 mt-10">
              {trustedCompanis?.map((e, i) => (
                <div key={i}>
                  <Image
                    src={"/logo/main-logo.png"}
                    alt=""
                    width={150}
                    height={70}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default page;
