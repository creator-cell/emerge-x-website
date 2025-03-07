"use client";

import Contact from "@/components/home/contactus/Contact";
import LetestBlogs from "@/components/home/letest-blogs/LetestBlogs";
import News from "@/components/home/news/News";
import { useGetBlogsQuery } from "@/store/blogs";
import { useGetNewsQuery } from "@/store/news";
import Hero from "@/components/Hero";
import AboutUs from "@/components/About";
import Services from "@/components/Services";


const  Home = ()=> {

  // const { data } = useGetBlogsQuery({ page: 1, limit: 10 });
  const { data: newsData } = useGetNewsQuery({ page: 1, limit: 5 });
  // console.log("🚀 ~ Home ~ newsData:", newsData);

  return (
    <div className="space-y-4 relative bg-black" id="home">
      {/* <div  className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-950 via-green-900 to-black opacity-30 z-0" />
        <Hero />
        <div className="" id="about">
          <AboutUs />
        </div>
      </div> */}
      <>
        {/* <div id="services" className="scroll-mt-20">
          <Services />
        </div> */}

        {/* <div id="blogs" className="scroll-mt-20">
          {data?.blog && data.blog.length > 0 && <LetestBlogs data={data} />}
        </div> */}
      </>
      <div id="news" className="scroll-mt-20">
        {newsData && newsData?.news?.length > 0 && (
          <News newdData={newsData?.news} />
        )}
      </div>
      <Contact />
    </div>
  );
}

export default Home;