"use client"
import { NewsGrid } from "./NewsGrid";
import { HeroResusable } from "../reusable/HeroReusable";
import BreadCrumb from "../reusable/BreadCrumb";
import SectionWrapper from "../reusable/SectionWrapper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { newsData } from "@/store/reducer/news";
import { useEffect } from "react";
import { getApiHelper } from "../helper/apiHelper";

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

  const newsAllData = useSelector((state: RootState) => state.news.newsData)
  const dispatch = useDispatch();


    useEffect(() => {
      getNewsData()
    }, [])
  
  
    const getNewsData = async () => {
      try {
        const response = await getApiHelper('http://localhost:8081/v1/news?page=1&limit=10', "GET");
    
        if (response?.success) {
          dispatch(newsData(response?.data));
          console.log("Blogs Data:", response?.data);
        } else {
          console.error("Failed to fetch blogs:", response?.error);
        }
      } catch (error: any) {
        console.error("API error:", error.error || error.message);
        alert( error.error || error.message);
      }
    };


  const newsItemsData = newsAllData?.news


  const navTrain = [
    { link: "/", label: "Home", id: "a1" },
    { link: "/", label: "News", id: "a2" },
    { link: "/News", label: "View All", id: "a3" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroResusable
        title="What's New?"
        image="/news/intro.png"
        description="Stay up-to-date with Everything about EmergeX related"
        textColor="white"
        className="absolute inset-0 bg-gradient-to-r from-white/0 to-black/90"
      />

      {/* Breadcrumb */}
      <SectionWrapper>
        <BreadCrumb navTrainData={navTrain} />
        <NewsGrid news={newsItemsData} />
      </SectionWrapper>
    </main>
  );
};
