import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface CardBlogTypes {
  list: boolean;
  styleHeading?: string;
  styleDate?: string;
  styleBox?: string;
  styleCard?:string
}
const CardBlog: React.FC<CardBlogTypes> = ({
  list,
  styleHeading,
  styleDate,
  styleBox,
  styleCard
}) => {
  return (
    <div
      className={cn(` w-full flex gap-4 items-center   ${
        list ? "flex-row" : "flex-col"
      }`,styleCard)}
    >
      <div
        className={cn(
          ` ${
            list ? "w-[30%] " : " w-full "
          }  rounded-[14px] bg-[#D9D9D9]`,
          styleBox
        )}
      ></div>
      <Link href={"/blogs/blog1fe24w"} className={`${list ? " w-[60%] h-fit" : "w-full"}`}>
        <p className={cn(" text-customGreen text-xs font-[500]", styleDate)}>
          December 23,2024
        </p>
        <h2 className={cn("   font-[600]", styleHeading)}>
          Hidden Danger: Old Gas Pipes in Hobart and Launceston
        </h2>
      </Link>
    </div>
  );
};

export default CardBlog;
