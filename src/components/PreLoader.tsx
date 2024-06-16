"use client";
import React, { useEffect } from "react";
import SamSVG from "./SamSVG";
import { animate } from "framer-motion/dom";
import { useAnimate, usePresence, motion, Variants } from "framer-motion";
import { Button } from "./ui/button";

interface PreLoaderProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const PreLoader: React.FC<PreLoaderProps> = ({ setIsActive }) => {
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
            repeatDelay: 1,
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
        <Word word="Sam" />
      </h1>
      <h1 className="text-5xl absolute text-[12rem] tracking-[-1.4rem] right-10 bottom-0">
        {" "}
        <Word word="Sulek" />
      </h1>
    </motion.div>
  );
};
export default PreLoader;
// Define the interface for the component props
interface AnimatedLetters {
  word: string;
}

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
// Define the animation variants
const AnimatedLetterAnimation: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeIn", duration: 0.4 },
  },
  exit: {
    opacity: "40%",
    y: -300,
    transition: { ease: "easeOut", duration: 3 },
  },
};
// Define the animation variants for the parent
const AnimatedWordAnimation: Variants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 5,
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      duration: 3,
    },
  },
};

// Define the Word component
const Word: React.FC<AnimatedLetters> = ({ word }) => {
  return (
    <motion.span
      key={`${word}`}
      variants={AnimatedWordAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="inline-flex"
    >
      {[...word].map((letter, index) => (
        <motion.span
          key={index}
          variants={AnimatedLetterAnimation}
          className="inline-block" // Ensure spans are inline-block for proper spacing
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
