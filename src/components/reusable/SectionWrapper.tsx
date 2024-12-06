import { cn } from "@/lib/utils";
import React from "react";
interface SectionWrappertypes {
  children: React.ReactNode;
  className?:string;
}
const SectionWrapper: React.FC<SectionWrappertypes> = ({ children,className }) => {
  return <section className= {cn(`container pt-32`,className)}>{children}</section>;
};

export default SectionWrapper;
