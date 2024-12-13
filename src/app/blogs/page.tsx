import CardBlog from "@/components/blogs/CardBlog";
import HeroBlog from "@/components/blogs/HeroBlog";
import BreadCrumb from "@/components/reusable/BreadCrumb";
import { HeroResusable } from "@/components/reusable/HeroReusable";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import Link from "next/link";
import React from "react";
import { ReadonlyURLSearchParams } from "next/navigation";
import { blogs } from "@/components/blogs/blogData";

const navTrain = [
  { link: "/", label: "Home", id: "a1" },
  { link: "/", label: "Blogs", id: "a2" },
  { link: "/blogs", label: "View All", id: "a3" },
];

const page = ({ searchParams }: { searchParams: ReadonlyURLSearchParams }) => {
  const tab = searchParams ? new URLSearchParams(searchParams).toString() : "";

  const trandingData = [0, 2, 3, 4];
  const viewAllBlogsData = [0, 2, 3, 4, 5, 6, 7, 8, 1];

  return (
    <div className="min-h-screen">
      <HeroResusable
        title="What's New?"
        description="Stay up-to-date with Everything 
about EmergeX related."
        image="/news/intro.png"
        className="bg-gradient-to-r from-black/0 to-black/90"
        textColor="white"
      />
      <SectionWrapper>
        <div className="flex flex-col md:flex-row md:justify-between gap-5">
          <div className="w-full md:w-[60%]">
            <BreadCrumb navTrainData={navTrain} />

            <div className="w-full mt-8">
              <CardBlog
                data={blogs[1]}
                list={false}
                styleBox="rounded-[26px] aspect-video"
                styleHeading="text-[16px] md:text-[36px]"
                curveIconStyle="w-[30%]"
                dateButtonStyle="w-[25%] top-2 left-2 h-[11%]"
              />
            </div>
          </div>

          <div className="w-[18rem] md:w-[35%] mx-auto md:mx-0 max-md:hidden">
            <div className="flex items-center gap-5 text-[20px]">
              <Link
                href={"/blogs/?tab=trending"}
                scroll={false}
                className={`${
                  tab === "tab=trending" || tab === ""
                    ? "text-customGreen"
                    : "text-greyishblack"
                }`}
              >
                Trending
              </Link>
              <Link
                href={"/blogs/?tab=recomended"}
                scroll={false}
                className={`${
                  tab === "tab=recomended"
                    ? "text-customGreen"
                    : "text-greyishblack"
                }`}
              >
                Recommended
              </Link>
            </div>

            {/* Trending Section */}
            <div className="hidden md:flex flex-col gap-4 mt-8">
              {blogs.slice(0, 4).map((e, i) => (
                <CardBlog
                  data={e}
                  key={i}
                  list={true}
                  styleHeading="text-[14px] font-[400] md:font-semibold lg:text-base"
                  styleBox="aspect-square max-w-[150px]"
                  curveIconStyle="w-[60%]"
                  dateButtonStyle="w-[45%] left-2 h-[15%] text-[8px]"
                />
              ))}
            </div>
            <div className="md:hidden flex flex-col gap-4 mt-8">
              {blogs.slice(0, 4).map((e, i) => (
                <CardBlog
                  key={i}
                  data={e}
                  list={false}
                  curveIconStyle="w-[60%]"
                  dateButtonStyle="w-[45%] left-2 h-[15%] text-[8px]"
                />
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[0] md:gap-x-[20px] lg:gap-x-[34px] gap-y-[100px]">
          {blogs.map((e, i) => (
            <CardBlog
              key={i}
              data={e}
              list={false}
              styleHeading="text-[14px] lg:text-[16px]"
              styleBox="aspect-square max-w-[270px]"
              styleCard="items-start max-w-[270px] mx-auto"
              curveIconStyle="w-[40%]"
              dateButtonStyle="w-[32%] left-2 "
            />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default page;
