import SectionHeading from "@/components/reusable/SectionHeading";
import SectionWrapper from "@/components/reusable/SectionWrapper";
import React from "react";
import Slider from "./Slider";

const News = () => {
  return (
    <SectionWrapper>
      <SectionHeading text="News" />
      <Slider />
    </SectionWrapper>
  );
};

export default News;
