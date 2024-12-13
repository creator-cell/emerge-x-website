import BreadCrumb from "@/components/reusable/BreadCrumb";
import { HeroResusable } from "@/components/reusable/HeroReusable";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import FrequentlyaskedQuestions from "@/components/services/FrequentlyaskedQuestions";
import ImageHoverEffect from "@/components/services/ImageHoverEffect";
import SingleServiceSliderSection from "@/components/services/SingleServiceSliderSection";
import Image from "next/image";
import React from "react";

const page = () => {
  const navTrain = [
    { link: "/", label: "Home", id: "a1" },
    { link: "/", label: "Services", id: "a2" },
    { link: "/services", label: "View All", id: "a3" },
    {
      link: "/services/s1fe24w",
      label: "Mitigation/Prevention",
      id: "a3",
    },
  ];

  return (
    <div className=" min-h-screen">
      <HeroResusable
        title="Mitigation/Prevention"
        description="EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting."
        image="/bg-allservices.png"
        className="bg-gradient-to-r from-black/5 to-black/90"
        textColor="white"
      />

      <SectionWrapper>
        <BreadCrumb navTrainData={navTrain} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mt-8">
          <div className=" flex items-end">
            <div className="w-full  md:w-[50%]">
              <h2 className="text-2xl font-semibold mb-6 max-w-sm">
                What&apos;s New?
              </h2>
              <p className="text-sm  leading-[24px] font-[400]">
                EmergeX will assist you to better understand and manage
                workplace safety by integrating hazards and incident reporting
                with investigations, actions and metrics reporting.
              </p>
            </div>
          </div>
          <div className="prose max-w-none">
            <p className=" text-xl md:text-4xl  text-bold text-greyishblack">
              Did you hear about popular basketball or football teams travelling
              on a private aircraft in groups? Some well-known pop stars,
              dancers, and other performers do the same and fly private with
              their entire team in order to reach the arrival destination.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <div>
        <SectionWrapper>
          <SingleServiceSliderSection />
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mt-8 ">
          <div className=" flex ">
            <div className="w-full  md:w-[50%] ">
              <h2 className="text-2xl font-semibold mb-6 max-w-sm text-greyishblack">
                Innovative Cyber Threats: The Evolution of Attack Techniques
              </h2>
            </div>
          </div>
          <div className="prose max-w-none flex flex-col gap-8">
            <p className=" text-base md:text-lg  text-greyishblack">
              EmergeX will assist you to better understand and manage workplace
              safety by integrating hazards and incident reporting with
              investigations, actions and metrics reporting.EmergeX will assist
              you to better understand and manage workplace safety by
              integrating hazards and incident reporting with investigations,
              actions and metrics reporting.EmergeX will assist you to better
              understand and manage workplace safety by integrating hazards and
              incident reporting with investigations, actions and metrics
              reporting.EmergeX will assist you to better understand and manage
              workplace safety by integrating hazards and incident reporting
              with investigations, actions and metrics reporting.
            </p>
            <p className=" text-base md:text-lg  text-greyishblack">
              Cybercriminals will continue to devise creative and innovative
              techniques to infiltrate systems. This may include leveraging AI
              to craft convincing phishing attacks and exploiting novel
              vulnerabilities.This may include leveraging AI to craft convincing
              phishing attacks and exploiting novel vulnerabilities
            </p>
            <div className="w-full border border-dashed border-black my-10"></div>
            <p className=" text-base md:text-lg leading-[32px] text-greyishblack">
              Cybercriminals will continue to devise creative and innovative
              techniques to infiltrate systems. This may include leveraging AI
              to craft convincing phishing attacks and exploiting novel
              vulnerabilities.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <ImageHoverEffect />
      </SectionWrapper>
      <SectionWrapper>
        <FrequentlyaskedQuestions />
      </SectionWrapper>
    </div>
  );
};

export default page;
