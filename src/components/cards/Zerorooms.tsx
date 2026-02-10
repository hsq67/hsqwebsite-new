import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.webp";
function Zerorooms() {
  const navigate = useNavigate();
  return (
    <div className="flex m-auto w-full xs:w-fit xs:h-[45%] md:h-[80%] px-4">
      <div className="bg-[#fff7e8] rounded-3xl shadow-lg p-2 xs:p-10 w-full xs:max-w-xl text-center">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Hotel Logo" className=" w-[50%] " />
        </div>
        <h2 className="text-2xl md:text-4xl poppins-bold text-black mb-3 tracking-wide">
          NO ROOMS FOUND
        </h2>
        <p className=" mb-8 text-base poppins-medium">
          Please go back to the homepage and add your dates again to view
          available rooms.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center justify-center text-sm gap-2 poppins-semibold bg-gradient-to-r from-[#D7AA4D] to-[#D49237]  text-white px-3 py-2 rounded-full shadow-md hover:scale-105 md:py-3 md:px-6 hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          Start a New Search
          <ArrowRight
            color="white "
            size={18}
            className="w-5 h-5  bg-black rounded-full  rotate-[320deg] "
          />
        </button>
      </div>
    </div>
  );
}

export default Zerorooms;
