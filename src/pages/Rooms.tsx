import { useEffect, useMemo } from "react";
import roomimage from "@/assets/BG/roombg.webp";
import RoompageCard from "@/components/cards/RoompageCard";
import { useRoomStore } from "@/store/store";
import Zerorooms from "@/components/cards/Zerorooms";
import { toast } from "react-toastify";
const Rooms = () => {
  const { AvaibleRooms } = useRoomStore();
  // console.log("Store data AvaibleRooms", AvaibleRooms);

  const roomCount = useMemo(() => AvaibleRooms.length, [AvaibleRooms.length]);

  useEffect(() => {
    if (roomCount === 0) {
      toast.error("Go back home and search available rooms ", {
        position: "top-center",
        style: {
          background: "#dfab4e", // light orange background
          color: "black", // deep amber text
          border: "1px solid #fbbf24",
          fontWeight: "600",
        },
      });
    }
  }, [roomCount]); // Runs only when count changes
  return (
    <>
      <div>
        {/* Upper section */}
        <section
          className="w-full  bg-cover  bg-bottom h-[60vh] lg:h-[85vh]"
          style={{ backgroundImage: `url(${roomimage})` }}
        >
          <div className="inset-0 bg-black/50" />
          <div className=" flex flex-col text-white justify-center items-center space-y-3 pt-24 sm:pt-40 2xl:pt-56">
            <h1 className="Tuesdaynight text-[35px] sm:text-[50px] text-center 2xl:text-8xl">
              Look at The
            </h1>
            <h1 className="poppins-bold  text-3xl md:text-5xl lg:text-7xl">
              ROOMS AND SUITES
            </h1>
            <p className="text-center w-[22rem] sm:w-1/2 2xl:text-xl">
              Discover refined comfort in our elegantly designed rooms spread
              across six floors, each crafted with style and sophistication in
              mind.
            </p>
          </div>
        </section>
        <section className="backgroundcolor h-full p-10  space-y-10">
          {AvaibleRooms.length === 0 ? (
            <Zerorooms />
          ) : (
            <>
              {AvaibleRooms.map((value, index) => (
                // <div className="">
                <RoompageCard key={index} room={value} />
                // </div>
              ))}
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default Rooms;
