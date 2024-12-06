import Image from "next/image"
import Link from "next/link"
import { NewsGrid } from "./NewsGrid"
import { HeroResusable } from "../reusable/HeroReusable"

interface NewsItem {
  title: string
  date: string
  image: string
  slug: string
}

export const AllNewsPage = () => {
  const newsItems: NewsItem[] = Array(7).fill({
    title: "Hidden Danger: Old Gas Pipes in Hobart And Launceston",
    date: "December 23 2024",
    image: "/news/image.png",
    slug: "hidden-danger-old-gas-pipes"
  })

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroResusable title="What&apos;s New?" image="/news/hero.png" description="Stay up-to-date with Everything about EmergeX related" textColor='white' className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0"/>
  
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-full px-16 pt-16 pb-4 text-sm text-gray-500">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/news" className="hover:text-gray-700">
              News
            </Link>
          </li>
          <li>/</li>
           <Link href="/news" className="hover:text-gray-700">
              All News
            </Link>
        </ol>
      </nav>

      {/* News Grid */}
      <section className="mx-auto w-full max-full px-16 pt-6">
        <NewsGrid news={newsItems}/>
      </section>
    </main>
  )
}

