import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpFromLine,
  Bed,
  Maximize,
} from "lucide-react";
import { Room } from "@/types/Room";
import { Link } from "react-router-dom";
interface BookingCardProps {
  room: Room;
}

const BookingCard: React.FC<BookingCardProps> = ({ room }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  // Safely handle images array
  const images = room.images || [];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1,
      );
    }
  };

  // Format Guests string
  const getGuestString = () => {
    const parts = [];
    if (room.adults) parts.push(`${room.adults} Adults`);
    if (room.infants) parts.push(`${room.infants} Infants`);
    return parts.length > 0 ? parts.join(", ") : "Guests info N/A";
  };

  return (
    <Card
      className="rounded-3xl relative shadow-sm overflow-hidden bg-white w-[320px] group border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className={`absolute top-[100px] left-3 z-40 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            aria-label="Previous image"
          >
            <ChevronLeft size={18} className="text-gray-800" />
          </button>
          <button
            onClick={nextImage}
            className={`absolute top-[100px] right-3 z-40 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
            aria-label="Next image"
          >
            <ChevronRight size={18} className="text-gray-800" />
          </button>

          {/* Image Dots Indicator */}
          <div className="absolute top-[185px] left-0 right-0 z-40 flex justify-center gap-1.5">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${idx === currentImageIndex ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Room Image - with inset padding look */}
      <div className="w-full h-56 relative bg-gray-100 m-1 rounded-2xl overflow-hidden mx-auto">
        <img
          src={
            images.length > 0
              ? images[currentImageIndex]
              : "/placeholder-image.jpg"
          } // Add a fallback or valid default
          alt={room.publicName}
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out "
        />
      </div>

      <CardContent className="flex flex-col p-5 pt-4">
        {/* Title */}
        <h2 className="text-xl font-bold text-black mb-4 truncate text-left poppins-bold">
          {room.publicName}
        </h2>

        {/* Metadata Row */}
        <div className="flex items-center justify-between mb-6 text-black">
          {/* Floor - Optional (Backend doesn't provide it yet) */}
          <div className="flex items-center gap-2">
            <ArrowUpFromLine size={18} className="text-[#D7AB4E]" />
            <span className="text-sm poppins-regular">2nd Floor</span>
          </div>

          {/* Guests */}
          <div className="flex items-center gap-2">
            <Bed size={18} className="text-[#D7AB4E]" />
            <span
              className="text-sm poppins-regular truncate max-w-[150px]"
              title={getGuestString()}
            >
              {getGuestString()}
            </span>
          </div>
          {/* Area - Optional (Backend doesn't provide it yet) */}
          <div className="flex items-center gap-2">
            <Maximize size={18} className="text-[#D7AB4E]" />
            <span className="text-sm poppins-regular">200 Sqft</span>
          </div>
        </div>

        {/* Bottom Row: Price & Button */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-extrabold text-black">
              Rs. {room.rate.toLocaleString()}
            </span>
            <span className="text-sm poppins-bold text-black">/Night</span>
          </div>
          <Link to={"/rooms"}>
            <button className="bg-[#D7AB4E] hover:bg-[#D7AB4E] text-white font-bold py-2.5 px-6 rounded-md transition-colors text-sm">
              Book Now
            </button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
