import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import roomimage from "@/assets/BG/roombg.webp";
import RoompageCard from "@/components/cards/RoompageCard";
import Zerorooms from "@/components/cards/Zerorooms";
import RoomsRibbon from "@/components/RoomsRibbon";
import FrontLogo from "@/components/layout/FrontLogo";
import RoomCardSkeleton from "@/components/cards/Roompageskaletoncard";
import { getAllPublicRooms, searchAvailableRooms } from "@/api/roomsApi";
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
  const [searchParams] = useSearchParams();

  const roomCount = useMemo(() => rooms.length, [rooms.length]);

  // Extract search criteria from URL parameters
  const searchCriteria = useMemo(() => {
    const checkin = searchParams.get("checkin");
    const checkout = searchParams.get("checkout");
    const adults = searchParams.get("adults");

    return {
      checkin,
      checkout,
      adults,
      infants: searchParams.get("infants") || "0",
      hasSearchCriteria: !!(checkin && checkout && adults),
    };
  }, [searchParams]);

  useEffect(() => {
    const fetchRooms = async () => {
      setLoading(true);
      try {
        // If search criteria exists in URL params, search for available rooms
        if (searchCriteria.hasSearchCriteria) {
          const response = await searchAvailableRooms({
            checkin: searchCriteria.checkin || "",
            checkout: searchCriteria.checkout || "",
            adults: parseInt(searchCriteria.adults || "1", 10),
            infants: parseInt(searchCriteria.infants, 10),
          });

          // Transform grouped rooms response to flat array using flatMap for cleaner code
          const flattenedRooms: AvailableRoomDetail[] = response.flatMap(
            (group: any) =>
              group.availableRooms?.map((room: any) => ({
                id: room._id,
                roomNumber: room.roomNumber,
                view: room.view as
                  | "Lobby Facing"
                  | "Terrace View"
                  | "Valley View"
                  | "Corner",
                rate: room.rate,
                adults: room.adults,
                infants: room.infants,
                images: room.images,
                category: group.category,
                bedType: group.bedType as "Studio" | "One Bed" | "Two Bed",
                publicName: group.publicName,
                publicDescription: group.publicDescription,
                amenities: group.amenities ?? [],
                cleanliness: group.cleanliness ?? "",
                roomCapacity: room.adults + room.infants,
                description: group.publicDescription,
              })) ?? [],
          );

          setRooms(flattenedRooms);
        } else {
          // Normal page load - show all rooms with optional category filter
          const params: GetAvailableRoomsParams | undefined =
            category === "All"
              ? undefined
              : { category: category as BackendRoomCategory };

          const res = await getAllPublicRooms(params);
          setRooms(res.rooms);
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
        toast.error("Failed to fetch rooms");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [category, searchCriteria]);

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
          <h1 className="poppins-bold text-2xl md:text-5xl lg:text-7xl">
            ROOMS AND APARTMENTS
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
              <RoompageCard
                key={room.id}
                room={room}
                hasSearchCriteria={searchCriteria.hasSearchCriteria}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Rooms;
