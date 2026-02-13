import React, { FC } from "react";

export interface NearbyWeatherCardProps {
  locationName: string;
  temperature: number;
  condition: string;
  weatherIcon: React.ReactNode;
}

const NearbyWeatherCard: FC<NearbyWeatherCardProps> = ({
  locationName,
  temperature,
  condition,
  weatherIcon,
}) => {
  return (
    <div
      className="group relative bg-white rounded-xl xs:rounded-2xl overflow-hidden 
                 border border-gray-100 shadow-md hover:shadow-2xl 
                 transition-all duration-500 hover:scale-[1.02] 
                 p-4 xs:p-5 sm:p-6 md:p-7"
    >
      {/* Golden gradient accent line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D7AA4D] via-[#D49237] to-[#D7AB4E]"></div>

      {/* Background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D7AB4E]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Main content - flex column on xs, row on sm+ */}
      <div className="relative flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 xs:gap-4">
        {/* Left side: Icon + location + condition */}
        <div className="flex items-center gap-3 xs:gap-4 w-full xs:w-auto">
          {/* Weather Icon with golden background */}
          <div
            className="flex-shrink-0 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 
                    bg-gradient-to-br from-[#D7AB4E]/20 to-[#D49237]/10 
                         rounded-xl flex items-center justify-center
                         text-[#D7AB4E] group-hover:text-[#D49237] 
                        transition-colors duration-300 text-xl xs:text-2xl sm:text-3xl"
          >
            {weatherIcon}
          </div>

          {/* Location and Condition */}
          <div className="flex flex-col">
            <h3
              className="poppins-semibold text-sm xs:text-base sm:text-lg md:text-xl 
                         text-gray-800 group-hover:text-gray-900 transition-colors"
            >
              {locationName}
            </h3>
            <p
              className="poppins-regular text-xs xs:text-sm text-gray-500 
                         uppercase tracking-wider mt-0.5"
            >
              {condition}
            </p>
          </div>
        </div>

        {/* Right side: Temperature with golden accent */}
        <div className="flex-shrink-0 self-end xs:self-center">
          <p
            className="poppins-semibold text-lg xs:text-xl sm:text-2xl md:text-3xl 
                       bg-gradient-to-r from-[#D7AA4D] to-[#D49237] 
                       bg-clip-text text-transparent"
          >
            {temperature}
            <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-medium text-gray-600 ml-0.5">
              °C
            </span>
          </p>
        </div>
      </div>

      {/* Decorative dot at bottom right (subtle) */}
      <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#D7AB4E]/30"></div>
    </div>
  );
};

export default NearbyWeatherCard;
