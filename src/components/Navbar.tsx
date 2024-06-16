"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      variants={navbarAnimation}
      initial="inactive"
      animate="active"
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
    transition: { ease: "easeIn", delay: 7 },
  },
  inactive: {
    y: -100,
    // backgroundColor: "#fff",
    transition: { duration: 2 },
  },
};
