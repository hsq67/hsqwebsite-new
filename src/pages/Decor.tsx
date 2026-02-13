import roomimage from "@/assets/BG/Decorbg.webp";
import DecorCard from "@/components/cards/DecorCard";
import Footer from "@/components/layout/Footer";
const decorPackages = [
  {
    heading: "Birthday Decoration",
    rate: "45,000",
    descriptionPoints: [
      "Colorful balloon arch with customized theme",
      "Happy Birthday neon or foil banner",
      "LED fairy lights for warm ambience",
      "Cake table and photo backdrop setup",
    ],
    images: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
      "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
    ],
  },
  {
    heading: "Anniversary Decoration",
    rate: "70,000",
    descriptionPoints: [
      "Romantic rose petals bed and floor setup",
      "Heart-shaped balloon and flower decor",
      "Scented candles with soft lighting",
      "Customized anniversary message display",
    ],
    images: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
      "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde",
    ],
  },
  {
    heading: "Christmas Decoration",
    rate: "85,000",
    descriptionPoints: [
      "Beautifully decorated Christmas tree",
      "Warm fairy lights and hanging ornaments",
      "Santa, snowflakes, and festive props",
      "Cozy red & gold themed decor setup",
    ],
    images: [
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg",
    ],
  },
  {
    heading: "New Year Party Decoration",
    rate: "95,000",
    descriptionPoints: [
      "Luxury black & gold theme decor",
      "LED numbers and countdown setup",
      "Confetti balloons and ceiling decor",
      "Party lights with premium backdrop",
    ],
    images: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176",
      "https://images.pexels.com/photos/1304473/pexels-photo-1304473.jpeg",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
    ],
  },
  {
    heading: "Engagement Party",
    rate: "80,000",
    descriptionPoints: [
      "Elegant floral stage and seating setup",
      "Soft pastel balloon and drape theme",
      "Ring ceremony spotlight decor",
      "Perfect photo & video backdrop",
    ],
    images: [
      "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57",
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde",
    ],
  },
];

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
          {decorPackages.map((item, index) => (
            <DecorCard
              key={index}
              images={item.images}
              rate={item.rate}
              heading={item.heading}
              description={item.descriptionPoints}
            />
          ))}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Decor;
