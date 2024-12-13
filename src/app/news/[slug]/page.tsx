"use client";

import { usePathname } from "next/navigation"; // Import usePathname hook
import { useEffect, useState } from "react";
import { NewsPage } from "@/components/news";

export default function News() {
  const pathname = usePathname(); // Get the full pathname of the current URL
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    // Extract the last segment of the pathname (slug)
    const slugFromPath = pathname?.split("/").pop(); // Get the last part of the path
    if (slugFromPath) {
      setSlug(slugFromPath); // Set the slug
    }
  }, [pathname]); // Re-run the effect when pathname changes

  if (!slug) {
    return <div>Loading...</div>; // Show loading state until slug is available
  }

  // Pass the slug as a prop to the NewsPage component
  return <NewsPage slug={slug} />;
}
