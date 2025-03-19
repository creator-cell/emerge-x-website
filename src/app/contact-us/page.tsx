import ContactUsForm from "@/components/contact/ContactUsForm";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import React from "react";

const page = () => {
  return (
    <div className=" min-h-screen  pt-20">
      <SectionWrapper>
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 md:justify-between">
          <div className="  w-full md:w-[35%]">
            <h2 className="text-greyishblack text-base">Contact Us</h2>
            <div className="mt-4">
              <h2 className="text-greyishblack font-semibold text-2xl md:text-3xl">
                Get in touch with us today
              </h2>
              <p className=" text-base text-greyishblack mt-5">
              Reach out to us with any questions or feedback—we're here to help and happy to connect!

              </p>
            </div>
          </div>
          <div className=" w-full md:w-[55%]">
            <ContactUsForm />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default page;
