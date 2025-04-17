"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroResusableProps {
  image: string;
  title: string;
  date?: string;
  description?: string;
  textColor?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  className?: string;
  shareUrl?: string;
}

const removeInlineStyles = (html: string) =>
  html.replace(/\s?style="[^"]*"/gi, "");


export const HeroResusable: React.FC<HeroResusableProps> = ({
  image,
  title,
  date,
  description,
  facebookUrl = "#",
  instagramUrl = "#",
  linkedinUrl = "#",
  textColor,
  shareUrl,
  className,
}) => {

  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (!shareUrl && typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [shareUrl]);

  const urlToShare = encodeURIComponent(shareUrl || currentUrl);

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`;
  const instagramShare = `https://www.instagram.com/?url=${urlToShare}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${urlToShare}`;
  return (
    <div className="relative h-[450px] md:h-[500px] lg:h-[100vh] w-full overflow-hidden xs:rounded-b-[20px] sm:rounded-b-[40px] md:rounded-b-[80px] lg:rounded-b-[120px]">
      {/* Hero Image */}
      <Image src={image} alt={title} fill className="object-cover" priority />

      {/* Gradient Overlay (from transparent to dark at the bottom) */}
      <div
        className={cn(
          `absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80`,
          className
        )}
      />

      {/* Content container */}
      <div
        className="absolute bottom-0 pb-4 px-10 sm:px-10 w-full sm:bottom-10 
          sm:right-5 md:right-5 lg:right-10 lg:bottom-20 max-w-2xl"
      >
        <h1
          className={`text-2xl sm:text-5xl text-center font-semibold md:text-end text-${textColor || "white"} mb-4`}
        >
          {title}
        </h1>

        <div
          className={`flex items-center text-center sm:justify-center md:text-end lg:text-end gap-2 text-${textColor || "white"} text-base`}
        >
          {description ? (
            <p
            className="mb-4 text-md sm:text-2xl leading-7 text-gray-200"
            dangerouslySetInnerHTML={{
              __html: removeInlineStyles(description),
            }}
          />
          ) : (
            <span className="text-xl leading-6">
              {date} - Share Via
              <Link href={facebookShare} target="_blank">Facebook</Link>,{" "}
              <Link href={instagramShare} target="_blank">Instagram</Link>,{" "}
              <Link href={linkedinShare} target="_blank">LinkedIn</Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
