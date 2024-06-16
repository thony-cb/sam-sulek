"use client";
import CardCarousel from "@/components/CardCarousel";
import PreLoader from "@/components/PreLoader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsActive(false);
  //     document.body.style.cursor = "default";
  //   }, 7000);

  //   return () => {};
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
      document.body.style.cursor = "wait"; // Set cursor to wait

      const cursorTimeout = setTimeout(() => {
        document.body.style.cursor = "default"; // Set cursor to default after 3 seconds
      }, 4000);

      return () => {
        clearTimeout(cursorTimeout);
        document.body.style.overflow = "auto";
        document.body.style.cursor = "default"; // Ensure cursor is reset on cleanup
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isActive]);

  return (
    <div className="h-screen w-full">
      <AnimatePresence>
        {isActive ? <PreLoader setIsActive={setIsActive} /> : null}
      </AnimatePresence>
      <CardCarousel />
    </div>
  );
}
