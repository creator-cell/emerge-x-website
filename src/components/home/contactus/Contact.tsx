import SectionHeading from "@/components/reusable/SectionHeading";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="bg-white">
        <SectionWrapper className="pb-14">
          <SectionHeading text="Contact Us" />
          <motion.div
            whileHover={{
              borderRadius: "220px",
            }}
            transition={{ duration: 0.3, stiffness: 100 }}
            className="mt-10  bg-[#3DA229] texr-[18px] sm:text-[24px] md:text-[36px] text-white xl:h-[214px] lg:h-[200px] md:h-[200px] sm:h-[200px] h-[100px] text-center flex items-center justify-center rounded-[56px] cursor-pointer ">
            Get in touch with us today
          </motion.div>
          {/* <motion.div
            whileHover={{
              borderRadius: "220px",
            }}
            transition={{ duration: 0.3, stiffness: 100 }}
            className="mt-10  bg-[#3DA229] text-[36px] text-white xl:h-[414px] lg:h-[400px] md:h-[350px] sm:h-[300px] h-[250px] text-center flex items-center justify-center rounded-[56px] cursor-pointer ">
            Get in touch with us today
          </motion.div> */}
        </SectionWrapper>
      </div>
    </>
  );
};

export default Contact;
