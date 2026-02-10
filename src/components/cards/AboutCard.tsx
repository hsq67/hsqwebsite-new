import React, { useEffect, useState, useRef } from "react";
import { useMotionValue, animate, useInView, motion } from "framer-motion";

interface Titleprop {
  total: string;
  title: string;
  icon: React.ReactNode;
}

const AboutCard: React.FC<Titleprop> = ({ total, title, icon }) => {
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  // `once: true` → runs only first time
  // `margin` → triggers a little earlier when scrolling

  // Extract numeric and symbol parts
  const numericPart = parseInt(total.replace(/\D/g, "")); // 3000
  const suffix = total.replace(/[0-9]/g, ""); // "+"

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericPart, {
        duration: 3, // animation speed in seconds
        ease: "easeOut",
        onUpdate: (latest) => setDisplayCount(Math.floor(latest)),
      });

      return controls.stop;
    }
  }, [isInView, total, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }} //start from left
      whileInView={{ x: 0, opacity: 1 }} // apni jagah pe aa jaye
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        w-36 h-36
        rounded-2xl 
        p-4 
        bg-opacity-30 
        backdrop-blur-md
        border
        border-gray-400 
        shadow-lg 
        flex 
        flex-col 
        justify-between 
        relative
        sm:w-64
        2xl:w-80
        2xl:h-44
      "
    >
      {/* Gold Circle Icon */}
      <div
        className="
          absolute 
         top-[-30px]
          xs:top-[-30px]
          md:top-[-35px] 
          left-[20px] 
          w-14 h-14
          md:w-20 md:h-20
          rounded-full 
          bg-primary 
          shadow-xl 
          flex 
          justify-center 
          items-center
        "
      >
        <div className="text-3xl text-black">{icon}</div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col justify-end h-full mt-4">
        <p className="text-white text-4xl cursor-pointer lg:text-5xl hover:text-primary duration-200 ease-out hover:scale-110 poppins-bold mb-2 self-end">
          {displayCount}
          {suffix}
        </p>
        <p className="text-white text-lg lg:text-xl poppins-medium self-end">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export default AboutCard;
