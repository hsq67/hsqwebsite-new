import React from "react";
// import v2 from ;
import { ChevronRight } from "lucide-react";
import Button from "@/components/buttons/Button";
import { CategoryGroupAvailableRoom } from "@/types/Room";
import { useNavigate } from "react-router-dom";
// import { P } from "node_modules/framer-motion/dist/types.d-Cjd591yU";

interface RoomCardProps {
  room: CategoryGroupAvailableRoom;
}
const RoompageCard: React.FC<RoomCardProps> = ({ room }) => {
  const navigate = useNavigate();
  // console.log("amineties", room.amenities);
  const firstRoom = room.availableRooms[0];
  return (
    <div className="w-full max-w-6xl mx-auto bg-[#FFFAF1] h-full lg:h-80 overflow-hidden rounded-2xl shadow-lg p-4 flex flex-col lg:flex-row gap-6">
      {/* Left Image */}
      <div className="w-full  lg:w-1/4 ">
        {/* {firstRoom.map((value, index) => ( */}
        <img
          src={firstRoom?.images?.[0] || "/Gallery/room2.svg"}
          alt="Standard Room"
          className="w-full lg:w-[90%] bg-center h-72 md:h-72 object-cover overflow-hidden rounded-xl"
        />
        {/* ))} */}
        {/* <img
          src={room.availableRooms.map((value,index)=>(value.images[0]))}
          alt="Standard Room"
          className=" w-full lg:sw-[90%] bg-center h-72 md:h-full object-cover rounded-xl"
        /> */}
      </div>
      {/* Middle Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="bg-green-200 border-2 border-[#42DE56] text-center w-fit px-5 py-2 rounded-lg ">
          {/* 3 Rooms Available */}
          <p>
            {" "}
            {room.availableCount}
            <span className="pl-2">Rooms Available</span>{" "}
          </p>
        </div>
        <div>
          <h2 className="poppins-bold text-2xl">
            {/* One Bed Deluxe Room */}
            {room.publicName}
          </h2>
          <p className="text-black mt-2 poppins-medium text-sm flex-wrap">
            {room?.publicDescription
              ? room.publicDescription.slice(0, 88) +
                (room.publicDescription.length > 88 ? "..." : "")
              : "A cozy retreat offering comfort, elegance, and all the essentials for a relaxing stay."}
          </p>
        </div>
        <div className="relative">
          <button className="mt-4 text-sm text-black font-medium ">
            View Amenities
          </button>
          <div
            onClick={() => navigate("/aminities")}
            className="absolute hover:cursor-pointer right-28 -bottom-0 md:right-[80%]  rounded-full px-[1px] py-[1px] lg:px-1 lg:py-1 lg:right-16 bg-black"
          >
            <ChevronRight color={"white"} strokeWidth={3} size={20} />
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="w-full lg:w-1/4 bg-[#FFF7E7] rounded-xl shadow xs:p-1  h-72  flex flex-col gap-2">
        <h3 className="text-2xl poppins-bold">RS. {room.startingRate}/-</h3>
        <p className="text-xs poppins-medium text-black">
          for 1 night (+taxes and fees)
        </p>
        <div className="border-t-[1px] border-neutral-400 w-full" />
        <div className="space-y-2 mt-3 overflow-hidden">
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className="text-[13px] sm:text-[15px] text-gray-700 poppins-regular">
              Adults:
            </h1>
            <p className="text-en">{room.adultsCapacity}</p>
          </div>
          {/* new changes */}
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className="text-[13px] sm:text-[15px] text-gray-700 poppins-regular">
              Infants:
            </h1>
            <p className="text-en">{room.infantsCapacity}</p>
          </div>
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className="text-[13px] sm:text-[15px] text-gray-700 poppins-regular">
              bed type :
            </h1>
            <p className="text-en">{room.bedType}</p>
          </div>
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className="text-[13px] sm:text-[15px] text-gray-700 poppins-regular">
              categories:
            </h1>
            <p className="text-en">{room.category}</p>
          </div>
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className=" text-[13px] sm:text-[15px] text-gray-700 poppins-regular">
              Amenities:
            </h1>
            {/* <p className="text-right text-sm flex flex-wrap pl-3 scroll-auto">
              <p className="text-right ">
                {room?.amenities?.length === 0
                  ? "free wifi, safety, laundry, ironing, minibar, telephone, inroom safety"
                  : room.amenities.join(", ")}
              </p>
            </p> */}
            <p className="text-right text-sm flex flex-wrap pl-3 scroll-auto">
              <p className="text-right ">
                {room?.amenities?.length === 0
                  ? "Free Wifi, Safety, Laundry, Ironing, Minibar, Telephone, Inroom safety"
                  : room.amenities.join(", ")}
              </p>
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
            Essential conveniences designed to ensure comfort, ease, and a
            pleasant stay.
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
