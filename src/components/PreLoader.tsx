"use client";
import React, { useEffect, useState } from "react";
import SamSVG from "./SamSVG";
import { motion, Variants } from "framer-motion";
import { Button } from "./ui/button";
import usePreloaderStore from "@/lib/AnimationStore";
import { AnimatedWord } from "./AnimatedWord";
import { useMediaQuery } from "@/lib/useMediaQuery";
// import { useMediaQuery } from "usehooks-ts";

const PreLoader: React.FC = () => {
  const { setIsActive } = usePreloaderStore();
  const [isMuted, setIsMuted] = useState(true);
  const heights = {
    small: ["0%", "10%", "50%", "60%", "50%", "40%", "0%"],
    large: ["0%", "10%", "50%", "90%", "50%", "40%", "0%"],
  };

  // const isMedium = useMediaQuery("(min-width: 768px)");
  const isLarge = useMediaQuery("(min-width: 480px)");

  const handleMuteToggle = () => {
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    const audio = document.getElementById("intro-audio") as HTMLAudioElement;
    if (audio) {
      audio.muted = isMuted;
      audio.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
      console.log(isLarge);
      audio.addEventListener("ended", () => {
        setIsActive(false);
      });

      return () => {
        audio.removeEventListener("ended", () => {
          setIsActive(false);
        });
      };
    }
  }, [isMuted]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen z-50  w-full fixed flex flex-col items-center justify-center bg-black"
    >
      <div className="h-full w-full">
        <motion.div
          key="background"
          className="h-full bg-primary origin-bottom w-full"
          animate={{
            height: isLarge ? heights.small : heights.large,
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
          }}
        ></motion.div>
      </div>
      <motion.div
        variants={AnimatedButtonAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute -translate-y-1/2 top-[50%] left-[50%]  flex items-center justify-center z-10  -translate-x-1/2"
      >
        <Button
          variant={"ghost"}
          className=""
          onClick={() => setIsActive(false)}
        >
          [ Enter ]
        </Button>
      </motion.div>
      <SamSVG className="absolute scale-[40%] md:scale-[60%] lg:scale-[100%]" />
      <h1 className="text-[8rem] lg:text-[12rem] tracking-[-0.6rem] lg:tracking-[-1.4rem] absolute left-10 lg:bottom-40 top-40">
        <AnimatedWord word="Sam" />
      </h1>
      <h1 className="absolute text-[8rem] lg:text-[12rem] tracking-[-0.6rem] lg:tracking-[-1.4rem] right-10 lg:bottom-0 bottom-20">
        {" "}
        <AnimatedWord word="Sulek" />
      </h1>
      <audio id="intro-audio" src="/audio/SamSulekIntro.m4a" autoPlay />
      <button
        onClick={handleMuteToggle}
        className="absolute bottom-28 lg:bottom-10 left-10 text-white"
      >
        {isMuted ? "Unmute" : "Mute"}
      </button>
    </motion.div>
  );
};
export default PreLoader;

// Define the animation variants
const AnimatedButtonAnimation: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeIn", delay: 5, duration: 0.4 },
  },
  exit: {
    opacity: "40%",
    y: -300,
    transition: { ease: "easeOut", duration: 3 },
  },
};
