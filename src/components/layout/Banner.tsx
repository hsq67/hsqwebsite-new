import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { useState, useEffect } from "react";

const TopBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-l from-[#303030] to-[#111111] text-white border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        {isMobile ? (
          <div className="py-2">
            {/* Top row: Contact Icons only (no text) + Social Icons */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <a
                  href="mailto:hsqtower@gmail.com"
                  className="flex items-center justify-center p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-blue-400 text-lg" />
                </a>
                <a
                  href="tel:+923300049479"
                  className="flex items-center justify-center p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Call"
                >
                  {/* <FaPhoneAlt className="text-green-400 text-lg" /> */}
                  <span className=" text-white">+92 330 004 9479</span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-1">
                <a
                  href="https://www.instagram.com/hsqtowers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/hsq.towers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@hsqtower"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok size={18} />
                </a>
                {/* <a
                  href="#"
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube size={18} />
                </a> */}
              </div>
            </div>

            {/* Bottom row: Winter Offer */}
            <motion.div
              className="w-full text-center"
              animate={{
                opacity: [1, 0.7, 1],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="inline-block w-full bg-white/10 px-3 py-2 rounded-full text-xs poppins-bold">
                ❄️ Winter Exclusive –{" "}
                <span className="text-yellow-300 poppins-bold">20% OFF</span>
              </span>
            </motion.div>
          </div>
        ) : (
          /* Desktop Layout */
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 py-2">
            {/* Left: Contact Info */}
            <div className="flex items-center gap-4 text-xs sm:text-sm">
              <a
                href="mailto:hsqtower@gmail.com"
                className="flex items-center gap-1.5 hover:text-blue-300 transition-colors duration-200"
              >
                <FaEnvelope className="text-blue-400 text-sm sm:text-base" />
                <span className="text-sm">hsqtower@gmail.com</span>
              </a>
              <a
                href="tel:+923300049479"
                className="flex items-center gap-1.5 hover:text-blue-300 transition-colors duration-200"
              >
                <RiWhatsappFill
                  size={20}
                  className="text-green-400 sm:text-base"
                />
                <span className="text-sm">+92 330 04 91479</span>
              </a>
            </div>

            {/* Center: Winter Exclusive */}
            <motion.div
              className="sm:absolute sm:left-[500px] sm:-translate-x-1/2 text-sm sm:text-base poppins-semibold tracking-wide"
              animate={{
                opacity: [1, 0.7, 1],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="bg-white/10 px-4 py-1.5 rounded-full whitespace-nowrap">
                ❄️ Winter Exclusive –{" "}
                <span className="text-yellow-300">20% OFF</span>
              </span>
            </motion.div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="https://www.instagram.com/hsqtowers/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/hsq.towers/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@hsqtower"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
              {/* <a
                  href="#"
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube size={20} />
                </a> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBanner;
