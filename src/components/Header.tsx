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
            if (
                desktopDropdownRef.current &&
                !desktopDropdownRef.current.contains(event.target as Node) &&
                mobileDropdownRef.current &&
                !mobileDropdownRef.current.contains(event.target as Node)
            ) {
                setTimeout(() => setServicesDropdown(false), 100); // Small delay to prevent instant closing
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    
    
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        { name: "Mitigation/Prevention", path: "/services/1" },
        { name: "Preparedness", path: "/services/2" },
        { name: "Response", path: "/services/3" },
        { name: "Recovery", path: "/services/4" },
    ];

    return (
        <>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center space-y-6 justify-center z-[100]">
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 right-5 text-white">
                        <X size={32} />
                    </button>

                    {navLinks.map(({ name, path }) => (
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
                    <div ref={mobileDropdownRef} className="relative w-full flex flex-col items-center">
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
                                        className="block px-4 py-3 text-black hover:bg-gray-100"
                                    >
                                        {name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white w-40">Book a Demo</Button>
                </div>
            )}

            {/* Header */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${hasScrolled ? "bg-white shadow-md" : "bg-transparent"
                    }`}
            >
                <nav className="container flex items-center justify-between h-16 px-4 max-w-7xl mx-auto">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src={hasScrolled ? "/blacklogo.png" : "/logo/emergelogo.png"}
                            alt="EmergeX Logo"
                            width={150}
                            height={50}
                            className={`${hasScrolled ? "opacity-100" : "opacity-80"}`}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-6">
                        <NavigationMenu>
                            <NavigationMenuList className="flex gap-6">
                                {navLinks.slice(0, 2).map(({ name, path }) => (
                                    <NavigationMenuItem key={name}>
                                        <Link href={path} legacyBehavior passHref>
                                            <NavigationMenuLink
                                                className={`text-[16px] font-[400] transition-colors ${hasScrolled
                                                        ? "text-black hover:text-[#4CAF50]"
                                                        : "text-white hover:text-[#4CAF50]"
                                                    }`}
                                            >
                                                {name}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}

                                {/* Services Dropdown (Desktop) - RIGHT AFTER ABOUT US */}
                                <NavigationMenuItem >
                                <div ref={desktopDropdownRef} className="relative">

                                    <button
                                        onClick={() => setServicesDropdown(!servicesDropdown)}
                                        className={`flex items-center gap-2 text-[16px] font-[400] transition-colors ${hasScrolled
                                                ? "text-black hover:text-[#4CAF50]"
                                                : "text-white hover:text-[#4CAF50]"
                                            }`}
                                    >
                                        Services <ChevronDown size={18} />
                                    </button>

                                    {servicesDropdown && (
                                        <div className="absolute mt-3 w-48 bg-white shadow-lg rounded-lg flex flex-col text-left">
                                            {serviceOptions.map(({ name, path }) => (
                                                <Link key={name} href={path} className="block px-4 py-3 text-black hover:bg-gray-100" onClick={() => setServicesDropdown(false)}>

                                                    {name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                    </div>
                                </NavigationMenuItem>

                                {/* Remaining Nav Links */}
                                {navLinks.slice(2).map(({ name, path }) => (
                                    <NavigationMenuItem key={name}>
                                        <Link href={path} legacyBehavior passHref>
                                            <NavigationMenuLink
                                                className={`text-[16px] font-[400] transition-colors ${hasScrolled
                                                        ? "text-black hover:text-[#4CAF50]"
                                                        : "text-white hover:text-[#4CAF50]"
                                                    }`}
                                            >
                                                {name}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>

                        <Button
                            onClick={() => setOpenModal(true)}
                            className="bg-[#4CAF50] hover:bg-[#45a049] text-white w-[150px] h-[43px] rounded-[20px]"
                        >
                            Book a Demo
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`md:hidden focus:outline-none ${hasScrolled ? "text-black" : "text-white"}`}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>
            </header>
        </>
    );
};

export default Header;
