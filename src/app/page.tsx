"use client";

import Contact from "@/components/home/contactus/Contact";
import LetestBlogs from "@/components/home/letest-blogs/LetestBlogs";
import News from "@/components/home/news/News";
import { useGetBlogsQuery } from "@/store/blogs";
import { useGetNewsQuery } from "@/store/news";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import dynamic from "next/dynamic";
import { useLenis, ReactLenis } from 'lenis/react'

const AboutUs = dynamic(() => import("@/components/About"), { ssr: false });


const Home = () => {

    const lenis = useLenis(({ scroll }) => {

    })

    const { data } = useGetBlogsQuery({ page: 1, limit: 10 });
    const { data: newsData } = useGetNewsQuery({ page: 1, limit: 5 });

    return (
        <ReactLenis root>
            <div className="space-y-4 relative  bg-black" id="home">
                <div className="relative">
                    <Hero />
                    <div className="scroll-mt-10 relative" id="about">
                        <div className="absolute top-[12%] left-[230px] w-[798px] h-[798px] bg-[#3DA229] opacity-20 backdrop-blur-3xl backdrop-brightness-75 blur-[120px] rounded-full"></div>
                        <AboutUs />
                    </div>
                </div>
                <div id="services" className="scroll-mt-20 relative">
                    <div className="absolute top-0 -left-[12%] size-[908px]  bg-[#3DA229] opacity-20 backdrop-blur-3xl backdrop-brightness-75 blur-[120px] rounded-full"></div>
                    <Services />
                </div>

                <div id="blogs" className="scroll-mt-20 relative">
                    <div className="absolute top-0 -right-[12%] size-[908px]  bg-[#3DA229] opacity-20 backdrop-blur-3xl backdrop-brightness-75 blur-[120px] rounded-full"></div>

                    {data?.blog && data.blog.length > 0 && <LetestBlogs data={data} />}
                </div>
                <div id="news" className="scroll-mt-20 max-sm:pt-16 relative">
                    {newsData && newsData?.news?.length > 0 && (
                        <News newdData={newsData?.news} />
                    )}
                </div>
                <Contact />
            </div>
        </ReactLenis>
    );
}

export default Home;
