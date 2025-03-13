"use client";

import Image from "next/image";
import { HeroResusable } from "../reusable/HeroReusable";
import { NewsGrid } from "./NewsGrid";
import SectionWrapper from "../reusable/SectionWrapper";
import BreadCrumb from "../reusable/BreadCrumb";
import { useMemo } from "react";
import { useGetNewsQuery } from "@/store/news";

const responseImage = "/services/Response.jpg";

interface News {
  _id: string;
  heading: string;
  mainDescription: string;
  description1: string;
  description2: string;
  finalDescription: string;
  heroBanner: string;
  featureImage: string;
  subFeatureImage1: string;
  subFeatureImage2: string;
  createdAt: string;
}

export const NewsPage = ({ slug }: { slug: string }) => {
  const { data: newsData, isLoading, error } = useGetNewsQuery({ page: 1, limit: 10 });

  const newsItem = useMemo(() => {
    return newsData?.news?.find((item: News) => item._id === slug);
  }, [newsData, slug]);

  const latestNews = useMemo(() => {
    if (!newsData?.news || !newsItem) return [];

    return newsData.news
      .filter((item: News) => item._id !== newsItem._id)
      .sort((a: News, b: News) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 3);
  }, [newsData, newsItem]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error || !newsItem) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <p className="text-xl text-gray-600">News item not found</p>
      </div>
    );
  }

  const {
    createdAt,
    heading,
    description1,
    description2,
    mainDescription,
    featureImage,
    subFeatureImage1,
    subFeatureImage2,
    heroBanner,
  }: News = newsItem;

  const navTrain = [
    { link: "/", label: "Home", id: "a1" },
    { link: "/news", label: "News", id: "a2" },
    { link: `/news/${slug}`, label: heading, id: "a4" },
  ];

  const formatDate = (dateString: string) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options as any);
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <HeroResusable image={heroBanner} title={heading} date={formatDate(createdAt)} />

      {/* Breadcrumb */}
      <SectionWrapper>
        <BreadCrumb navTrainData={navTrain} />

        {/* Main Content */}
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8">
          <div className="prose max-w-none">
            <p className="text-4xl font-bold text-gray-800">{heading}</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <h2 className="text-4xl font-semibold text-gray-400 mb-6 max-w-sm">What Happened</h2>
          <Image
            src={featureImage || responseImage}
            alt="Feature"
            width={600}
            height={400}
            className="rounded-lg w-full"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <h2 className="text-xl leading-[44px] font-semibold text-gray-400 mb-6 lg:max-w-sm">
            {mainDescription}
          </h2>
          <p className="text-lg text-gray-600">{description1}</p>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-4 grid-cols-2">
          <Image
            src={subFeatureImage1 || responseImage}
            alt="Sub Feature 1"
            width={600}
            height={400}
            className="rounded-lg w-full min-h-[385px]"
          />
          <Image
            src={subFeatureImage2 || responseImage}
            alt="Sub Feature 2"
            width={600}
            height={400}
            className="rounded-lg w-full min-h-[385px]"
          />
        </div>
        <p className="mt-6 text-lg text-gray-600">{description2}</p>
      </SectionWrapper>

      {/* Related News */}
      <SectionWrapper>
        <h2 className="text-4xl font-semibold mb-8 text-center text-gray-900">You may also like</h2>
        <NewsGrid news={latestNews} />
      </SectionWrapper>
    </div>
  );
};

export default NewsPage;
