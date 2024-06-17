"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion, useAnimate, useAnimation } from "framer-motion";
import usePreloaderStore from "@/lib/AnimationStore";
import { Button } from "./ui/button";

export default function Navbar() {
  const { isActive } = usePreloaderStore();
  const controls = useAnimation();

  useEffect(() => {
    if (isActive) {
      controls.start("inactive");
    } else {
      controls.start("active");
    }
  }, [isActive, controls]);

  return (
    <motion.nav
      initial="inactive"
      animate={controls}
      variants={navbarAnimation}
      className="w-full flex fixed px-10 z-20 text-sm lg:text-sm font-bol flex-row items-center py-4 justify-between"
    >
      <Link className="" href="/">
        [ Sam Sulek ]
      </Link>

      <div className="flex flex-row items-center justify-center gap-8">
        <Link href={"/"}>[ Gallery ]</Link>
        <Link href="/info">[ Info ] </Link>
      </div>
    </motion.nav>
  );
}

const navbarAnimation = {
  active: {
    y: 0,
    // backgroundColor: "#f00",
    transition: { ease: "easeIn", duration: 0.5 },
  },
  inactive: {
    y: -100,
    // backgroundColor: "#fff",
    transition: { duration: 2 },
  },
};
