"use client"

import { useEffect, useRef } from "react"
import Contact from "@/components/home/contactus/Contact"
import LetestBlogs from "@/components/home/letest-blogs/LetestBlogs"
import News from "@/components/home/news/News"
import { useGetBlogsQuery } from "@/store/blogs"
import { useGetNewsQuery } from "@/store/news"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import dynamic from "next/dynamic"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

const AboutUs = dynamic(() => import("@/components/About"), { ssr: false })

const Home = () => {
  const { data } = useGetBlogsQuery({ page: 1, limit: 10 })
  const { data: newsData } = useGetNewsQuery({ page: 1, limit: 5 })
  const containerRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollToPlugin)
    }

    let isScrolling = false
    let scrollTimeout: ReturnType<typeof setTimeout> | undefined

    const handleWheel = (e:any) => {
      // If we're already scrolling, prevent additional scrolls
      if (isScrolling) {
        e.preventDefault()
        return
      }

      // For fast scrolls, take control
      if (Math.abs(e.deltaY) > 40) {
        e.preventDefault()
        isScrolling = true

        // Calculate scroll amount based on direction but with a fixed maximum
        const direction = e.deltaY > 0 ? 1 : -1
        const currentScroll = window.scrollY
        const targetScroll = currentScroll + direction * 400 // Fixed amount

        // Use GSAP for smooth scrolling with easing
        gsap.to(window, {
          scrollTo: {
            y: targetScroll,
            autoKill: false,
          },
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            // Allow scrolling again after animation completes
            scrollTimeout = setTimeout(() => {
              isScrolling = false
            }, 200)
          },
        })
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <div ref={containerRef} className="space-y-4 relative bg-black" id="home">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-950 via-green-900 to-black opacity-30 z-0" />
        <Hero />
        <div className="scroll-mt-10" id="about">
          <AboutUs />
        </div>
      </div>

      <div id="services" className="scroll-mt-20">
        <Services />
      </div>

      <div id="blogs" className="scroll-mt-20">
        {data?.blog && data.blog.length > 0 && <LetestBlogs data={data} />}
      </div>

      <div id="news" className="scroll-mt-20">
        {newsData?.news?.length > 0 && <News newdData={newsData?.news} />}
      </div>

      <Contact />
    </div>
  )
}

export default Home

