import roomimage from "@/assets/BG/Decorbg.webp";
import DecorCard from "@/components/cards/DecorCard";
import Footer from "@/components/layout/Footer";
function Decor() {
  return (
    <>
      <div>
        {/* Upper section */}
        <section
          className="w-full  bg-cover  bg-bottom h-[60vh] lg:h-[90vh]"
          style={{ backgroundImage: `url(${roomimage})` }}
        >
          <div className="inset-0 bg-black/50" />
          <div className=" flex flex-col text-white justify-center items-center space-y-3 pt-24 sm:pt-36 2xl:pt-56">
            <h1 className="Tuesdaynight text-[30px] sm:text-[50px] text-center 2xl:text-8xl">
              Look at The
            </h1>
            <h1 className="poppins-bold  text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl">
              STYLING & DECOR DEALS
            </h1>
            <p className="text-center w-[22rem] sm:w-1/2 2xl:text-lg">
              Discover refined comfort in our elegantly designed rooms spread
              across six floors, each crafted with style and sophistication in
              mind.
            </p>
          </div>
        </section>
        {/* body section with cards */}
        <section className="backgroundcolor space-y-6 pt-10 pb-10">
          {[1, 2, 3, 4, 5].map((value, index) => {
            return (
              <DecorCard
                images={[
                  "/Gallery/Decor/decor2.webp",
                  "/Gallery/Decor/decor1.webp",
                  "/Gallery/Decor/decor3.webp",
                ]}
                rate="90,000"
                heading="Standard Room"
                description=""
              />
            );
          })}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Decor;
