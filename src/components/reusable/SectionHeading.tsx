import { cn } from "@/lib/utils";
import React from "react";
interface SectionHeadingtypes {
  text: string;
  className?: string;
}
const SectionHeading: React.FC<SectionHeadingtypes> = ({ className, text }) => {
  return (
    <h2
   
      className={cn(
        ` text-black  font-[700] text-[28px] md:text-[39px] lg:text-[57px] text-center  `,
        className
      )}
    >
      {text}
    </h2>
  );
};

export default SectionHeading;
