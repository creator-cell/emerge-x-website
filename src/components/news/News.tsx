import Image from "next/image";
import Link from "next/link";
import { HeroResusable } from "../reusable/HeroReusable";
import { NewsGrid } from "./NewsGrid";
import SectionWrapper from "../reusable/SectionWrapper";
import BreadCrumb from "../reusable/BreadCrumb";
import { newsItemsData } from "./AllNews";

interface NewsItem {
  title: string
  date: string
  image: string
  slug: string
}


const image = {
  title: "Hidden Danger: Old Gas Pipes In Hobart And Launceston",
  date: "December 23, 2024",
  image: "/news/news-hero.png",
  slug: "hidden-danger-old-gas-pipes"
};

export const newsItems: NewsItem[] = [
  {
    title: "Offshore crane safety systems",
    date: "16 Dec 2016",
    image: "/services/About US.jpg",
    slug: "offshore-crane-safety-systems",
  },
  {
    title: "BSEE: Heat-related Illnesses occurring offshore",
    date: "16 Oct 2023",
    image: "/services/Preparedness.jpg",
    slug: "bsee-heat-related-illnesses-occurring-offshore",
  },
  {
    title: "Offshore tank container rigging failure",
    date: "1 Nov 2011",
    image: "/services/Prevention.jpg",
    slug: "offshore-tank-container-rigging-failure",
  },
];
  
export const NewsPage = ({ slug }: { slug: string }) => {
  const newsItem = newsItemsData.find((item) => item.slug === slug);
  if (!newsItem) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <p className="text-xl text-gray-600">News item not found</p>
      </div>
    );
  }
  const {
    D1Data, D2Image, D2Data, D3Title, D3Data, D4Image1, D4Image2, D4Data,title,date,image
  } = newsItem;

  const navTrain = [
    { link: "/", label: "Home", id: "a1" },
    { link: "/news", label: "News", id: "a2" },
    {
      link: `/news/${slug}`,
      label: title,
      id: "a4",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <HeroResusable image={image} title={title} date={date} />

      {/* Breadcrumb */}
     

      {/* Main Content */}
      <div>
        <SectionWrapper>
        <BreadCrumb navTrainData={navTrain} />
            <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8">
              <div></div>
              <div className="prose max-w-none">
                <p className="text-4xl text-bold text-gray-800">
                  {D1Data}
                </p>
              </div>
            </div>
        </SectionWrapper>
         
        <SectionWrapper>
          <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <h2 className="text-4xl font-semibold text-gray-400 mb-6 max-w-sm">What Happened</h2>
              <div>
                <Image
                src={D2Image}
                alt="Feedback System"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
             </div>
            
          </div>
        </SectionWrapper>
      
        <SectionWrapper>
          <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <h2 className="text-xl leading-[44px] font-semibold text-gray-400 mb-6 lg:max-w-sm md:max-w-sm sm:max-w-full">
              {D3Title}
            </h2>
            <div className="grid gap-10">
              <p className="text-lg text-gray-600">
               {D3Data}
              </p>
             
            </div>
          </div>
          </SectionWrapper>
        
          <SectionWrapper>
            <div className="w-full">
                {/* <h2 className="text-4xl font-semibold text-gray-400 mb-6 max-w-sm">What Happened</h2> */}
              <div>
                <div className="grid gap-4 grid-cols-2">
                  <Image
                    src={D4Image1}
                    alt="Feedback System"
                    width={600}
                    height={400}
                    className="rounded-lg w-full min-h-[385px]"
                  />
                  <Image
                    src={D4Image2}
                    alt="Feedback System"
                    width={600}
                    height={400}
                    className="rounded-lg w-full min-h-[385px]"
                    />
                </div>
                <p className="mt-6 text-lg text-gray-600">
                   {D4Data}
                </p>
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper>
            <div className="">
              <h2 className="text-4xl font-semibold mb-8 text-center text-gray-900">You may also like</h2>
              <NewsGrid news={newsItems}/>
            </div>
          </SectionWrapper>
      </div>
    </div>
  );
};

export default NewsPage;