import About from "@/components/home/about/About";
import Hero from "@/components/home/hero/Hero";
import LetestBlogs from "@/components/home/letest-blogs/LetestBlogs";
import News from "@/components/home/news/News";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About/>
      <LetestBlogs/>
      <News/>
    </div>
  );
}
