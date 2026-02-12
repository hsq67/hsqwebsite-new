import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface RoomCardSkeletonProps {
  count?: number;
}

const RoomCardSkeleton: React.FC<RoomCardSkeletonProps> = ({ count = 3 }) => {
  // Animation variants for shimmer effect
  const shimmerVariants = {
    initial: { x: "-100%" },
    animate: { x: "100%" },
  };

  const SkeletonItem = () => (
    <div className="w-full max-w-6xl mx-auto bg-white h-full lg:h-80 overflow-hidden rounded-2xl shadow-lg p-4 flex flex-col lg:flex-row gap-6 relative">
      {/* Shimmer overlay */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
        variants={shimmerVariants}
        initial="initial"
        animate="animate"
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
      />

      {/* Left Image Skeleton */}
      <div className="w-full lg:w-1/4">
        <div className="w-full lg:w-[90%] h-72 md:h-72 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl animate-pulse" />
      </div>

      {/* Middle Content Skeleton */}
      <div className="flex-1 flex flex-col justify-between space-y-4">
        {/* Available Rooms Badge */}
        <div className="w-40 h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse" />

        <div className="space-y-3">
          {/* Title */}
          <div className="w-3/4 h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse" />

          {/* Description lines */}
          <div className="space-y-2">
            <div className="w-full h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
            <div className="w-5/6 h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
          </div>
        </div>

        {/* View Amenities Button */}
        <div className="relative">
          <div className="w-32 h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
          <div className="absolute right-28 lg:right-16 w-8 h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Price Section Skeleton */}
      <div className="w-full lg:w-1/4 bg-gray-50 rounded-xl h-72 flex flex-col gap-2 p-4">
        {/* Price */}
        <div className="w-2/3 h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse" />
        <div className="w-1/2 h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-2" />

        {/* Details */}
        <div className="space-y-3 mt-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between">
              <div className="w-20 h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
              <div className="w-12 h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>

      {/* Amenities Section Skeleton */}
      <div className="w-full lg:w-1/4 bg-gray-50 rounded-xl h-72 flex flex-col justify-between p-4">
        <div className="space-y-3">
          {/* Amenities Title */}
          <div className="w-24 h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
          <div className="w-full h-px bg-gray-200" />

          {/* Amenities Description */}
          <div className="space-y-2">
            <div className="w-full h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
            <div className="w-4/5 h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
          </div>

          {/* Cleanliness Title */}
          <div className="w-28 h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse mt-4" />
          <div className="w-full h-px bg-gray-200" />

          {/* Cleanliness Description */}
          <div className="w-full h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
          <div className="w-3/4 h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded animate-pulse" />
        </div>

        {/* Book Now Button */}
        <div className="relative flex justify-center">
          <div className="w-52 2xl:w-40 h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse" />
          <div className="absolute px-1 py-1 rounded-full right-2 xs:right-10 md:right-[37%] lg:right-6 top-[2px] bg-gray-300 w-8 h-8 animate-pulse" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {[...Array(count)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative overflow-hidden"
        >
          <SkeletonItem />
        </motion.div>
      ))}
    </div>
  );
};

// Alternative Minimalist Version with Pulse Animation Only
export const MinimalRoomCardSkeleton: React.FC<RoomCardSkeletonProps> = ({
  count = 1,
}) => {
  return (
    <div className="space-y-6">
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className="w-full max-w-6xl mx-auto bg-white h-full lg:h-80 overflow-hidden rounded-2xl shadow-lg p-4 flex flex-col lg:flex-row gap-6"
        >
          {/* Left Image */}
          <div className="w-full lg:w-1/4">
            <div className="w-full lg:w-[90%] h-72 md:h-72 bg-gray-200 rounded-xl animate-pulse" />
          </div>

          {/* Middle Content */}
          <div className="flex-1 flex flex-col justify-between space-y-4">
            <div className="w-40 h-10 bg-gray-200 rounded-lg animate-pulse" />
            <div className="space-y-3">
              <div className="w-3/4 h-8 bg-gray-200 rounded-lg animate-pulse" />
              <div className="space-y-2">
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
                <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="w-full lg:w-1/4 bg-gray-50 rounded-xl h-72 p-4">
            <div className="space-y-4">
              <div className="w-2/3 h-8 bg-gray-200 rounded-lg animate-pulse" />
              <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse" />
              <div className="w-full h-px bg-gray-200" />
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex justify-between">
                  <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="w-12 h-4 bg-gray-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          {/* Amenities Section */}
          <div className="w-full lg:w-1/4 bg-gray-50 rounded-xl h-72 p-4">
            <div className="space-y-4">
              <div className="w-24 h-6 bg-gray-200 rounded animate-pulse" />
              <div className="w-full h-px bg-gray-200" />
              <div className="space-y-2">
                <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
                <div className="w-4/5 h-4 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Grid Layout Skeleton for multiple cards
export const RoomCardGridSkeleton: React.FC<{
  count?: number;
  gridCols?: number;
}> = ({ count = 6, gridCols = 2 }) => {
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div
      className={clsx(
        "grid gap-6",
        gridClasses[gridCols as keyof typeof gridClasses] ||
          "grid-cols-1 lg:grid-cols-2",
      )}
    >
      {[...Array(count)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05 }}
          className="bg-white rounded-2xl shadow-lg p-4 h-[500px] lg:h-[400px] relative overflow-hidden"
        >
          {/* Shimmer effect for grid */}
          <motion.div
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
            animate={{ x: ["100%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
              repeatDelay: 0.5,
            }}
          />

          {/* Image placeholder */}
          <div className="w-full h-48 bg-gray-200 rounded-xl animate-pulse mb-4" />

          {/* Content placeholders */}
          <div className="space-y-3">
            <div className="w-3/4 h-6 bg-gray-200 rounded animate-pulse" />
            <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
            <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse" />
            <div className="flex justify-between mt-4">
              <div className="w-24 h-8 bg-gray-200 rounded animate-pulse" />
              <div className="w-24 h-8 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RoomCardSkeleton;
