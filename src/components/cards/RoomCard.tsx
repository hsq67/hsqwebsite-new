// import { Link } from "react-router-dom";

interface RoomCardProps {
  price: number;
  title: string;
  image: string;
}

// export default function RoomCard({ price, title, image }: RoomCardProps) {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative w-72 xs:w-80 h-80 md:w-60 md:h-60 lg:w-80 lg:h-80 2xl:w-96 2xl:h-96 transition-all duration-300 ease-out hover:shadow-xl hover:cursor-pointer hover:scale-105 rounded-xl overflow-hidden shadow-lg bg-white group">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />

//         <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent group-hover:from-[#D7AB4E]/80 group-hover:to-transparent transition-all duration-1000"></div>

//         <div className="absolute top-3 left-3 bg-white px-3 w-24 rounded-full shadow-md 2xl:px-4 2xl:w-28">
//           <span className="text-black font-bold text-sm 2xl:text-lg">
//             Rs:{price}/-
//           </span>
//         </div>
//         <div className="absolute bottom-3 w-full text-center">
//           <p className="text-white text-sm poppins-bold drop-shadow-md 2xl:text-lg">
//             {title}
//           </p>
//         </div>
//       </div>

//       {/* Book Now Button with React Router Link */}
//       <Link to="/book" className="no-underline">
//         <button className="mt-4 px-6 py-2 rounded-full font-bold text-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg bg-gradient-to-t from-[#D7AB4E] to-[#D49136]">
//           Book Now
//         </button>
//       </Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";

export default function RoomCard({
  price,
  title,
  // category,
  image,
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-700" />

      {/* Category Badge */}
      {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full shadow-md">
        <span className="text-xs font-semibold tracking-wide text-gray-800 uppercase">
          {category}
        </span>
      </div> */}

      {/* Bottom Content */}
      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        {/* Title */}
        <div>
          <p className="text-white text-xl font-bold leading-tight drop-shadow">
            {title}
          </p>
        </div>

        {/* Price */}
        <div className="text-right">
          <p className="text-[#D7AB4E] text-xl font-extrabold">Rs {price}/-</p>
          <p className="text-sm text-white/80">per night</p>
        </div>
      </div>

      {/* Hover Book Button */}
      <Link
        to="/book"
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
      >
        <button className="px-6 py-1 rounded-full font-bold text-black bg-gradient-to-r from-[#D7AB4E] to-[#D49136] shadow-xl hover:scale-105 active:scale-95">
          Book Now
        </button>
      </Link>
    </div>
  );
}
