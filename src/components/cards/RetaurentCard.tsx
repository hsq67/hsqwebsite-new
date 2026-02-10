import React from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.webp";
export default function ComingSoonCard() {
  return (
    <div className=" w-full sm:w-[60%]  ">
      <div className="relative w-full  bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Top left gradient glow */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-yellow-500/20 via-yellow-500/5 to-transparent rounded-full blur-3xl"></div>

        {/* Bottom right gradient glow */}
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-yellow-500/20 via-yellow-500/5 to-transparent rounded-full blur-3xl"></div>

        {/* Decorative corner emblem */}
        <motion.div
          className="absolute top-4 left-4 w-12 h-12 opacity-80"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <img src={logo} alt="logo" />
          {/* <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
            />
            <path
              d="M50 20 L55 40 L75 45 L57 57 L60 78 L50 68 L40 78 L43 57 L25 45 L45 40 Z"
              fill="#d4af37"
            />
          </svg> */}
        </motion.div>

        {/* Main content */}
        <div className="relative z-10 px-8 py-16 text-center">
          {/* Restaurant text */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-white Tuesdaynight text-2xl lg:text-4xl "
              //   style={{ fontFamily: "cursive" }}
            >
              Restaurant
            </p>
          </motion.div>

          {/* Coming Soon text */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className=" text-2xl lg:text-5xl  text-white poppins-bold tracking-wider">
              <span className="text-white">COMING</span>
              <span className="text-[#D7AB4E] ml-2">SOON</span>!
            </h1>
          </motion.div>

          {/* Decorative underline with animation */}
          <div className="flex justify-center items-center mb-12">
            <motion.div
              className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Loading bar container */}
          <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            {/* Animated loading bar */}
            <motion.div
              className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-full"
              animate={{ x: ["-100%", "400%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0,
              }}
            />
          </div>
        </div>

        {/* Bottom glow effect */}
        <motion.div
          //   className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#] to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
