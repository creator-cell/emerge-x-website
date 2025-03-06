"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, Volume2, VolumeX, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import ModalAnimation from "./reusable/ModalAnimation"

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true); // State to control the sound
  const videoRef = useRef<HTMLVideoElement | null>(null); // Ref to the video element

  // Function to toggle sound on the video
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted); // Update the mute state
    }
  };
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px 0px" })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);


  return (
    <div className={`relative ${isMenuOpen ? "overflow-hidden" : ""}`}>
      <section className="relative min-h-screen flex items-center justify-center text-center py-32 px-4">
        {/* Background Image with Dark Overlay */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted} // Set initial mute state to true
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* <div className="absolute bottom-10 right-10 z-10">
          <Button
            onClick={toggleMute}
            className="bg-[#4CAF50] hover:bg-[#45a049] text-white p-2 rounded-full"
          >
            {isMuted ? (
              <VolumeX size={24} />
            ) : (
              <Volume2 size={24} />
            )}
          </Button>
        </div> */}

        {openModal && (
          <ModalAnimation
            isVisible={openModal}
            onClose={() => {
              setModalVisible(false);
              setOpenModal(false);
            }}
          />
        )}



        {/* Hero Content (Lower z-index than mobile menu) */}
        <motion.div
          ref={ref}
          className="relative z-10 max-w-5xl mx-auto text-white px-4 text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-7xl font-semibold leading-[58.09px] tracking-normal text-center">
            <span className="block mb-4">Empowering excellence</span>
            <span className="block">with over <span className="text-[#4CAF50]">50 Modules</span></span>
          </h1>

          <p className="text-base md:text-lg font-light leading-[25.2px] tracking-normal text-center text-white mt-6 mb-12">
            Comprehensive solutions tailored to your needs: Explore our wide range of  <br />services designed to empower your
            success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="buttogGradientBG hover:bg-[#45a049] text-white py-6 rounded-[10px]"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Book a demo
            </Button>
            <Link href="/contact-us">
            <Button size="lg" variant="outline" className="border-white text-white bg-transparent py-6 rounded-[10px]">
              Contact us
            </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Hero