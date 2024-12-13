import SectionHeading from "@/components/reusable/SectionHeading";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="bg-white">
        <Link href={'/contact-us'}>
      
        <div className="pt-14 max-md:px-8 flex justify-center flex-col text-greyishblack">
          <SectionHeading text="Contact Us" />
          <motion.button
            initial={{
              borderRadius: "9px",
            }}
            whileHover={{
              borderRadius: "220px",
            }}
            transition={{ duration: 0.3, stiffness: 100 }}
            className="mt-10  bg-[#3DA229] text-white  text-lg md:text-2xl py-8  px-12 whitespace-nowrap md:px-16  self-center ">
            Get in touch with us today
          </motion.button>
          {/* <motion.div
            whileHover={{
              borderRadius: "220px",
            }}
            transition={{ duration: 0.3, stiffness: 100 }}
            className="mt-10  bg-[#3DA229] texr-[18px] sm:text-[24px] md:text-[36px] text-white xl:h-[214px] lg:h-[200px] md:h-[200px] sm:h-[200px] h-[100px] text-center flex items-center justify-center rounded-[56px] cursor-pointer ">
            Get in touch with us today
          </motion.div> */}
        </div>
        </Link>
      </div>
    </>
  );
};

export default Contact;
