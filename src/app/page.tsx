import About from "@/components/home/about/About";
import AllServices from "@/components/home/all-services/AllServices";
import Contact from "@/components/home/contactus/Contact";
import Hero from "@/components/home/hero/Hero";
import LetestBlogs from "@/components/home/letest-blogs/LetestBlogs";
import News from "@/components/home/news/News";

export default function Home() {
  return (
    <div  className=" space-y-20 md:space-y-0">
      <Hero />
      <About />
      <AllServices />
      <LetestBlogs />
      <News />
      <Contact/>
    </div>
  );
}
