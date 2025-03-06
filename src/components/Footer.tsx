"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Footer() {
  const pathname = usePathname()
  return (
    <footer className={`bg-black text-gray-400 py-16 px-4 ${pathname !== "/" ? "mt-8" : ""}`}>
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Left Section: About */}
        <div className="flex flex-col items-start md:items-start">
          <p className="max-w-md blueColor text-[14px]">
          EmergeX will assist you to better understand and manage workplace safety by integrating hazards and incident reporting with investigations, actions, and metrics reporting.
          </p>
          <div className="flex gap-4 mt-6">
      <Link href="#" className="text-yellow-500 hover:text-[#4CAF50] transition-colors">
        {/* Facebook Logo */}
        <Image
          src="/logo/f.png" // Assuming the image is stored in the public folder
          alt="Facebook"
          width={24} // Size of the icon
          height={24}
        />
      </Link>
      
      <Link href="#" className="text-yellow-500 hover:text-[#4CAF50] transition-colors">
        {/* Twitter Logo */}
        <Image
          src="/logo/t.png" // Twitter logo
          alt="Twitter"
          width={24} // Size of the icon
          height={24}
        />
      </Link>
      
      <Link href="#" className="text-yellow-500 hover:text-[#4CAF50] transition-colors">
        {/* Instagram Logo */}
        <Image
          src="/logo/i.png" // Instagram logo
          alt="Instagram"
          width={24} // Size of the icon
          height={24}
        />
      </Link>
      
      <Link href="#" className="text-yellow-500 hover:text-[#4CAF50] transition-colors">
        {/* LinkedIn Logo */}
        <Image
          src="/logo/l.png" // LinkedIn logo
          alt="LinkedIn"
          width={24} // Size of the icon
          height={24}
        />
      </Link>
    </div>

          <div className="mt-6 text-[14px]">
            <p>Copyright © 2025 EmergeX</p>
          </div>
        </div>

        {/* Center Section: Links (Now Properly Centered) */}
        <div className="flex flex-col items-center">
          <ul className="space-y-2">
            <h3 className="blueColor text-[16px] font-semibold mb-4">Links</h3>

            <li>
              <Link href="#about" className="hover:text-[#4CAF50] transition-colors text-[14px]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-[#4CAF50] transition-colors text-[14px]">
                Services
              </Link>
            </li>
            <li>
              <Link href="#blogs" className="hover:text-[#4CAF50] transition-colors text-[14px]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#news" className="hover:text-[#4CAF50] transition-colors text-[14px]">
                News
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact (Properly Aligned) */}
        <div className="flex flex-col items-center md:items-end">
          <div className="space-y-4">
            <h3 className="tblueColor text-[16px] font-semibold mb-4">Contact us</h3>

            <p className="flex items-center gap-2 text-[14px]">
              <Phone className="h-5 w-5" />
              +923183561921
            </p>
            <p className="flex items-center gap-2 text-[14px]">
              <Mail className="h-5 w-5" />
              info@datacore.com.sa
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

