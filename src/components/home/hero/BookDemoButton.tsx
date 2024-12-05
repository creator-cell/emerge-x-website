"use client";
import ModalAnimation from "@/components/reusable/ModalAnimation";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

interface BookDemoButtonTpes {
  rightArrow: boolean;
  className?: string;
}
const BookDemoButton: React.FC<BookDemoButtonTpes> = ({
  rightArrow,
  className,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className={cn(
          ` bg-[#222720] text-white rounded-full flex items-center   `,
          className
        )}
      >
        <span >Book a Demo</span>

        {rightArrow && (
          <span className=" bg-customGreen rounded-full w-[58px] h-[58px] text-2xl flex items-center justify-center ">
            <FaArrowRight color="#FFFFFF" />
          </span>
        )}
      </button>

      {openModal && <ModalAnimation isVisible={openModal}/>}
    </>
  );
};

export default BookDemoButton;
