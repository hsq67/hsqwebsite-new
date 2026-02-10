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
        className="w-64 h-48 bg-cover bg-center rounded-3xl 2xl:w-72 2xl:h-56"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-30"></div>{" "} */}
        {/* Dark Overlay */}
        <div className="text-center p-5 2xl:p-10">
          {" "}
          {/* Content Layer */}
          <p className="font-semibold text-lg text-white  uppercase  2xl:text-2xl">
            {day}
          </p>
          {/* Weather Icon (Placeholder) */}
          <div className="flex justify-around items-center ">
            {/* <WeatherAnimation /> */}
            <Suspense>
              <Lottie
                animationData={getWeatherAnimation(currentweather)}
                loop
                className="w-24 h-24 2xl:w-32 2xl:h-32"
              />
            </Suspense>
            <div className="flex flex-col poppins-semibold space-x-">
              <div className="relative ">
                <div className="absolute -top-2  right-4">
                  <p className="text-white">o</p>
                </div>
                <p className="text-2xl text-white 2xl:text-3xl">
                  {maxTemp}
                  <span className="pl-2">C</span>
                </p>
              </div>

              <div className="relative">
                <div className="absolute -top-2  right-5">
                  <p className="text-white">o</p>
                </div>
                <p className="text-2xl text-white 2xl:text-3xl ">
                  {minTemp}
                  <span className="pl-2">C</span>
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
