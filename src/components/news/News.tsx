import Image from "next/image";
import Link from "next/link";
import { HeroResusable } from "../reusable/HeroReusable";
import { NewsGrid } from "./NewsGrid";
import SectionWrapper from "../reusable/SectionWrapper";

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

const newsItems: NewsItem[] = Array(3).fill({
  title: "Hidden Danger: Old Gas Pipes In Hobart And Launceston",
  date: "December 23, 2024",
  image: "/news/image.png",
  slug: "hidden-danger-old-gas-pipes"
})
  
export const NewsPage = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <HeroResusable image={image.image} title={image.title} date={image.date} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4 my-6">
        <nav className="flex flex-wrap gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>/</span>
          <Link href="/news" className="hover:text-gray-900">
            News
          </Link>
          <span>/</span>
          <Link href="/news/view-all" className="hover:text-gray-900">
            View All
          </Link>
          <span>/</span>
          <span className="text-gray-900">Hidden Danger: Old Gas Pipes In Hobart And Launceston</span>
        </nav>
      </div>

      {/* Main Content */}
      <div>
        <SectionWrapper>
            <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div></div>
              <div className="prose max-w-none">
                <p className="text-4xl text-bold text-gray-800">
                  Did you hear about popular basketball or football teams travelling on a private
                  aircraft in groups? Some well-known pop stars, dancers, and other performers do
                  the same and fly private with their entire team in order to reach the arrival
                  destination.
                </p>
              </div>
            </div>
        </SectionWrapper>
         
        <SectionWrapper>
          <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <h2 className="text-4xl font-semibold text-gray-400 mb-6 max-w-sm">What&apos;s New?</h2>
              <div>
                <Image
                src="/news/image8.png"
                alt="Feedback System"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
              <p className="mt-6 text-lg text-gray-600">
                  EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting.
                  EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting.
                  EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting.
                  EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting.
              </p></div>
            
          </div>
        </SectionWrapper>
      
        <SectionWrapper>
          <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <h2 className="text-4xl leading-[44px] font-semibold text-gray-400 mb-6 lg:max-w-sm md:max-w-sm sm:max-w-full">
              Innovative Cyber Threats: The Evolution of Attack Techniques
            </h2>
            <div className="grid gap-10">
              <p className="text-lg text-gray-600">EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations,actions and metrics reporting.
                EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations,actions and metrics reporting.
                EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting.
                EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting.
              </p>
              <p className=" text-lg text-gray-600">
                Cybercriminals will continue to devise creative and innovative techniques to
                infiltrate systems. This may include leveraging AI to craft convincing
                phishing attacks and exploiting novel vulnerabilities.
              </p>
              <p className="text-lg text-gray-600">
                Cybercriminals will continue to devise creative and innovative techniques to
                infiltrate systems. This may include leveraging AI to craft convincing
                phishing attacks and exploiting novel vulnerabilities.
              </p>
            </div>
          </div>
          </SectionWrapper>
        
          <SectionWrapper>
            <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <h2 className="text-4xl font-semibold text-gray-400 mb-6 max-w-sm">What&apos;s New?</h2>
              <div>
                <div className="grid gap-4 grid-cols-2">
                  <Image
                    src="/news/image8.png"
                    alt="Feedback System"
                    width={600}
                    height={400}
                    className="rounded-lg w-full min-h-[385px]"
                  />
                  <Image
                    src="/news/image8.png"
                    alt="Feedback System"
                    width={600}
                    height={400}
                    className="rounded-lg w-full min-h-[385px]"
                    />
                </div>
                <p className="mt-6 text-lg text-gray-600">
                    EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting.
                    EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting.
                    EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting.
                    EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions and metrics reporting.
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