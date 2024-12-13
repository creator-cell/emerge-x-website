import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
// import icon from "./blog/Subtract.svg"
import Image from "next/image";

export interface BlogsData {
  id: number;
  title: string;
  slug: string;
  image: string;
  content: string;
  heading: string;
  details: string;
  list1: string;
  list2: string;
  details2: string;
  details3: string;
}

interface CardBlogTypes {
  list: boolean;
  styleHeading?: string;
  styleDate?: string;
  styleBox?: string;
  styleCard?: string;
  data?: Partial<BlogsData>;
  curveIconStyle?: string;
  dateButtonStyle?:string;
}
const CardBlog: React.FC<CardBlogTypes> = ({
  list,
  styleHeading,
  styleDate,
  styleBox,
  styleCard,
  data,
  curveIconStyle,
  dateButtonStyle
}) => {
  return (
    <Link
      href={`/blogs/${data?.id}`}
      className={cn(
        ` w-full flex gap-4 items-center    ${list ? "flex-row" : "flex-col"}`,
        styleCard
      )}
    >
      <div
        className={cn(
          ` ${
            list ? "w-[30%] " : " w-full "
          }  rounded-[14px] bg-[#D9D9D9] relative`,
          styleBox
        )}
      >

{/* <svg  className={cn(` absolute top-0 left-0 z-20 w-[60%] `, curveIconStyle)} width="162" height="73" viewBox="0 0 162 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  className="border-4 border-red-700" fill-rule="evenodd" clip-rule="evenodd" d="M161.5 0H0V73H0.0028397C0.210403 58.8196 11.7702 47.3882 26 47.3882H123.181C136.267 47.3882 146.875 36.78 146.875 23.6941V14.625C146.875 6.54785 153.423 0 161.5 0Z" fill="white"/>
</svg> */}
        <Image
          src={"/blogs/Subtract.svg"}
          alt="Subtract Icon"
          width={280}
          height={400}
          className={cn(` absolute top-0 left-0 z-20 w-[60%] `, curveIconStyle)}
        />

        <Image
          src={data?.image || ""}
          alt="Subtract Icon"
          fill
          className="w-full object-cover "
        />
        <button className={cn(`absolute z-20 top-[1px] left-[7px] w-[80px] h-[25px] bg-green-500 text-white rounded-tl-[10px] rounded-br-[15px] text-[12px]`,dateButtonStyle)}>
          13-12-2024
        </button>
      </div>
      <div className={`${list ? " w-[60%] h-fit" : "w-full"}`}>
        <p className={cn(" text-customGreen text-xs font-[500]", styleDate)}>
          Dec 23,2024
        </p>
        <h2 className={cn(" text-greyishblack  font-[600]", styleHeading)}>
          {data?.title}
        </h2>
      </div>
    </Link>
  );
};

export default CardBlog;
