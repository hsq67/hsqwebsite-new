// import React from "react";

// import Button from "@/components/buttons/Button";
// import { ChevronRight } from "lucide-react";

// interface Cardprops {
//   image?: string;
//   description?: string;
//   rate?: string;
//   heading?: string;
// }
// const DecorCard: React.FC<Cardprops> = ({
//   image,
//   heading,
//   rate,
//   description,
// }) => {
//   return (
//     <div className="bg-[#FFFAF1] rounded-3xl h-fit shadow-md flex flex-col lg:flex-row items-center justify-between w-full md:w-[70%]  space-y-4 max-w-5xl p-6 mx-auto 2xl:w-[80%]">
//       {/* Left Side - Image */}
//       <div className="flex-shrink-0">
//         <img
//           src={image}
//           alt="Essential Room Design"
//           className="rounded-2xl w-60 h-52 object-cover"
//         />
//       </div>

//       {/* Middle Content */}
//       <div className="flex-1 px-10">
//         <h2 className="text-2xl poppins-bold text-black 2xl:text-3xl ">
//           Essential Room Design
//           {heading}
//         </h2>
//         <p className="text-black mt-2 text-sm poppins-regular leading-relaxed 2xl:text-[16px]">
//           {description}
//           Turn your Murree stay into something unforgettable at HSQ Towers! With
//           fresh flowers, stylish décor, and a cozy minimalist vibe, every moment
//           feels extra special. Whether it’s a mini celebration or just treating
//           yourself, it all begins at PKR 10,000—totally worth it.
//         </p>
//       </div>

//       {/* Right Side - Price & Button */}
//       <div className="bg-[#FFF7E7] shadow-xl rounded-2xl p-6 flex flex-row lg:flex-col  w-full lg:w-56  lg:h-48 mt-6 md:mt-0">
//         <div className="flex flex-col ">
//           <h3 className="text-2xl poppins-bold">
//             RS. {rate}/-
//             {/* {rate} */}
//           </h3>
//           <p className="text-xs text-black poppins-medium mt-1">
//             for 1 night (+taxes and fees)
//           </p>
//         </div>
//         <div className="border-t-[1px] hidden lg:block border-neutral-400 w-full mt-1" />
//         <div className="relative  mt-10 md:mt-0 md:ml-32 lg:ml-0 lg:mt-5">
//           <Button
//             label="Book Now"
//             className="pl-4 text-left py-2 lg:w-44 lg:pl-6 "
//           />
//           <div className="absolute ease-out px-1 py-1 rounded-full right-1 lg:right-3 top-[6px] bg-black 2xl:right-2 2xl:top-1.5">
//             <ChevronRight color="white" size={20} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DecorCard;

import React from "react";
import Button from "@/components/buttons/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface Cardprops {
  images?: string[];
  description?: string[];
  rate?: string;
  heading?: string;
}

const DecorCard: React.FC<Cardprops> = ({
  images = [],
  heading,
  rate,
  description,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const imagesArray = images.length > 0 ? images : ["/placeholder-image.jpg"];

  React.useEffect(() => {
    if (!isHovered && imagesArray.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % imagesArray.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered, imagesArray.length]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (imagesArray.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % imagesArray.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (imagesArray.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? imagesArray.length - 1 : prev - 1,
      );
    }
  };

  return (
    <div
      className="bg-[#FFFAF1] rounded-3xl h-fit shadow-md flex flex-col lg:flex-row items-center justify-between w-full md:w-[70%] space-y-4 max-w-5xl p-6 mx-auto 2xl:w-[80%]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Side - Image Carousel */}
      <div className="flex-shrink-0 relative">
        {/* Image Container */}
        <div className="rounded-2xl w-60 h-52 relative overflow-hidden">
          <img
            src={imagesArray[currentImageIndex]}
            alt="Essential Room Design"
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
          />

          {/* Navigation Arrows - Show on hover */}
          {imagesArray.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className={`absolute top-1/2 left-2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-lg transition-all duration-300 ${
                  isHovered
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                aria-label="Previous image"
              >
                <ChevronLeft size={18} className="text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className={`absolute top-1/2 right-2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-lg transition-all duration-300 ${
                  isHovered
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
                aria-label="Next image"
              >
                <ChevronRight size={18} className="text-gray-800" />
              </button>
            </>
          )}
        </div>

        {/* Image Dots Indicator */}
        {imagesArray.length > 1 && (
          <div className="absolute -bottom-4 left-0 right-0 z-40 flex justify-center gap-1.5">
            {imagesArray.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex
                    ? "bg-[#D7AB4E] w-4"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Middle Content */}
      <div className="flex-1 px-10">
        <h2 className="text-2xl poppins-bold text-black 2xl:text-3xl">
          {heading || "Essential Room Design"}
        </h2>
        <ul className="mt-2 space-y-1">
          {(
            description ?? [
              "Fresh flowers and stylish décor",
              "Cozy minimalist ambience",
              "Perfect setup for celebrations",
              "Premium decoration experience",
            ]
          ).map((point, index) => (
            <li
              key={index}
              className="text-black text-sm poppins-regular leading-relaxed 2xl:text-[16px]"
            >
              • {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Price & Button */}
      <div className="bg-[#FFF7E7] shadow-xl rounded-2xl p-6 flex flex-row lg:flex-col w-full lg:w-56 lg:h-48 mt-6 md:mt-0">
        <div className="flex flex-col">
          <h3 className="text-2xl poppins-bold">RS. {rate}/-</h3>
          <p className="text-xs text-black poppins-medium mt-1">
            for 1 night (+taxes and fees)
          </p>
        </div>
        <div className="border-t-[1px] hidden lg:block border-neutral-400 w-full mt-1" />
        <div className="relative mt-10 md:mt-0 md:ml-32 lg:ml-0 lg:mt-5">
          <Button
            label="Book Now"
            className="pl-4 text-left py-2 lg:w-44 lg:pl-6"
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
