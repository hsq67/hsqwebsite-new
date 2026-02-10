import React from "react";
// import { FaWifi } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { FaMugSaucer } from "react-icons/fa6";
import { GiWashingMachine } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { MdLocalParking } from "react-icons/md";

type AmenityItem = { key: string; label: string; icon: React.ElementType };

const AMENITY_ITEMS: AmenityItem[] = [
  { key: "fitness-center", label: "Fitness Center", icon: CgGym },
  // { key: "wifi", label: "Free Wifi", icon: FaWifi },
  { key: "free-breakfast", label: "Free Breakfast", icon: FaMugSaucer },
  { key: "laundry-service", label: "Laundry Service", icon: GiWashingMachine },
  { key: "conference-hall", label: "Conference Hall", icon: HiUserGroup },
  { key: "free-parking", label: "Free Parking", icon: MdLocalParking },
];
function ExclusiveAmenity() {
  return (
    <div className="flex  flex-wrap ml-1  flex-row  gap-4">
      {AMENITY_ITEMS.map((item) => (
        <div
          key={item.key}
          className="group relative rounded-xl border border-white/60  backdrop-blur-[1px] w-fit p-2 h-fit text-center shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] transition-all duration-300 hover:border-white bg-black/50 hover:bg-primary/50"
        >
          <div className="flex items-center justify-center">
            <item.icon
              className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-105"
              aria-hidden="true"
            />
          </div>

          <p className="mt-4 text-sm font-semibold tracking-wide text-white">
            {item.label}
          </p>

          <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20" />
        </div>
      ))}
    </div>
  );
}

export default ExclusiveAmenity;
