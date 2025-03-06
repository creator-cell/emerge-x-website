"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [isModalVisible, setModalVisible] = useState<boolean>(false);

    // Navigation links
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about-us" },
        { name: "Services", path: "/services" },
        { name: "Blogs", path: "/blogs" },
        { name: "News", path: "/news" },
    ];

    return (
        <>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center space-y-6 justify-center z-[100]">
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 right-5 text-white">
                        <X size={32} />
                    </button>

                    {navLinks.map(({ name, path }) => {
                        const sectionId = `#${name.toLowerCase().replace(/\s/g, "")}`;
                        const isActive = pathname === path || (pathname === "/" && name === "Home");

                        return (
                            <Link
                                key={name}
                                href={pathname === "/" && name !== "Home" ? sectionId : path}
                                className={`text-xl ${isActive ? "text-[#4CAF50]" : "text-white"}`}
                                onClick={() => setIsMenuOpen(false)} // ✅ Close menu on click
                            >
                                {name}
                            </Link>
                        );
                    })}

                    <Button className="bg-[#4CAF50] hover:bg-[#45a049] text-white w-40">Book a Demo</Button>
                </div>
            )}

            {openModal && (
                <ModalAnimation
                    isVisible={openModal}
                    onClose={() => {
                        setModalVisible(false);
                        setOpenModal(false);
                    }}
                />
            )}

            {/* Header */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    hasScrolled ? "bg-white shadow-md" : "bg-transparent"
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
                                {navLinks.map(({ name, path }) => {
                                    const sectionId = `#${name.toLowerCase().replace(/\s/g, "")}`;
                                    const isActive = pathname === path || (pathname === "/" && name === "Home");

                                    return (
                                        <NavigationMenuItem key={name}>
                                            {pathname === "/" && name !== "Home" ? (
                                                <Link href={sectionId} legacyBehavior passHref>
                                                    <NavigationMenuLink
                                                        className={`text-[16px] font-[400] transition-colors ${
                                                            isActive
                                                                ? "text-[#4CAF50]"
                                                                : hasScrolled
                                                                ? "text-black hover:text-[#4CAF50]"
                                                                : "text-white hover:text-[#4CAF50]"
                                                        }`}
                                                    >
                                                        {name}
                                                    </NavigationMenuLink>
                                                </Link>
                                            ) : (
                                                <Link href={path} legacyBehavior passHref>
                                                    <NavigationMenuLink
                                                        className={`text-[16px] font-[400] transition-colors ${
                                                            isActive
                                                                ? "text-[#4CAF50]"
                                                                : hasScrolled
                                                                ? "text-black hover:text-[#4CAF50]"
                                                                : "text-white hover:text-[#4CAF50]"
                                                        }`}
                                                    >
                                                        {name}
                                                    </NavigationMenuLink>
                                                </Link>
                                            )}
                                        </NavigationMenuItem>
                                    );
                                })}
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
