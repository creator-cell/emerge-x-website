"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "./ui/button"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { MserviceHero } from "@/assets/services/Metegation"
import { servicesImages } from "@/assets/services"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Mitigation/Prevention",
    description:
      "Explore how Emerge-X utilizes AI CCTV Cameras, Wearable Devices, and HSE Management Software to enhance workplace safety, monitor health indicators, and streamline HSE processes. Mitigate risks, ensure compliance, and foster a safer working environment with our innovative solutions.",
    image1: MserviceHero,
    image2: servicesImages.Preparedness,
  },
  {
    id: 2,
    title: "Preparedness",
    description:
      "Enhance your organization's readiness with Emerge-X's comprehensive preparedness solutions, including online and offline training, emergency drill support, and real-time training tracking. Equip your team with essential skills to respond effectively in emergencies and foster resilience.",
    image1: servicesImages.Preparedness,
    image2: servicesImages.recovery,
  },
  {
    id: 3,
    title: "Recovery Service",
    description:
      "Facilitate effective recovery with Emerge-X's comprehensive services, including automated incident reporting, AI-driven root cause analysis, and tailored precautionary measures. Empower your organization to learn, adapt, and strengthen emergency management capabilities post-incident.",
    image1: servicesImages.recovery,
    image2: servicesImages.res,
  },
  {
    id: 4,
    title: "Response Service",
    description:
      "Enhance emergency response efficiency and effectiveness with Emerge-X's integrated hardware solutions. Our platform ensures complete automation, providing real-time access to critical information, enabling prompt and coordinated emergency management to minimize impact and ensure safety.",
    image1: servicesImages.res,
    image2: MserviceHero,
  },
];


export default function Services() {
  const [activeService, setActiveService] = useState(services[0])
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust breakpoint as needed
    }
    handleResize() // Initial check
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Modified to only trigger when 75% of the component is in view (for non-mobile screens)
  const isInView = useInView(ref, {
    once: false,
    amount: isMobile ? 0 : 0.75, // Disable 75% logic for mobile
  })

  // Initial state for animations - start with everything hidden
  const [hasAnimated, setHasAnimated] = useState(false)

  // Update hasAnimated when the component comes into view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  return (
    <section ref={ref} className="py-12 px-4 relative overflow-hidden">
      <div className="relative z-10 max-w-[1336px] mx-auto">
        <div className="flex flex-col md:flex-row md:gap-12 md:ml-40 gap-8 mx-auto">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: "-100vw" }}
                animate={isMobile || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100vw" }} // Always animate on mobile
                exit={{ opacity: 0, x: "100vw" }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: hasAnimated ? 0 : 0.2,
                }}
                className="mb-8"
              >
                <div className="mb-8 md:mb-16">
                  <h2 className="text-2xl md:text-3xl mb-2 text-gray-300">Our</h2>
                  <h3 className="text-[36px] md:text-[48px] text-gray-300 font-extrabold leading-[1.2] md:leading-[57.6px] tracking-normal globalColor">
                    Services
                  </h3>
                </div>
                <h4 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 uppercase text-gray-300">{activeService.title}</h4>
                <p className="text-gray-300 mb-6 md:mb-8">{activeService.description}</p>
                <Link href={`/services/${activeService.id}`}>
                <Button className="buttogGradientBG hover:bg-[#45a049] text-[16px] px-6 md:px-8 py-5 md:py-6 mt-4 md:mt-6 text-white rounded-[10px]">
                  Explore now
                </Button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: "100vw" }}
                animate={isMobile || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: "100vw" }} // Always animate on mobile
                exit={{ opacity: 0, x: "-100vw" }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: hasAnimated ? 0 : 0.4,
                }}
                className="relative"
              >
                <div className="w-[280px] md:w-[500px] h-[400px]">
                  {/* Top Image */}
                  <Image
                    src={activeService.image1 || "/placeholder.svg"}
                    alt={activeService.title}
                    height={375}
                    width={375}
                    className="object-cover rounded-3xl absolute top-0 left-0 z-20"
                  />

                  {/* Bottom Image */}
                  <Image
                    src={activeService.image2 || "/placeholder.svg"}
                    alt={activeService.title}
                    height={300}
                    width={300}
                    className="object-cover rounded-3xl absolute bottom-0 right-0 z-10"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4 mx-4 md:ml-40 md:mx-0">
          {services.map((service) => (
            <button key={service.id} className="text-left" onMouseEnter={() => setActiveService(service)}>
              <div className="space-y-4">
                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#4CAF50]"
                    initial={{ width: "0%" }}
                    animate={{
                      width: activeService.id === service.id ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <span
                  className={`block text-sm font-medium transition-colors ${
                    activeService.id === service.id ? "text-white" : "text-gray-500"
                  }`}
                >
                  {service.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isMobile || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Always animate on mobile
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              delay: hasAnimated ? 0 : 0.6,
            }}
            className="text-[10rem] md:text-[20rem] font-bold text-green-900/20"
          >
            {services.findIndex((service) => service.id === activeService.id) + 1 < 10
              ? `0${services.findIndex((service) => service.id === activeService.id) + 1}`
              : services.findIndex((service) => service.id === activeService.id) + 1}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}