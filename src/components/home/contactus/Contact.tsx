"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useInView, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

export default function Contact() {
  const [email, setEmail] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: "-100px 0px" })

  return (
    <>
      <section className="py-24 md:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bGglobalColor rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-normal mb-4 leading-[28.8px] tracking-[4%] text-center text-gray-300">
              We&apos;d love to hear from you.
            </h2>
            <h3 className="text-5xl font-bold mb-6 leading-[52.8px] tracking-[4%] text-center text-gray-300">
              Contact us!
            </h3>
            <p className="text-lg font-normal leading-[26.28px] tracking-[0%] text-center mb-8 text-gray-300">
              Reach out to us with any questions or feedback—we're here to <br /> help and happy to connect!
            </p>

            {/* Flex container adjusted for mobile responsiveness */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white !text-black py-6 rounded-[12px] border-none"
              />
              <Link href="/contact-us">

                <Button className="contactBgButton hover:bg-[#2a2a2a] text-white py-6 px-6">
                  Let's connect
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image container with mobile responsiveness */}
      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto mb-8"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Image scaling to be responsive on mobile */}
        <div className="w-full sm:w-[50%] mx-auto overflow-hidden">
          <Image
            src="/image/emergex.png" // Use the correct path in your public folder
            alt="EmergeX"
            layout="responsive"
            width={1280}
            height={700}
            objectFit="cover"
            className="object-cover"
          />
        </div>
      </motion.div>
    </>
  )
}
