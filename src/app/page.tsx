import About from "@/components/home/about/About";
import AllServices from "@/components/home/all-services/AllServices";
import Hero from "@/components/home/hero/Hero";
import LetestBlogs from "@/components/home/letest-blogs/LetestBlogs";
import News from "@/components/home/news/News";

export default function Home() {
  return (
    <div >
      <Hero />
      <About />
      <AllServices />
      <LetestBlogs />
      <News />
    </div>
  );
}
