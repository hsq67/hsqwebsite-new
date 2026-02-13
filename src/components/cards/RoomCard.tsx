// import { Link } from "react-router-dom";

// interface RoomCardProps {
//   image: string;
//   title: string;
//   price: number;
//   category: string;
// }

// export default function RoomCard({
//   image,
//   title,
//   price,
//   category,
// }: RoomCardProps) {
//   return (
//     <div className="relative w-72 xs:w-80 lg:w-80 2xl:w-96 h-80 lg:h-80 2xl:h-96 rounded-2xl overflow-hidden shadow-lg bg-white group transition-all duration-300 hover:shadow-2xl hover:scale-105">
//       {/* Image */}
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-full object-cover"
//         loading="lazy"
//       />

//       {/* Dark Overlay */}
//       {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div> */}
//       {/* Gradient Overlay - Dark at bottom for button */}
//       <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent group-hover:from-[#D7AB4E]/80 group-hover:to-transparent transition-all duration-1000"></div>
//       {/* Top - Title Only */}
//       <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
//         <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg">
//           <p className="text-white text-[11px] xs:text-xs sm:text-sm font-bold leading-tight drop-shadow-lg">
//             {title}
//           </p>
//         </div>
//       </div>

//       {/* Bottom Section - Category, Price, Button */}
//       <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-3">
//         {/* Category and Price Row */}
//         <div className="flex items-center justify-between">
//           {/* Category */}
//           <div className="flex items-center gap-2">
//             <span className="w-1.5 h-1.5 bg-[#D7AB4E] rounded-full animate-pulse"></span>
//             <p className="text-white/90 text-xs sm:text-sm font-medium tracking-wide">
//               {category}
//             </p>
//           </div>

//           {/* Price */}
//           <div className="flex flex-col items-end">
//             <p className="text-white text-sm sm:text-base lg:text-2xl poppins-bold ">
//               Rs {price.toLocaleString()}/-
//             </p>
//             <p className="text-white/60 text-[10px] xs:text-xs">per night</p>
//           </div>
//         </div>

//         {/* Book Now Button */}
//         <Link to="/rooms" className="w-full">
//           <button className="w-full py-2.5 rounded-full font-bold text-black bg-gradient-to-r from-[#D7AA4D] to-[#D49237] shadow-xl hover:scale-[1.02] active:scale-100 transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-2 group/btn">
//             <span>Book Now</span>
//             <svg
//               className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M13 7l5 5m0 0l-5 5m5-5H6"
//               />
//             </svg>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";
// import { FcLeft, FcRight, FaArrowRight } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa";
interface RoomCardProps {
  image: string;
  title: string;
  price: number;
  category?: string;
}

export default function RoomCard({
  image,
  title,
  price,
  category,
}: RoomCardProps) {
  return (
    <div className="relative w-72 xs:w-80 lg:w-80 2xl:w-96 h-80 lg:h-80 2xl:h-96 rounded-2xl overflow-hidden shadow-lg bg-white group transition-all duration-300 hover:shadow-2xl hover:scale-105">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Dark gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t  from-black/80 via-black/10 to-transparent"></div>

      {/* Top - Title only */}
      <div className="absolute top-4 left-4">
        <div className="bg-white backdrop-blur-sm px-4 py-1 rounded-lg">
          <p className="text-black text-sm xs:text-lg sm:text-xl font-bold leading-tight drop-shadow-lg">
            {title}
          </p>
        </div>
      </div>

      {/* Bottom Section - Category, Price, Button */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          {/* Price - white, formatted as "Rs. 6000/Night" */}
          <div>
            <p className="text-white text-sm sm:text-base lg:text-xl font-bold">
              Rs. {price.toLocaleString()}/Night
            </p>
          </div>
          {/* Book Now Button - right aligned */}
          {/* Book Now Button - with black arrow rotated -45° */}
          <Link to="/rooms">
            <button className="px-3 py-1 sm:px-6 sm:py-2 rounded-full font-bold text-black bg-gradient-to-r from-[#D7AA4D] to-[#D49237] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-2xl flex items-center gap-2 group/btn">
              <span>Book Now</span>
              <div className="-rotate-45 text-black">
                <FaArrowRight size={15} color="black" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
