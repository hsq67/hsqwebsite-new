import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
const WhatsAppButton = () => {
  const handleClick = () => {
    // window.open("https://wa.me/03300491479", "_blank");
  };
  return (
    <>
      <motion.button
        onClick={handleClick}
        className="hidden  sm:flex z-50  fixed right-0 bottom-20 items-center 
                   bg-green-500 hover:bg-green-600 text-white font-bold 
                   rounded-l-xl rounded-tl-[31px] rounded-bl-[31px] h-10
                   shadow-lg overflow-hidden"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Circle Icon */}
        <div className="bg-white p-2 rounded-full shadow-md ">
          <FaWhatsapp size={25} className="text-green-500 text-4xl" />
        </div>
        {/* Text */}
        <span className="px-4 py-3 text-lg poppins-bold">Quick Chat</span>
      </motion.button>
      <motion.button
        onClick={handleClick}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="block fixed  z-50 right-2 bottom-20  sm:hidden"
      >
        <div className="bg-white p-2 rounded-full shadow-md">
          <FaWhatsapp className="text-green-500 text-4xl" />
        </div>
      </motion.button>
    </>
  );
};

export default WhatsAppButton;
