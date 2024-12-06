import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

interface BreadCrumbItem {
  link: string;
  label: string;
  id: string;
}

interface BreadCrumbPropsTypes {
  navTrainData: BreadCrumbItem[];
}
const BreadCrumb: React.FC<BreadCrumbPropsTypes> = ({ navTrainData }) => {
  return (
    <div className="flex items-center">
      {" "}
      {navTrainData?.map((e, i) => (
        <div key={e.id} className="flex items-center">
          <Link href={e.link}>
            {" "}
            <span
              className={` text-xs md:text-base hover:text-customGreen ${
                i + 1 == navTrainData.length
                  ? " text-customGreen"
                  : "text-black"
              }`}
            >
              {" "}
              {e.label}{" "}
            </span>{" "}
          </Link>
          {i < navTrainData.length - 1 && (
            <span className="mx-2 text-sm">
              <FaAngleRight />
            </span>
          )}
        </div>
      ))}{" "}
    </div>
  );
};

export default BreadCrumb;
