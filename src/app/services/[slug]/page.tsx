'use client'
import BreadCrumb from "@/components/reusable/BreadCrumb";
import { HeroResusable } from "@/components/reusable/HeroReusable";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import FrequentlyaskedQuestions from "@/components/services/FrequentlyaskedQuestions";
import ImageHoverEffect from "@/components/services/ImageHoverEffect";
import { servicesData } from "@/components/services/services";
import SingleServiceSliderSection from "@/components/services/SingleServiceSliderSection";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
export interface Faq {
    question: string;
    answer: string;
  }
export interface PreparednessData {
    id: number;
    title: string;
    titledetails: string;
    image: string;
    whatsnew: string;
    whatsnewContent: string;
    heading: string;
    details2: string;
    details3: string;
    faqtitle: string;
    faq: Faq[];
  }
const page = () => {
    const pathname = usePathname(); // Get the full pathname of the current URL
    const [slug, setSlug] = useState<string | null>(null);
    const [allData, setAllData] = useState<PreparednessData[]>([]);
    useEffect(() => {
        console.log(pathname)
        const IdData = pathname?.split("/").pop()
        const AllData = servicesData.filter((e) => e.id == IdData)
        setAllData(AllData)
    }, [pathname]);
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
            {
                allData?.map((data) => {
                    return (
                        <>
                            <HeroResusable
                                title={data?.title}
                                description={data?.titledetails}
                                image={data?.image}
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
                                                {data?.whatsnew}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="prose max-w-none">
                                        <p className=" text-xl md:text-4xl  text-bold text-greyishblack">
                                            {data?.whatsnewContent}
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
                                                {data?.heading}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="prose max-w-none flex flex-col gap-8">
                                        <p className=" text-base md:text-lg  text-greyishblack">
                                            {data?.details2}
                                        </p>

                                        <div className="w-full border border-dashed border-black my-10"></div>
                                        <p className=" text-base md:text-lg leading-[32px] text-greyishblack">
                                            {data?.details3}
                                        </p>
                                    </div>
                                </div>
                            </SectionWrapper>

                            <SectionWrapper>
                                <ImageHoverEffect />
                            </SectionWrapper>
                            <SectionWrapper>
                                <FrequentlyaskedQuestions faq={data?.faq} title={data?.faqtitle} />
                            </SectionWrapper>
                        </>
                    )
                })
            }
        </div>
    );
};

export default page;
