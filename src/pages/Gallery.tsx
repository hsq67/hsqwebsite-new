import React from "react";
import gallerybg from "@/assets/indexpage/Gallerybg.webp";
import Viewbutton from "@/components/buttons/Viewbutton";
import Footer from "@/components/layout/Footer";
import { useState, lazy, Suspense } from "react";

// import components
// const Restaurant = React.lazy(() => import("@/components/gallery/Restaurant"));
const Rooms = React.lazy(() => import("@/components/gallery/Rooms"));
const Snow = React.lazy(() => import("@/components/gallery/Snow"));
const Outdoor = React.lazy(() => import("@/components/gallery/Outdoor"));
// const ConferenceHall = React.lazy(
//   () => import("@/components/gallery/ConferenceHall")
// );
// const Bar = React.lazy(() => import("@/components/gallery/Bar"));
const Decor = React.lazy(() => import("@/components/gallery/Decor"));
// const Gym = React.lazy(() => import("@/components/gallery/Gym"));
// Loading Component
import FrontLogo from "@/components/layout/FrontLogo";
const categories = [
  // { name: "Restaurant", component: Restaurant },
  { name: "Rooms", component: Rooms },
  // { name: "Gym", component: Gym },
  { name: "Outdoor", component: Outdoor },
  { name: "Snow", component: Snow },
  // { name: "ConferenceHall", component: ConferenceHall },
  { name: "Decor", component: Decor },
  // { name: "Bar", component: Bar },
];
function Gallery() {
  const [active, setActive] = useState("Rooms");

  const ActiveComponent = categories.find(
    (cat) => cat.name === active
  )?.component;
  return (
    <>
      <div>
        <section
          className="relative w-full bg-center lg:bg-top h-[60vh]  lg:h-[80vh] bg-cover"
          style={{ backgroundImage: `url(${gallerybg})` }}
        >
          {/* Overlays */}
          {/* <div className="absolute inset-0 bg-[#FFDC92]/20" /> */}
          {/* <div className="absolute inset-0 bg-black/50" /> */}
          <div className=" pt-20 lg:pt-28  flex-col flex justify-center items-center text-white 2xl:pt-56">
            <h1 className="Tuesdaynight text-white text-[35px] lg:text-[50px] text-center 2xl:text-8xl ">
              Look at The
            </h1>
            <h1 className="poppins-bold  text-center text-2xl xs:text-4xl lg:text-7xl 2xl:text-7xl">
              PHOTO GALLERY
            </h1>
            <p className=" w-[90%] lg:w-[70%]  m-auto text-center 2xl:text-lg">
              At HSQ Tower, we blend comfort, elegance, and thoughtful service
              to create experiences beyond a place to stay.
            </p>
            <div className="flex justify-center mt-4 poppins-bold">
              <Viewbutton label="Book Now" />
            </div>
          </div>
        </section>
        {/* gallery section */}
        <section className="backgroundcolor ">
          <div className="flex flex-col p-10 space-y-6 justify-center lg:flex-row  lg:justify-between">
            <div className="text-center text-2xl xs:text-3xl lg:text-start 2xl:text-5xl 2xl:ml-4 lg:w-1/3">
              <h1 className="poppins-bold">Discover Elegance Frame By Frame</h1>
            </div>
            <div className=" text-center text-sm poppins-medium  lg:w-1/3 2xl:w-1/4 2xl:text-start 2xl:mr-3 2xl:text-lg">
              <p>
                At HSQ Tower, elegance meets convenience — the perfect stay for
                guests who seek charm, comfort, and the ideal location to
                explore Murree.
              </p>
            </div>
          </div>
          {/* rebin */}
          <div className="flex rounded-md  gap-2 bg-[#FDEBC7] w-full justify-center flex-wrap  lg:w-[43%] m-auto mb-8 ">
            {categories.map((cat) => (
              <div className="">
                <button
                  key={cat.name}
                  onClick={() => setActive(cat.name)}
                  className={`px-3 lg:px-10 py-2 rounded-md text-sm poppins-semibold transition 2xl:text-xl ${
                    active === cat.name
                      ? "bg-[#D49237] text-white shadow"
                      : "text-black hover:bg-[#D49237]"
                  }`}
                >
                  {cat.name}
                </button>
              </div>
            ))}
          </div>
          <div className="w-full flex p-5 pb-16 lg:justify-center gap-3 lg:gap-10 lg:p-10 2xl:p-14 2xl:pb-24 flex-wrap flex-row">
            <Suspense fallback={<FrontLogo />}>
              {ActiveComponent && <ActiveComponent />}
            </Suspense>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Gallery;
