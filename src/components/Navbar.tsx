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
      className="w-full flex fixed  max-w-[85vw] lg:max-w-[95vw] mx-auto  z-20 text-sm lg:text-lg font-bol flex-row items-center py-4 justify-between"
    >
      <Link className="" href="/">
        Sam Sulek
      </Link>
      <div className="flex flex-row items-center justify-center gap-8">
        <Link href={"/"}>Gallery</Link>
        <Link href="/info">Info</Link>
      </div>
    </motion.nav>
  );
}

const navbarAnimation = {
  active: {
    y: 0,
    backgroundColor: "#f00",
  },
  inactive: {
    y: 10,
    backgroundColor: "#fff",
    transition: { duration: 2 },
  },
};
