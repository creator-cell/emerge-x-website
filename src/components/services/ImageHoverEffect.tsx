"use client";
import { footerImagesArra } from "@/app/services/[slug]/page";
import Image from "next/image";
import React, { useState } from "react";

interface ImageHoverEffectProps {
  imageData: footerImagesArra[];
}

const ImageHoverEffect: React.FC<ImageHoverEffectProps> = ({ imageData }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-full flex items-center justify-center gap-2 md:gap-4 overflow-hidden">
      {imageData?.map((e, i) => (
        <div
          onMouseEnter={() => setActiveImage(i)}
          onMouseLeave={() => setActiveImage(0)}
          key={e.id}
          className={`relative transition-all duration-3 rounded-[10px] md:rounded-[20px] overflow-hidden ${
            activeImage === i ? "flex-grow-[2]" : "flex-grow-[0.5]"
          }`}
          style={{
            height: activeImage === i ? "400px" : "400px",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={e.image}
              alt={`image-${e.id}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageHoverEffect;
