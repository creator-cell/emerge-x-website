"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const FrequentlyAskedQuestions = ({ faq, title }: { faq: any; title: any }) => {
  // Change from single index to array of open indices
  const [openIndices, setOpenIndices] = useState<number[]>([])
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])
  const [contentHeights, setContentHeights] = useState<number[]>([])

  // Calculate heights of content on mount and window resize
  useEffect(() => {
    const calculateHeights = () => {
      const heights =
        faq?.map((_: any, index: number) => {
          const contentEl = contentRefs.current[index]
          if (!contentEl) return 0

          // Temporarily make the element visible to measure it
          const originalStyles = {
            visibility: contentEl.style.visibility,
            position: contentEl.style.position,
            height: contentEl.style.height,
            maxHeight: contentEl.style.maxHeight,
            opacity: contentEl.style.opacity,
            overflow: contentEl.style.overflow,
          }

          contentEl.style.visibility = "hidden"
          contentEl.style.position = "absolute"
          contentEl.style.height = "auto"
          contentEl.style.maxHeight = "none"
          contentEl.style.opacity = "0"
          contentEl.style.overflow = "visible"

          const height = contentEl.scrollHeight

          // Restore original styles
          contentEl.style.visibility = originalStyles.visibility
          contentEl.style.position = originalStyles.position
          contentEl.style.height = originalStyles.height
          contentEl.style.maxHeight = originalStyles.maxHeight
          contentEl.style.opacity = originalStyles.opacity
          contentEl.style.overflow = originalStyles.overflow

          return height
        }) || []

      setContentHeights(heights)
    }

    calculateHeights()
    window.addEventListener("resize", calculateHeights)

    return () => {
      window.removeEventListener("resize", calculateHeights)
    }
  }, [faq])

  // Modified toggle function to handle multiple open sections
  const handleToggle = (index: number) => {
    setOpenIndices((prevOpenIndices) => {
      // Check if the index is already in the array
      if (prevOpenIndices.includes(index)) {
        // If it is, remove it (close the section)
        return prevOpenIndices.filter((i) => i !== index)
      } else {
        // If it's not, add it (open the section)
        return [...prevOpenIndices, index]
      }
    })
  }

  // Helper function to check if a section is open
  const isOpen = (index: number) => openIndices.includes(index)

  return (
    <div>
      <form>
        <div className="flex flex-col md:flex-row justify-between font-semibold text-black text-lg md:text-xl gap-4">
          <div className="w-full md:w-[47%]">
            <p>Frequently asked </p>
            <p>Questions</p>
          </div>

          <div className="w-full md:w-[47%] space-y-5">
            <p>{title}</p>
            <Link href={"/contact-us"}>
              <button className="bg-customGreen text-white text-base rounded-full px-6 py-3 mt-4">
                Ask a Question
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-5 space-y-5">
          {faq?.map((faq: any, index: number) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-2 cursor-pointer rounded transition-colors duration-200"
            >
              <div
                className="flex justify-between items-center cursor-pointer py-2 text-greyishblack"
                onClick={() => handleToggle(index)}
              >
                <label className="font-medium">{faq.question}</label>
                <div className="transition-all duration-300 ease-in-out">
                  {isOpen(index) ? <ChevronUp className="text-customGreen" size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>

              {/* Animation container updated to use isOpen function */}
              <div
                ref={(el: any) => (contentRefs.current[index] = el)}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  height: isOpen(index) ? `${contentHeights[index]}px` : "0px",
                  opacity: isOpen(index) ? 1 : 0,
                  transform: isOpen(index) ? "translateY(0)" : "translateY(-8px)",
                  transitionProperty: "height, opacity, transform",
                  transitionDelay: isOpen(index) ? "0ms, 100ms, 0ms" : "0ms, 0ms, 0ms",
                }}
              >
                <div className="px-3 py-2 mt-1 text-gray-500">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}

export default FrequentlyAskedQuestions
