import { cn } from "@/lib/utils";
import React from "react";
interface SectionWrappertypes {
  children: React.ReactNode;
  className?:string;
}
const SectionWrapper: React.FC<SectionWrappertypes> = ({ children,className }) => {
  return <div className= {cn(`container mt-32`,className)}>{children}</div>;
};

export default SectionWrapper;
