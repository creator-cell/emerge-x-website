
import Image from "next/image";
import React from "react";

interface OurteamCardProps {

  image: any;
  designation: string;
  name: string;
}
const OurteamCard: React.FC<OurteamCardProps> = ({
  image,
  designation,
  name,

}) => {
  return (
    <div className="  max-w-[235px] w-[267px] mx-auto space-y-4 ">
      <div className=" mx-auto  rounded-[24px]  shadow-md max-h-[267px] h-[267px] overflow-hidden">
        <Image
          src={image}
          alt="img"
          width={300}
          height={600}
          className=" h-auto"
        />
      </div>
      <div className=" space-y-2">
        <p className="text-center text-xs text-customGreen">{designation}</p>
        <h2 className=" text-greyishblack text-center text-base font-semibold">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default OurteamCard;
