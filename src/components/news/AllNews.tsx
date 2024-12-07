import { NewsGrid } from "./NewsGrid";
import { HeroResusable } from "../reusable/HeroReusable";
import BreadCrumb from "../reusable/BreadCrumb";
import SectionWrapper from "../reusable/SectionWrapper";

interface NewsItem {
  title: string;
  date: string;
  image: string;
  slug: string;
}

export const AllNewsPage = () => {
  const newsItems: NewsItem[] = Array(7).fill({
    title: "Hidden Danger: Old Gas Pipes in Hobart And Launceston",
    date: "December 23 2024",
    image: "/news/image.png",
    slug: "hidden-danger-old-gas-pipes",
  });

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
        image="/news/hero.png"
        description="Stay up-to-date with Everything about EmergeX related"
        textColor="white"
        className="absolute inset-0 bg-gradient-to-r from-white/0 to-black/90"
      />

      {/* Breadcrumb */}

      {/* News Grid */}
      <SectionWrapper>
        <BreadCrumb navTrainData={navTrain} />
        <NewsGrid news={newsItems} />
      </SectionWrapper>
    </main>
  );
};
