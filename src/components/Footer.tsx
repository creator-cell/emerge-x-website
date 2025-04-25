"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react"; // Removed unused social icons from lucide
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const navLinks = [
    // { name: "Home", path: "/" }, // Keep commented if not needed
    { name: "About", path: pathname === "/" ? "#about" : "/about-us" },
    {
      name: "Services",
      path: pathname === "/" ? "#services" : "/services/mitigation-prevention",
    },
    { name: "Blogs", path: pathname === "/" ? "#blogs" : "/blogs" },
    { name: "News", path: pathname === "/" ? "#news" : "/news" },
  ];

  // Social Links Data (optional: makes it easier to manage)
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/Emerge-X/61570986143648/",
      iconSrc: "/logo/f.png",
    },
    {
      name: "Twitter",
      href: "https://x.com/EmergeXTech",
      iconSrc: "/x.svg", // Assuming this is your Twitter/X icon
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/emergextech?igsh=YjZkYXY0Ym9kZjds",
      iconSrc: "/logo/i.png",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/techemerge-x/",
      iconSrc: "/logo/l.png",
    },
  ];

  return (
    <footer
      className={`bg-black text-gray-400 pt-16 pb-8 px-4 sm:px-6 lg:px-8 ${pathname !== "/" ? "mt-16 md:mt-28" : ""
        }  `}
    >
      <div className="container ">
        <div className="flex flex-col-reverse sm:flex-row gap-10 md:gap-4 lg:gap-6 text-center md:text-left">

          <div className="flex flex-col items-center md:items-start md:w-1/4 lg:w-2/6">
            {/* Removed explicit max-width, let flex handle it */}
            <p className="text-sm text-[#8F949C] mb-6 max-w-[284px] mx-auto md:mx-0"> {/* Use text-sm */}
              EmergeX will assist you to better understand and manage workplace
              safety by integrating hazards and incident reporting with
              investigations, actions, and metrics reporting.
            </p>
            {/* Social links centered on mobile due to parent's items-center, align left on md+ */}
            <div className="flex gap-5 items-center justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.href}
                  className="text-gray-400 hover:text-[#4CAF50] transition-colors"
                  aria-label={social.name} // Added aria-label for accessibility
                >
                  <Image
                    src={social.iconSrc}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="w-6 h-6" // Explicit size
                  />
                </a>
              ))}
            </div>
            <div className="mt-4 max-sm::hidden  text-center text-sm text-gray-500">
              <p>Copyright © {new Date().getFullYear()} EmergeX</p> {/* Dynamic Year & added text */}
            </div>
          </div>

          <div className="flex  items-start md:items-center justify-start  gap-6  md:gap-4 lg:gap-4 w-full">
            {/* Center Section: Links */}
            <div className="flex flex-col items-center md:items-start text-[#818181] md:w-1/4 lg:w-1/6">
              <h3 className="text-base font-semibold mb-4 text-[#9D9D9D]">
                Links
              </h3>
              <ul className="gap-3 flex flex-col text-left">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="hover:text-[#4CAF50] transition-colors text-sm font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section: Contact */}
            <div className="flex flex-col  items-start justify-start md:items-start text-[#9D9D9D] md:w-1/4 lg:w-2/6">
              <h3 className="flex items-center justify-start  text-base font-semibold mb-4 w-full ">
                Contact us
              </h3>
              <div className="space-y-3">
                <p className="flex items-center justify-start  gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  +971 55 544 0210
                </p>
                <p className="flex items-center justify-start  gap-2 text-sm">
                  <Mail className="h-4 w-4" />
                  info@emerge-x.com
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}