import React, { FC, Suspense, lazy } from "react";
// import WeatherAnimation from "@/components/LottieFiles/Weather";
const Lottie = lazy(() => import("lottie-react"));

//lottie files
import RainAnimation from "@/assets/Weather/rain.json";
import CloudsAnimation from "@/assets/Weather/clouds.json";
import SnowAnimation from "@/assets/Weather/snow.json";
import nightclear from "@/assets/Weather/nightclear.json";
import morningclear from "@/assets/Weather/morningclear.json";
// Define the interface for the component's props
export interface DailyForecastCardProps {
  day: string;
  date: string;
  maxTemp: number;
  minTemp: number;
  image: React.ReactNode;
  currentweather?: string;
}

const getWeatherAnimation = (weatherMain) => {
  // const weatherMain = data?.current?.weather?.[0]?.main;
  const currentHour = new Date().getHours();
  const isNight = currentHour >= 16 || currentHour < 6;
  switch (weatherMain) {
    case "Rain":
      return RainAnimation;
    case "Clouds":
      return CloudsAnimation;
    case "Clear":
      return isNight ? nightclear : morningclear;
    case "Snow":
      return SnowAnimation;
    default:
      return RainAnimation;
  }
};
// Use React.FC to type the functional component and pass the Props interface
const DailyForecastCard: FC<DailyForecastCardProps> = ({
  day,
  date,
  maxTemp,
  minTemp,
  image,
  currentweather,
}) => {
  // Base styling for the card
  //   const cardStyle =
  //     "flex flex-col items-center justify-center h-32 w-32 p-4 rounded-xl shadow-lg w-full aspect-square";

  // Background classes for the image effect
  //   const bgImageClasses =
  //     "bg-gray-800 bg-opacity-70 w-32 h-32 text-white relative overflow-hidden";

  console.log(day);
  return (
    <>
      <div
        className="relative w-64 h-56 md:w-72 md:h-64 lg:w-64 lg:h-72 2xl:w-80 2xl:h-80 bg-cover bg-center rounded-3xl shadow-2xl overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Dark Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>

        {/* Content Layer */}
        <div className="relative h-full flex flex-col justify-between p-5 md:p-6 2xl:p-8 text-center">
          {/* Date and Day Header */}
          <div className="space-y-1">
            <p className="poppins-semibold text-sm md:text-base 2xl:text-lg text-white font-light tracking-wide">
              {date}
            </p>
            <h3 className="poppins-semibold text-lg md:text-xl 2xl:text-2xl text-white uppercase">
              {day}
            </h3>
          </div>

          {/* Middle Section - Weather Icon */}
          <div className="flex justify-center items-center">
            <Suspense>
              <Lottie
                animationData={getWeatherAnimation(currentweather)}
                loop
                className="w-20 h-20 md:w-24 md:h-24 2xl:w-32 2xl:h-32 drop-shadow-lg"
              />
            </Suspense>
          </div>

          {/* Temperature Footer */}
          <div className="flex justify-around items-center gap-3 md:gap-4 bg-black/30 backdrop-blur-sm rounded-2xl p-3 md:p-4 2xl:p-5">
            {/* Max Temp */}
            <div className="flex flex-col items-center">
              <p className="poppins-reguler text-xs 2xl:text-sm text-gray-200 uppercase mb-1">
                Max
              </p>
              <div className="relative">
                <p className="poppins-semibold text-xl md:text-2xl 2xl:text-3xl text-white">
                  {maxTemp}
                  <span className="text-xs md:text-sm 2xl:text-base ml-1">
                    °C
                  </span>
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-10 md:h-12 bg-white/30"></div>

            {/* Min Temp */}
            <div className="flex flex-col items-center">
              <p className="poppins-reguler text-xs 2xl:text-sm text-gray-200 uppercase mb-1">
                Min
              </p>
              <div className="relative">
                <p className="poppins-semibold text-xl md:text-2xl 2xl:text-3xl text-white">
                  {minTemp}
                  <span className="text-xs md:text-sm 2xl:text-base ml-1">
                    °C
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyForecastCard;
