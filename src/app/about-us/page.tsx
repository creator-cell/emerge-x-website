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
  const visioncards = [0,1,2]
  const visionCardsData = [
    {
      title: "Experience",
      description:
        "Leveraging years of expertise to innovate and enhance personal safety.",
    },
    {
      title: "Innovation",
      description:
        "A skilled team working relentlessly to advance wearable safety systems.",
    },
    {
      title: "Commitment",
      description:
        "Striving to develop wearable technology that ensures swift emergency response.",
    },
    {
      title: "Protection",
      description:
        "Bringing peace of mind by monitoring health and ensuring fast intervention.",
    },
    {
      title: "Empowerment",
      description: "Developing wearable tech solutions to enhance personal health safety globally.",
    },
    {
      title: "Safety",
      description: "Dedicated to creating technologies that safeguard health in real-time.",
    },
  ];
  const trustedCompanis = [0, 1, 2, 3, 4, 5];
  return (
    <div className=" min-h-screen">
      <HeroResusable
        title="Journey of Innovation and excellence"
        description="From humble beginnings to industry leadership, we have continuously pushed boundaries to deliver innovative solutions"
        image="/services/About US.jpg"
        className="bg-gradient-to-r from-black/10 to-black/90"
        textColor="white"
      />
      <SectionWrapper>
        <BreadCrumb navTrainData={navTrain} />

        <div className="mt-8 space-y-20 md:space-y-28">
          <div>
            <Headings
              label="Our Vision"
              heading="Pioneering the future of wearable technology for a safer tomorrow."
            />

            <div className=" grid grid-cols-1 sm:grid-cols-3  gap-x-4 gap-y-10 ">
              {visionCardsData?.map((e, i) => (
                <OurVisionCards
                  title={e.title}
                  description={e.description}
                  key={i}
                />
              ))}
            </div>
          </div>

          <div>
            <Headings
              label="Our Mission"
              heading="Focused on delivering real-time health monitoring and emergency response solutions."
            />
            <div className="flex items-center justify-center">
              <div className="  w-full">
                <Image
                  src={"/services/About US.jpg"}
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

            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-12 md:gap-8 ">
              {visioncards?.map((e, i) => (
                <OurteamCard key={i} />
              ))}
            </div>
          </div>
          {/* 
          <div>
            <h2 className=" text-greyishblack text-xl text-center">
              Trusted top companies
            </h2>

            <div className="flex flex-wrap justify-center gap-16 mt-10">
              {trustedCompanis?.map((e, i) => (
                <div key={i}>
                  <div className="w-[120px] sm:w-[140px] ">
                    <Image
                      src={"/logo/main-logo.png"}
                      alt=""
                      width={150}
                      height={70}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default page;
