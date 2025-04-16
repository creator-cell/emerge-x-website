"use client";
import { NewsGrid } from "./NewsGrid";
import { HeroResusable } from "../reusable/HeroReusable";
import BreadCrumb from "../reusable/BreadCrumb";
import SectionWrapper from "../reusable/SectionWrapper";
import { Button } from "../ui/button";
import Loader from "../Loader";
import { useState } from "react";
import { useGetNewsQuery } from "@/store/news";

interface NewsItem {
  title: string;
  date: string;
  image: string;
  slug: string;
  D3Data: string;
  D2Image: string;
  D4Image2: string;
  D4Image1: string;
  D3Title: string;
  D2Data: string;
  D1Data: string;
  D4Data: string;
}

export const AllNewsPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Fetching data using RTK Query
  const { data: newsAllData, isLoading } = useGetNewsQuery
  ({
    page: currentPage,
    limit: 10,
  });

  const newsItemsData = newsAllData?.news ?? [];

  const navTrain = [
    { link: "/", label: "Home", id: "a1" },
    { link: "/news", label: "News", id: "a2" },
    { link: "/news", label: "View All", id: "a3" },
  ];

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= (newsAllData?.totalPages || 1)) {
      setCurrentPage(page);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroResusable
        title="What's New?"
        image={newsItemsData?.[0]?.heroBanner ?? "/news/default-banner.png"}
        description="Stay up-to-date with Everything about EmergeX related"
        textColor="white"
        className="absolute inset-0 bg-gradient-to-r from-white/0 to-black/90"
      />

      {/* Breadcrumb */}
      <SectionWrapper>
        <BreadCrumb navTrainData={navTrain} />

        {/* Loader */}
        {isLoading ? (
          <div className="flex justify-center my-10">
            <Loader />
          </div>
        ) : (
          <>
            {/* News Grid */}
            <NewsGrid news={newsItemsData} />

            {/* Pagination */}
            {newsAllData?.totalPages > 1 && (
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-[#3DA229B3] text-white rounded-md hover:bg-[#3DA229]"
                >
                  Previous
                </Button>

                <span className="text-lg font-semibold">
                  {`Page ${currentPage} of ${newsAllData?.totalPages}`}
                </span>

                <Button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= newsAllData?.totalPages}
                  className="px-4 py-2 bg-[#3DA229B3] text-white rounded-md hover:bg-[#3DA229]"
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </SectionWrapper>
    </main>
  );
};
