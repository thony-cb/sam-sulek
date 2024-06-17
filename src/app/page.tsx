"use client";
import CardCarousel from "@/components/CardCarousel";
import PreLoader from "@/components/PreLoader";
import usePreloaderStore from "@/lib/AnimationStore";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const { isActive, setIsActive } = usePreloaderStore();

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
      // Scroll the page really fast for 3 seconds
      const scrollInterval = setInterval(() => {
        window.scrollBy(0, 100); // Adjust the value to control the scroll speed
      }, 10); // Adjust the interval time to control the scroll frequency
      document.body.style.overflow = "hidden";
      const stopScrollingTimeout = setTimeout(() => {
        document.body.style.overflow = "auto";
        clearInterval(scrollInterval); // Stop scrolling after 3 seconds
      }, 1500);

      return () => {
        document.body.style.overflow = "auto";
        clearInterval(scrollInterval);
        clearTimeout(stopScrollingTimeout);
      };
    }
  }, [isActive]);

  return (
    <div className="h-screen w-full">
      <AnimatePresence>{isActive ? <PreLoader /> : null}</AnimatePresence>
      <CardCarousel />
    </div>
  );
}
