"use client";
import CardCarousel from "@/components/CardCarousel";
import PreLoader from "@/components/PreLoader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 7000);

    return () => {};
  }, []);

  return (
    <div className="h-screen w-full">
      <AnimatePresence>{isLoading ? <PreLoader /> : null}</AnimatePresence>
      <CardCarousel />
    </div>
  );
}
