import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

interface BreadCrumbItem {
  link: string | null;
  label: string;
  id: string;
}

interface BreadCrumbPropsTypes {
  navTrainData: BreadCrumbItem[];
}

const BreadCrumb: React.FC<BreadCrumbPropsTypes> = ({ navTrainData }) => {
  return (
    <div className="flex items-center flex-wrap">
      {navTrainData?.map((e, i) => (
        <div key={e.id} className="flex items-center">
          {e.link ? (
            <Link href={e.link}>
              <span
                className={`text-xs md:text-base hover:text-customGreen text-nowrap ${
                  i + 1 === navTrainData.length
                    ? "text-customGreen"
                    : "text-black"
                }`}
              >
                {e.label}
              </span>
            </Link>
          ) : (
            <span
              className={`text-xs md:text-base text-nowrap cursor-default ${
                i + 1 === navTrainData.length
                  ? "text-customGreen"
                  : "text-gray-500"
              }`}
            >
              {e.label}
            </span>
          )}
          {i < navTrainData.length - 1 && (
            <span className="mx-2 text-sm text-gray-400">
              <FaAngleRight />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
