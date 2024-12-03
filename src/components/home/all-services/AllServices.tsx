import SectionHeading from "@/components/reusable/SectionHeading";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import Image from "next/image";
import React from "react";
import AllServiceSlider from "./AllServiceSlider";

const AllServices = () => {
  return (
    <SectionWrapper>
      <div className="bg-[url('/bg-allservices.png')]  bg-cover bg-center  md:mx-4 relative rounded-xl md:rounded-[56px] overflow-hidden  h-[800px] md:h-[800px] ">
        <div className="w-full h-full bg-gray-800 bg-opacity-50 absolute top-0 right-0  ">
        <div className="w-full relative ">
          <SectionHeading
            text="All Services "
            className="text-white mt-10   "
          />

         

            <AllServiceSlider />
         
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AllServices;
{
  /* <div className="w-full ">
          <Image
            src={"/bg-allservices.png"}
            alt="bg-img"
            height={1500}
            width={1500}
          />
        </div> */
}
