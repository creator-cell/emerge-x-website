"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import ModalAnimation from "./reusable/ModalAnimation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // For desktop view, only check desktop dropdown ref
      if (window.innerWidth >= 768) {
        if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target as Node)) {
          setServicesDropdown(false)
        }
      }
      // For mobile view, only check mobile dropdown ref
      else {
        if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
          setServicesDropdown(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      // Always keep scroll state true on specific pages
      if (
        pathname === "/contact-us"
        // pathname.startsWith("/services/") ||
        // pathname.startsWith("/blogs") ||
        // pathname.startsWith("/news")
      ) {
        setHasScrolled(true)
      } else {
        setHasScrolled(window.scrollY > 10)
      }
    }

    handleScroll() // Ensure it applies immediately on mount

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const [openModal, setOpenModal] = useState<boolean>(false);

  // Navigation links (excluding services dropdown)
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: pathname === "/" ? "#about" : "/about-us" },
    { name: "Blogs", path: pathname === "/" ? "#blogs" : "/blogs" },
    { name: "News", path: pathname === "/" ? "#news" : "/news" },
  ];

    // Services dropdown items
    const serviceOptions = [
        { name: "Mitigation/Prevention", path: "/services/mitigation-prevention" },
        { name: "Preparedness", path: "/services/preparedness" },
        { name: "Response", path: "/services/response-services" },
        { name: "Recovery", path: "/services/recovery-services" },
    ];

  return (
    <>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center space-y-6 justify-center z-[100]">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 text-white"
          >
            <X size={32} />
          </button>

          {/* Render Home and About first */}
          {navLinks.slice(0, 2).map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className="text-xl text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </Link>
          ))}

          {/* Services Dropdown (for Mobile) */}
          <div
            ref={mobileDropdownRef}
            className="relative w-full flex flex-col items-center"
          >
            <button
              onClick={() => setServicesDropdown(!servicesDropdown)}
              className="flex items-center gap-2 text-xl text-white"
            >
              Services <ChevronDown size={18} />
            </button>

            {servicesDropdown && (
              <div className="mt-2 w-48 bg-white shadow-lg rounded-lg flex flex-col text-center">
                {serviceOptions.map(({ name, path }) => (
                  <Link
                    key={name}
                    href={path}
                    className="block px-4 py-3 text-black "
                    onClick={() => {
                      setIsMenuOpen(false); // Close menu
                      setServicesDropdown(false); // Close dropdown
                    }}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Render remaining links (Blogs, News) */}
          {navLinks.slice(2).map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className="text-xl text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </Link>
          ))}

          <Button
            onClick={() => setOpenModal(true)}
            className="bg-[#4CAF50] hover:bg-[#45a049] text-white w-40"
          >
            Book a Demo
          </Button>
        </div>
      )}

      {/* Header */}
      <header
        className={`fixed top-0 pt-2 left-0 w-full z-50 transition-all duration-300 ${
          hasScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 px-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={hasScrolled ? "/main-logo.png" : "/lsvg.svg"}
              alt="EmergeX Logo"
              width={150}
              height={50}
              className={`${hasScrolled ? "opacity-100" : "opacity-80"}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-12">
                {navLinks.slice(0, 2).map(({ name, path }) => {
                  const isActive = pathname === path && pathname !== "/";
                  return (
                    <NavigationMenuItem key={name}>
                      <Link href={path} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={`text-[16px] font-[400] transition-colors ${
                            hasScrolled
                              ? "text-black hover:text-[#4CAF50]"
                              : "text-white hover:text-[#4CAF50]"
                          } ${isActive ? "font-bold !text-[#4CAF50]" : ""}`}
                        >
                          {name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}

                {/* Services Dropdown (Desktop) - RIGHT AFTER ABOUT US */}
                {/* Services Dropdown (Desktop) - RIGHT AFTER ABOUT US */}
                <NavigationMenuItem>
                  <div
                    ref={desktopDropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <div
                     
                      className={`flex items-center gap-2 text-[16px] font-[400] transition-colors ${
                        hasScrolled
                          ? "text-black hover:text-[#4CAF50]"
                          : "text-white hover:text-[#4CAF50]"
                      } ${
                        pathname.startsWith("/services/") ||
                        pathname === "/services"
                          ? "font-bold !text-[#4CAF50]"
                          : ""
                      }`}
                      onClick={(e) => {
                        // If user clicks the dropdown icon, prevent navigation and toggle dropdown
                        if ((e.target as HTMLElement).closest("svg")) {
                          e.preventDefault();
                          setServicesDropdown((prev) => !prev);
                        }
                        // Otherwise, allow normal link navigation
                      }}
                    >
                      Services{" "}
                      <ChevronDown size={18} className="cursor-pointer" />
                    </div>

                    {servicesDropdown && (
                      <div className="absolute mt-1 w-48 bg-white shadow-lg rounded-lg flex flex-col text-left z-50">
                        {serviceOptions.map(({ name, path }) => {
                          const isActive = pathname === path;
                          return (
                            <Link
                              key={name}
                              href={path}
                              className={`block px-4 py-3 text-black ${
                                isActive ? "font-bold" : ""
                              }`}
                              onClick={() => setServicesDropdown(false)}
                            >
                              {name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </NavigationMenuItem>

                {/* Remaining Nav Links */}
                {navLinks.slice(2).map(({ name, path }) => {
                  const isActive = pathname === path && pathname !== "/";
                  return (
                    <NavigationMenuItem key={name}>
                      <Link href={path} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={`text-[16px] font-[400] transition-colors ${
                            hasScrolled
                              ? "text-black hover:text-[#4CAF50]"
                              : "text-white hover:text-[#4CAF50]"
                          } ${isActive ? "font-bold !text-[#4CAF50]" : ""}`}
                        >
                          {name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              onClick={() => setOpenModal(true)}
              className="bg-[#4CAF50] hover:bg-[#45a049] text-white w-[160px] text-[20px] h-[43px] rounded-[20px]"
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden focus:outline-none ${
              hasScrolled ? "text-black" : "text-white"
            }`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>
      {openModal && (
        <ModalAnimation
          isVisible={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
        />
      )}
    </>
  );
};

export default Header;
