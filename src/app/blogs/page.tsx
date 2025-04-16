"use client";
import CardBlog from "@/components/blogs/CardBlog";
import BreadCrumb from "@/components/reusable/BreadCrumb";
import { HeroResusable } from "@/components/reusable/HeroReusable";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import Link from "next/link";
import { useState } from "react";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";
import { useGetBlogsQuery } from "@/store/blogs";

const navTrain = [
  { link: "/", label: "Home", id: "a1" },
  { link: "/blogs", label: "Blogs", id: "a2" },
  { link: "/blogs", label: "View All", id: "a3" },
];

function getRandomBlogs(blogs: any[], count: number) {
  const shuffled = [...blogs].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const page = ({ searchParams }: { searchParams: ReadonlyURLSearchParams }) => {
  const tab = searchParams ? new URLSearchParams(searchParams).toString() : "";

  const [currentPage, setCurrentPage] = useState<number>(1);

  // Use RTK Query hook to fetch blogs
  const { data: blogsAllData, isLoading } = useGetBlogsQuery({
    page: currentPage,
    limit: 10,
  });

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  const trendingBlogs = getRandomBlogs(blogsAllData?.blog || [], 4);
  const recommendedBlogs = getRandomBlogs(blogsAllData?.blog || [], 4);

  return (
    <div className="min-h-screen">
      <HeroResusable
        title="What's New?"
        description="Stay up-to-date with Everything about EmergeX related."
        image={blogsAllData?.blog?.[0]?.bannerImage ?? "/news/intro.png"}
        className="bg-gradient-to-r from-black/0 to-black/90"
        textColor="white"
      />
      {isLoading && (
        <div className="flex text-center items-center w-full justify-center mt-5">
          <Loader />
        </div>
      )}

      {blogsAllData && (
        <SectionWrapper>
          <div className="flex flex-col md:flex-row md:justify-between gap-5">
            <div className="w-full md:w-[60%]">
              <BreadCrumb navTrainData={navTrain} />

              <div className="w-full mt-8">
                <CardBlog
                  data={blogsAllData?.blog?.[1]}
                  list={false}
                  styleBox="rounded-[26px] aspect-video"
                  styleHeading="text-[16px] md:text-[36px]"
                  curveIconStyle="w-[30%]"
                  dateButtonStyle="w-[25%] top-2 left-2 h-[11%]"
                  imageStyle="rounded-[26px]"
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
                {(tab === "trending" ? trendingBlogs : recommendedBlogs).map(
                  (e: any, i: number) => (
                    <CardBlog
                      data={e}
                      key={i}
                      list={true}
                      styleHeading="text-[14px] font-[400] md:font-semibold lg:text-base"
                      styleBox="aspect-square max-w-[150px]"
                      curveIconStyle="w-[60%]"
                      dateButtonStyle="w-[45%] left-2 h-[15%] text-[8px]"
                      imageStyle="rounded-[14px]"
                    />
                  )
                )}
              </div>
              <div className="md:hidden flex flex-col gap-4 mt-8">
                {blogsAllData?.blog?.map((e: any, i: number) => (
                  <CardBlog
                    key={i}
                    data={e}
                    list={false}
                    curveIconStyle="w-[60%]"
                    dateButtonStyle="w-[45%] left-2 h-[15%] text-[8px]"
                    imageStyle="rounded-[26px]"
                  />
                ))}
                {isLoading && (
                  <div>
                    Data Loading ....{" "}
                    <span>
                      <Loader />
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </SectionWrapper>
      )}
      {blogsAllData && (
        <SectionWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[0] md:gap-x-[20px] lg:gap-x-[34px] gap-y-[100px]">
            {blogsAllData?.blog?.map((e: any, i: number) => (
              <CardBlog
                key={i}
                data={e}
                list={false}
                styleHeading="text-[14px] lg:text-[16px]"
                styleBox="aspect-square max-w-[270px]"
                styleCard="items-start max-w-[270px] mx-auto"
                curveIconStyle="w-[40%]"
                dateButtonStyle="w-[32%] left-2 "
                imageStyle="rounded-[26px]"
              />
            ))}
          </div>
          {isLoading && (
            <div className="flex text-center items-center w-full justify-center">
              <Loader />
            </div>
          )}
        </SectionWrapper>
      )}

      {Array.isArray(blogsAllData?.blog) && blogsAllData.blog.length >= 10 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <Button
            onClick={() => handlePagination(currentPage - 1)}
            disabled={!blogsAllData?.previousPage}
            className="px-4 py-2 bg-[#3DA229B3] text-white rounded-md hover:bg-[#3DA229] "
          >
            Previous
          </Button>
          <div>
            <span className="text-lg font-semibold">{`Page ${currentPage} of ${
              blogsAllData?.pages?.length || 1
            }`}</span>
          </div>
          <Button
            onClick={() => handlePagination(currentPage + 1)}
            disabled={!blogsAllData?.nextPage}
            className="px-4 py-2 bg-[#3DA229B3] text-white rounded-md hover:bg-[#3DA229]"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default page;
