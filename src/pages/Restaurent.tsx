import React from "react";
import ComingSoonCard from "@/components/cards/RetaurentCard";
import restaurentbg from "@/assets/Restaurent/restaurentbg.webp";
function Restaurent() {
  return (
    <>
      <section
        className=" w-full bg-cover bg-bottom h-[50vh] lg:h-[90vh] "
        style={{
          backgroundImage: `url(${restaurentbg})`,
        }}
      >
        <div className="flex flex-col text-white justify-center items-center space-y-1 sm:space-y-2 pt-24 sm:pt-44">
          <h1 className="Tuesdaynight text-[25px] sm:text-[50px] text-center">
            HSQ Tower
          </h1>
          <h1 className="poppins-bold text-2xl md:text-5xl lg:text-6xl text-center uppercase">
            Restaurant
          </h1>
          <p className="text-center w-96 sm:w-1/2">
            Bold Flavors. Fresh Ingredients. Real Taste
          </p>
        </div>
      </section>
      <section className="backgroundcolor h-full p-10">
        <div className="flex justify-center pt-10">
          <ComingSoonCard />
        </div>
      </section>
    </>
  );
}

export default Restaurent;
