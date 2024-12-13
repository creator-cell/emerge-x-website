import React from "react";
import { PiShieldCheckFill } from "react-icons/pi";

interface VisionCardProps {
  title: string;
  description: string;
}

const OurVisionCards: React.FC<VisionCardProps> = ({  title, description }) => {
  return (
    <div className=" mx-auto border max-w-[235px] w-full rounded-[24px]  border-[#222222] max-h-[267px] h-full py-[40px] px-[20px]">
      <div className=" flex flex-col gap-2 text-[#4B4B4B]">
        <span className="text-[29px]">
          <PiShieldCheckFill />
        </span>

        <h2 className=" text-xl  ">{title || ""}</h2>
        <p className=" text-sm">
         {description || ""}
        </p>
      </div>
    </div>
  );
};

export default OurVisionCards;
