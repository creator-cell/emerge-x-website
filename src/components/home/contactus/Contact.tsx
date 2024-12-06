import SectionHeading from "@/components/reusable/SectionHeading";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import React from "react";

const Contact = () => {
    return (
        <>
            <div className="bg-white">
                <SectionWrapper>
                    <SectionHeading text="Contact Us" />
                    <div className="mt-10 bg-[#3DA229] text-[36px] text-white xl:h-[414px] lg:h-[400px] md:h-[350px] sm:h-[300px] h-[250px] text-center flex items-center justify-center rounded-[56px] cursor-pointer transition-[border-radius] duration-[4000ms] ease-in-out hover:rounded-[220px]">
                        Get in touch with us today
                    </div>
                </SectionWrapper>
            </div>

        </>
    );
};

export default Contact;
