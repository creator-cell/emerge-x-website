"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()
  const navLinks = [
    // { name: "Home", path: "/" },
    { name: "About", path: pathname === "/" ? "#about" : "/about-us" },
    { name: "Services", path: pathname === "/" ? "#services" : "/services/1" },
    { name: "Blogs", path: pathname === "/" ? "#blogs" : "/blogs" },
    { name: "News", path: pathname === "/" ? "#news" : "/news" },
  ];
  return (
    <footer className={`bg-black text-gray-400 py-16 pt-28 px-4 ${pathname !== "/" ? "mt-8" : ""}`}>
      <div className="container lg:max-w-5xl  grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Left Section: About */}
        <div className="flex flex-col items-start md:items-start">
          <p className="md:max-w-md blueColor text-[14px] md:text-start text-center">
            EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions, and metrics reporting.
          </p>
          <div className="flex gap-6 mt-6 md:w-auto w-full justify-center items-center">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/people/Emerge-X/61570986143648/" className="text-yellow-500 hover:text-[#4CAF50] transition-colors">
              {/* Facebook Logo */}
              <Image
                src="/logo/f.png" // Assuming the image is stored in the public folder
                alt="Facebook"
                width={24} // Size of the icon
                height={24}
              />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/EmergeXTech" className="text-yellow-500 hover:text-[#4CAF50] transition-colors">
              {/* Instagram Logo */}
              <Image
                src="/x.svg" // Instagram logo
                alt="twitter"
                width={24} // Size of the icon
                height={24}
              />
            </Link>



            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/emergextech?igsh=YjZkYXY0Ym9kZjds" className="text-yellow-500 hover:text-[#4CAF50] transition-colors">
              {/* Instagram Logo */}
              <Image
                src="/logo/i.png" // Instagram logo
                alt="Instagram"
                width={24} // Size of the icon
                height={24}
              />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/techemerge-x/" className="text-yellow-500 hover:text-[#4CAF50] transition-colors">
              {/* LinkedIn Logo */}
              <Image
                src="/logo/l.png" // LinkedIn logo
                alt="LinkedIn"
                width={24} // Size of the icon
                height={24}
              />
            </Link>
          </div>
          <div className="mt-6 md:block hidden text-[14px]">
          <p>Copyright © 2025 EmergeX</p>
        </div>


        </div>

        {/* Center Section: Links (Now Properly Centered) */}
        <div className="flex  flex-col items-center text-[#9D9D9D]">
          <p className="blueColor font-semibold mb-7 md:ml-[-30px]">Links</p>
          <ul className="space-y-5 flex flex-col">
            {navLinks.map((link:any) => (
              // <li key={link.name}>
                <Link href={link.path} className="hover:text-[#4CAF50]  transition-colors  font-light">
                  {link.name}
                </Link>
              // </li>
            ))}
          </ul>
        </div>


        {/* Right Section: Contact (Properly Aligned) */}
        <div className="flex flex-col items-center md:items-start text-[#9D9D9D]">
          <div className="space-y-4">
            <h3 className="tblueColor text-[16px] font-semibold mb-4">Contact us</h3>

            <p className="flex items-center gap-2 text-[14px] ">
              <Phone className="h-5 w-5" />
              +971 55 544 0210
            </p>
            <p className="flex items-center gap-2 text-[14px]">
              <Mail className="h-5 w-5" />
              info@emerge-x.com
            </p>
          </div>
        </div>
        <div className="mt-6 md:hidden block text-[14px]">
          <p>Copyright © 2025 EmergeX</p>
        </div>
      </div>

    </footer>
  )
}

