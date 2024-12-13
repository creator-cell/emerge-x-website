import { cn } from "@/lib/utils";
import React from "react";
interface SectionWrappertypes {
  children: React.ReactNode;
  className?: string;
}
const SectionWrapper: React.FC<SectionWrappertypes> = ({ children, className }) => {

  return <section className={cn(` text-greyishblack`, className)}>{children}</section>;

};

export default SectionWrapper;
