import React from "react";

import Button from "@/components/buttons/Button";
import { ChevronRight } from "lucide-react";

interface Cardprops {
  image?: string;
  description?: string;
  rate?: string;
  heading?: string;
}
const DecorCard: React.FC<Cardprops> = ({
  image,
  heading,
  rate,
  description,
}) => {
  return (
    <div className="bg-[#FFFAF1] rounded-3xl h-fit shadow-md flex flex-col lg:flex-row items-center justify-between w-full md:w-[70%]  space-y-4 max-w-5xl p-6 mx-auto 2xl:w-[80%]">
      {/* Left Side - Image */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt="Essential Room Design"
          className="rounded-2xl w-60 h-52 object-cover"
        />
      </div>

      {/* Middle Content */}
      <div className="flex-1 px-10">
        <h2 className="text-2xl poppins-bold text-black 2xl:text-3xl ">
          Essential Room Design
          {heading}
        </h2>
        <p className="text-black mt-2 text-sm poppins-regular leading-relaxed 2xl:text-[16px]">
          {description}
          Turn your Murree stay into something unforgettable at HSQ Towers! With
          fresh flowers, stylish décor, and a cozy minimalist vibe, every moment
          feels extra special. Whether it’s a mini celebration or just treating
          yourself, it all begins at PKR 10,000—totally worth it.
        </p>
      </div>

      {/* Right Side - Price & Button */}
      <div className="bg-[#FFF7E7] shadow-xl rounded-2xl p-6 flex flex-row lg:flex-col  w-full lg:w-56  lg:h-48 mt-6 md:mt-0">
        <div className="flex flex-col ">
          <h3 className="text-2xl poppins-bold">
            RS. {rate}/-
            {/* {rate} */}
          </h3>
          <p className="text-xs text-black poppins-medium mt-1">
            for 1 night (+taxes and fees)
          </p>
        </div>
        <div className="border-t-[1px] hidden lg:block border-neutral-400 w-full mt-1" />
        <div className="relative  mt-10 md:mt-0 md:ml-32 lg:ml-0 lg:mt-5">
          <Button
            label="Book Now"
            className="pl-4 text-left py-2 lg:w-44 lg:pl-6 "
          />
          <div className="absolute ease-out px-1 py-1 rounded-full right-1 lg:right-3 top-[6px] bg-black 2xl:right-2 2xl:top-1.5">
            <ChevronRight color="white" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecorCard;
