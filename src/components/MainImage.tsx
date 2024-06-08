"use client";
import { images } from "@/lib/config";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface MainImageProps {
  ImageIndex: number;
}

const MainImage: React.FC<MainImageProps> = ({ ImageIndex }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 20, transform: " translate(-50%,-50%)" },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
    if (captionRef.current) {
      gsap.fromTo(
        captionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.1 }
      );
    }
  }, [ImageIndex]);

  return (
    <div
      ref={imageRef}
      className="absolute flex items-center flex-col gap-2 lg:top-[45%] top-[35%]  left-[50%] -translate-y-1/2 -translate-x-1/2 "
    >
      <Image
        className="lg:max-w-[50vw] max-w-[85vw]  aspect-video"
        src={images[ImageIndex].src}
        alt={images[ImageIndex].alt}
        width={1920}
        height={1080}
      />
      <p ref={captionRef} className="text-sm">
        {images[ImageIndex].title}
      </p>
    </div>
  );
};

export default MainImage;
