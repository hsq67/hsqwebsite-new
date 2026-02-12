import { useEffect, useMemo, useState } from "react";
import roomimage from "@/assets/BG/roombg.webp";
import RoompageCard from "@/components/cards/RoompageCard";
import Zerorooms from "@/components/cards/Zerorooms";
import RoomsRibbon from "@/components/RoomsRibbon";
import FrontLogo from "@/components/layout/FrontLogo";
import RoomCardSkeleton from "@/components/cards/Roompageskaletoncard";
import { getAllPublicRooms } from "@/api/roomsApi";
import {
  RoomCategory,
  BackendRoomCategory,
  AvailableRoomDetail,
  GetAvailableRoomsParams,
} from "@/types/Room";
import { toast } from "react-toastify";

const Rooms = () => {
  const [rooms, setRooms] = useState<AvailableRoomDetail[]>([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState<RoomCategory>("All");

  const roomCount = useMemo(() => rooms.length, [rooms.length]);

  useEffect(() => {
    const fetchRooms = async () => {
      setLoading(true);
      try {
        const params: GetAvailableRoomsParams | undefined =
          category === "All"
            ? undefined
            : { category: category as BackendRoomCategory };

        const res = await getAllPublicRooms(params);
        console.log("Fetched rooms", res);
        setRooms(res.rooms);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch rooms");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [category]);

  return (
    <div>
      {/* HERO */}
      <section
        className="w-full bg-cover bg-bottom h-[60vh] lg:h-[85vh]"
        style={{ backgroundImage: `url(${roomimage})` }}
      >
        <div className="inset-0 bg-black/50" />
        <div className="flex flex-col text-white justify-center items-center  space-y-3 pt-24 sm:pt-40 2xl:pt-56">
          <h1 className="Tuesdaynight text-[35px] sm:text-[50px] text-center">
            Look at The
          </h1>
          <h1 className="poppins-bold text-3xl md:text-5xl lg:text-7xl">
            ROOMS AND SUITES
          </h1>
          <p className="text-center w-[22rem] sm:w-1/2">
            Discover refined comfort in our elegantly designed rooms.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="backgroundcolor h-full p-10 space-y-10">
        <RoomsRibbon
          activeCategory={category}
          onChange={setCategory}
          totalCount={roomCount}
        />

        {loading ? (
          <RoomCardSkeleton></RoomCardSkeleton>
        ) : roomCount === 0 ? (
          <Zerorooms />
        ) : (
          <div className="flex flex-col gap-6 items-center">
            {rooms.map((room) => (
              <RoompageCard key={room.id} room={room} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Rooms;
