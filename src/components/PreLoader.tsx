"use client";
import React, { useEffect, useState } from "react";
import SamSVG from "./SamSVG";
import { motion, Variants } from "framer-motion";
import { Button } from "./ui/button";
import usePreloaderStore from "@/lib/AnimationStore";
import { AnimatedWord } from "./AnimatedWord";

const PreLoader: React.FC = () => {
  const { setIsActive } = usePreloaderStore();
  const [isMuted, setIsMuted] = useState(true);

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
            height: ["0%", "10%", "50%", "90%", "50%", "40%", "0%"],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            // times: [0, 0.2, 0.3, 0.4, 0.6, 0.8, 1],
            // repeat: 2,
            // repeatDelay: 1,
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
      <SamSVG className="absolute" />
      <h1 className="text-[12rem] tracking-[-1.4rem] absolute left-10 bottom-30">
        <AnimatedWord word="Sam" />
      </h1>
      <h1 className="text-5xl absolute text-[12rem] tracking-[-1.4rem] right-10 bottom-0">
        {" "}
        <AnimatedWord word="Sulek" />
      </h1>
      <audio id="intro-audio" src="/audio/SamSulekIntro.m4a" autoPlay />
      <button
        onClick={handleMuteToggle}
        className="absolute bottom-10 left-10 text-white"
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
