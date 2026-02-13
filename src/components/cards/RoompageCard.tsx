import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Button from "@/components/buttons/Button";
import { AvailableRoomDetail } from "@/types/Room";
import { useNavigate } from "react-router-dom";
import { Dot } from "lucide-react";
interface RoomCardProps {
  room: AvailableRoomDetail;
  hasSearchCriteria?: boolean;
}

const RoompageCard: React.FC<RoomCardProps> = ({
  room,
  hasSearchCriteria = false,
}) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const imagesArray =
    room.images && room.images.length > 0
      ? room.images
      : ["/Gallery/Rooms/room2.webp"];

  // Auto-rotate images every 2 seconds when not hovered
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
      className="w-full max-w-6xl mx-auto bg-[#FFFAF1] h-full lg:h-80 overflow-hidden rounded-2xl shadow-lg p-4 flex flex-col lg:flex-row gap-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Image Carousel */}
      <div className="w-full lg:w-1/4 relative">
        {/* Image Container */}
        <div className="rounded-xl overflow-hidden w-full lg:w-[90%] h-72 md:h-72 relative">
          <img
            src={imagesArray[currentImageIndex]}
            alt="Room"
            className="w-full h-full bg-center object-cover transition-opacity duration-500 ease-in-out"
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
                className={`w-2 h-2 mb-1 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex
                    ? "bg-[#D7AB4E] w-2"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      {/* Middle Content */}
      <div className="flex-1 flex flex-col justify-between">
        {/* 3 Rooms Available - Only show when user filters by check-in/checkout */}
        {hasSearchCriteria && (
          <div className="bg-green-200 border-2 border-[#42DE56] text-center w-fit px-2 py-1.5 rounded-lg ">
            <p>
              <span className="pl-2">Room Available</span>{" "}
            </p>
          </div>
        )}
        <div>
          {/* Category and Room Type */}
          <h2 className="poppins-bold text-xl ">
            {room.bedType} - {room.category}
          </h2>

          {/* Description */}
          <p className="text-black mt-2 poppins-medium text-sm flex-wrap">
            {room?.description
              ? room.description.slice(0, 200) +
                (room.description.length > 200 ? "..." : "")
              : "A cozy retreat offering comfort, elegance, and all the essentials for a relaxing stay."}
          </p>

          {/* Amenities with Bullet Points */}
          <div className="mt-4 space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-[#D7AB4E] poppins-bold text-lg">•</span>
              {/* <Dot color="text-primary" size={40} /> */}
              <p className="poppins-medium text-[16px]">Free Mattress</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#D7AB4E] poppins-bold text-lg">•</span>
              <p className="poppins-medium text-[16px]">Free Breakfast</p>
            </div>
          </div>
        </div>
        {/* <div className="relative">
          <button className="mt-4 text-sm text-black poppins-bold">
            View Amenities
          </button>
          <div
            onClick={() => navigate("/aminities")}
            className="absolute hover:cursor-pointer right-28 -bottom-0 md:right-[80%]  rounded-full px-[1px] py-[1px] lg:px-1 lg:py-1 lg:right-16 bg-black"
          >
            <ChevronRight color={"white"} strokeWidth={3} size={20} />
          </div>
        </div> */}
      </div>

      {/* Price Section */}
      <div className="w-full lg:w-1/4 bg-[#FFF7E7] rounded-xl shadow xs:p-1 h-72 flex flex-col gap-2">
        <h3 className="text-2xl poppins-bold">RS. {room.rate}/-</h3>
        <p className="text-xs poppins-medium text-black">
          for 1 night (+taxes and fees)
        </p>
        <div className="border-t-[1px] border-neutral-400 w-full" />
        <div className="space-y-1.5 overflow-hidden">
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className="text-[13px] sm:text-[15px]  poppins-regular poppins-bold">
              Room Number:
            </h1>
            <p className="text-en poppins-bold">{room.roomNumber}</p>
          </div>
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className="text-[13px] sm:text-[15px] text-gray-700 poppins-regular">
              Adults:
            </h1>
            <p className="text-en">{room.adults}</p>
          </div>
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className="text-[13px] sm:text-[15px] text-gray-700 poppins-regular">
              Infants:
            </h1>
            <p className="text-en">{room.infants}</p>
          </div>
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className="text-[13px] sm:text-[15px] text-gray-700 poppins-regular">
              Bed Type:
            </h1>
            <p className="text-en">{room.bedType}</p>
          </div>
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className="text-[13px] sm:text-[15px] text-gray-700 poppins-regular">
              Category:
            </h1>
            <p className="text-en">{room.category}</p>
          </div>
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className="text-[13px] sm:text-[15px] text-gray-700 poppins-regular">
              View:
            </h1>
            <p className="text-right text-sm pl-3 scroll-auto">{room.view}</p>
          </div>
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className="text-[13px] sm:text-[15px] text-gray-700 poppins-regular">
              Room Capacity:
            </h1>
            <p className="text-right text-sm pl-3 scroll-auto">
              {room.roomCapacity}
            </p>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="w-full lg:w-1/4 bg-[#FFF7E7] rounded-xl shadow p-4 h-72 flex flex-col justify-between">
        <div>
          <h4 className="poppins-semibold">Amenities</h4>
          <div className="border-t-[1px]  border-neutral-400 w-full mt-1" />
          <p className="text-sm poppins-medium text-black mt-1">
            {!room?.amenities || room.amenities.length === 0
              ? "Free Wifi, Safety, Laundry, Ironing, Minibar, Telephone, Inroom safety"
              : room.amenities.join(", ")}
          </p>
          <h4 className="mt-3 poppins-semibold">Cleanliness</h4>
          <div className="border-t-[1px]  border-neutral-400 w-full" />
          <p className="text-sm poppins-medium text-black mt-1">
            {room.cleanliness ||
              " Impeccably maintained for a fresh and comfortable stay."}
          </p>
        </div>
        <div
          onClick={() => navigate("/bookingform", { state: room })}
          className="relative flex justify-center"
        >
          <Button label="Book Now" className="w-52 2xl:w-40 2xl:h-10" />
          <div className="absolute px-1 py-1 rounded-full right-2 xs:right-10 md:right-[37%] lg:right-6 top-[2px] bg-black 2xl:right-[52px] 2xl:top-[5px]">
            <ChevronRight color="white" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoompageCard;
