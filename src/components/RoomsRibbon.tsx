import clsx from "clsx";
import { RoomCategory } from "@/types/Room";
import { motion } from "framer-motion";

const CATEGORIES: RoomCategory[] = [
  "All",
  "Standard",
  "Duluxe-Plus",
  "Deluxe",
  "Executive",
  "Presidential",
];

interface RoomsRibbonProps {
  activeCategory: RoomCategory;
  onChange: (category: RoomCategory) => void;
  totalCount: number;
}

const RoomsRibbon: React.FC<RoomsRibbonProps> = ({
  activeCategory,
  onChange,
  totalCount,
}) => {
  return (
    <div className="w-full mx-auto mb-8 px-0 md:px-6">
      {/* Header Section with Count */}
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-6 md:mb-8 px-4 md:px-0">
        <div className="text-center md:text-left w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl poppins-bold text-gray-900">
            Find Your <span className="text-[#D7AB4E]">Perfect Stay</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-500 mt-1 md:mt-2 poppins-medium">
            Explore our collection of {totalCount} luxury rooms & suites
          </p>
        </div>
      </div>

      {/* Filter Tabs - Mobile: 3 columns aligned left, no left spacing */}
      <div className="relative flex md:justify-center">
        <div className="grid grid-cols-3 md:flex md:flex-row md:flex-wrap md:justify-center gap-2 sm:gap-3 w-full">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => onChange(category)}
                className={clsx(
                  "relative px-1 py-2 sm:px-2 md:px-5 md:py-3 rounded-full text-xs sm:text-sm md:text-base",
                  "transition-all duration-300 poppins-medium tracking-wide",
                  "flex items-center justify-center",
                  "w-full md:w-auto", // Full width on mobile, auto on desktop
                  isActive
                    ? "text-white shadow-lg scale-105"
                    : "text-gray-600 bg-white border border-gray-200 hover:border-[#D7AB4E] hover:text-[#D7AB4E]",
                )}
              >
                {/* Background Animation for Active State */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-black rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    style={{ zIndex: 0 }}
                  />
                )}

                <span className="relative z-10 flex items-center justify-center gap-1 whitespace-nowrap">
                  {category}
                  {isActive && (
                    <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#D7AB4E] animate-pulse" />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoomsRibbon;
