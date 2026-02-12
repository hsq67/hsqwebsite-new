import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const TopBanner = () => {
  return (
    <div className="fixed mb-20 top-0 left-0 right-0 z-50 bg-gradient-to-l from-[#303030] to-[#111111] text-white py-2 px-4 sm:px-6 lg:px-8 border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <a
              href="mailto:hello@hsq.com"
              className="flex items-center gap-1.5 hover:text-blue-300 transition-colors duration-200"
            >
              <FaEnvelope className="text-blue-400" />
              <span className="hidden text-lg xs:inline">
                hsqtower@gmail.com
              </span>
              <span className="xs:hidden">Email</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-1.5 hover:text-blue-300 transition-colors duration-200"
            >
              <FaPhoneAlt className="text-green-400" />
              <span className="hidden xs:inline">+1 234 567 890</span>
              <span className="xs:hidden">Call</span>
            </a>
          </div>

          {/* Center / Right: Offer + Social Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Blinking Winter Offer */}
            <motion.div
              className="text-sm sm:text-base font-semibold tracking-wide"
              animate={{
                opacity: [1, 0.7, 1],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="bg-white/10 px-3 py-1 rounded-full">
                ❄️ Winter Exclusive –{" "}
                <span className="text-yellow-300">20% OFF</span>
              </span>
            </motion.div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
              <a
                href="#"
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
