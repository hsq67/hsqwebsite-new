// hooks
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// Components

import {
  FaCrown,
  FaMountain,
  FaConciergeBell,
  FaAward,
  FaHeart,
  FaWineGlassAlt,
  FaSwimmingPool,
  FaSpa,
  FaShieldAlt,
  FaBed,
} from "react-icons/fa";
import { GiHistogram, GiForkKnifeSpoon } from "react-icons/gi";
const BookingWidget = lazy(() => import("@/components/BookingWidget"));
const Hero = lazy(() => import("@/components/Hero"));
const GoogleReviewCard = lazy(() => import("@/components/cards/GoogleReview"));
const RoomCard = lazy(() => import("@/components/cards/RoomCard"));
const WhatsAppButton = lazy(() => import("@/components/buttons/Whatsapp"));
const CommanButton = lazy(() => import("@/components/buttons/Button"));
const Viewbutton = lazy(() => import("@/components/buttons/Viewbutton"));
const Footer = lazy(() => import("@/components/layout/Footer"));
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";
import { getAllRoomsByCategory, getReviews } from "@/api/roomsApi";
import { RoomsGroupedResponse } from "@/types/Room";
import FrontLogo from "@/components/layout/FrontLogo";
// svg
import Parking from "@/components/svg/Parking";
import Conference from "@/components/svg/Conference";
import Wifi from "@/components/svg/Wifi";
import Laundry from "@/components/svg/Laundry";
import Breakfast from "@/components/svg/Breakfast";
import Gym from "@/components/svg/Gym";
import Iron from "@/components/svg/Iron";
import Restaurent from "@/components/svg/Restaurent";
import AboutBed from "@/components/svg/AboutBed";
import AboutSenicView from "@/components/svg/AboutSenicView";
import AboutDinning from "@/components/svg/AboutDinning";
import Gamingzone from "@/components/svg/Gamingzone";
import WorkArea from "@/components/svg/WorkArea";
// icons
import { ArrowRight, Plus, Minus } from "lucide-react";

// images
import v1 from "@/assets/indexpage/v1.webp";
import v2 from "@/assets/indexpage/v2.webp";
import v3 from "@/assets/indexpage/v3.webp";
import v4 from "@/assets/indexpage/v4.webp";
import photoA from "@/assets/indexpage/about-bg.webp";
import reviewbg from "@/assets/indexpage/reviewbg.webp";

import amenitiebg from "@/assets/indexpage/amenitiebg.webp";
import logo from "@/assets/logo.webp";
// import roomimage from "@/assets/Book/roomimage.svg";
import galleryimage from "@/assets/indexpage/Gallerybg.webp";
import restaurent from "@/assets/indexpage/restaurent.webp";
// const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;
// store
import { useRoomStore, useReviewStore } from "@/store/store";
type FeatureItem = { icon: React.ElementType; label: string };
const FEATURES: FeatureItem[] = [
  { icon: AboutBed, label: "LUXURY ROOMS" },
  { icon: AboutSenicView, label: "SCENIC VIEWS" },
  { icon: AboutDinning, label: "FINE DINING" },
];

type AminitiesItem = { icon: React.ElementType; lable: string };
const Aminities: AminitiesItem[] = [
  {
    // icon: IoIosFitness,
    icon: Gym,
    lable: "Fitness Center",
  },
  {
    // icon: Wifi,
    icon: Wifi,
    lable: "Free Wifi",
  },
  {
    // icon: WashingMachine,
    icon: Laundry,
    lable: "Laundry Service",
  },
  {
    // icon: Users,
    icon: Conference,
    lable: "Conference Hall",
  },
  {
    // icon: Coffee,
    icon: Breakfast,
    lable: "Free Breakfast",
  },
  {
    // icon: CircleParking,
    icon: Parking,
    lable: "Free Parking",
  },
  {
    // icon: iron,
    icon: Iron,
    lable: "Iron",
  },
  {
    // restaurent
    icon: Restaurent,
    lable: "Restaurant",
  },
  {
    icon: Gamingzone,
    lable: "Gaming Area",
  },
  {
    icon: WorkArea,
    lable: "Working Area",
  },
];
const kitchens = [
  {
    title: "Italian Kitchen",
    // name: "Authentic Italian Cuisine",
    description:
      "Experience traditional Italian flavors with handmade pasta, wood-fired pizzas, and rich sauces prepared with fresh herbs.",
  },
  {
    title: "Pakistani Kitchen",
    // name: "Taste of Pakistan",
    description:
      "Indulge in aromatic biryanis, flavorful curries, and tandoori specialties, bringing you the essence of Pakistan.",
  },
  {
    title: "Mexican Kitchen",
    // name: "Spicy Mexican Delights",
    description:
      "Enjoy tacos, burritos, and sizzling fajitas served with fresh guacamole, salsa, and the bold taste of Mexican spices.",
  },
  {
    title: "Asian Kitchen",
    // name: "Fusion of Asia",
    description:
      "From Chinese stir-fries to Japanese sushi and Thai curries, our Asian kitchen offers a diverse and flavorful experience.",
  },
];
const slides = [
  {
    image: v1,
    title: "HSQ TOWERS",
    subtitle: "Welcome To",
    description:
      "At HSQ Tower, we redefine modern hospitality—blending style, innovation, and authentic warmth. ",
    buttonText: "Book now",
    href: "/rooms",
  },
  {
    image: v2,
    title: "RESTAURANT",
    subtitle: "Our",
    description:
      "Step Into our restaurant and indulge in a culinary journey where every dish is a masterpiece-crafter with passion",
    buttonText: "Book now",
    href: "/rooms",
  },
  {
    image: v3,
    title: "ROOMS & SUITES",
    subtitle: "Signature",
    description:
      "At HSQ Tower, Discover a selection of elegant living spaces-from cozy standard rooms to deluxe suites.",
    buttonText: "Book now",
    href: "/rooms",
  },
  {
    image: v4,
    title: "AMENITIES",
    subtitle: "Hotel",
    description:
      "At HSQ Tower, every moment is designed around you .From exciting tours and fascinating to world class exhibition and vibrant trade show.",
    buttonText: "Book now",
    href: "/rooms",
  },
  // { ... }
];
const Index = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { setRooms, rooms } = useRoomStore();
  const { setReviews, reviews } = useReviewStore();
  const [fetchEnabled, setFetchEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFetchEnabled(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Removed complex manual swiper initialization to match About.tsx pattern
  const { data, isLoading, isError, error, isSuccess } =
    useQuery<RoomsGroupedResponse>({
      queryKey: ["FetchRooms"],
      queryFn: getAllRoomsByCategory,
      staleTime: 60 * 60 * 1000, // 1 hour = 3600000 ms
      gcTime: 60 * 60 * 1000,
      refetchOnWindowFocus: false,
      enabled: fetchEnabled,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
    });
  // Fetched Reviews api
  const { data: Reviews, isSuccess: isReviewSuccess } = useQuery({
    queryKey: ["GoogleReviews"],
    queryFn: getReviews,
    staleTime: 60 * 60 * 1000, // 1 hour = 3600000 ms
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    enabled: fetchEnabled,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    select: (reviews) =>
      reviews.map((review: any) => ({
        name: review.user?.name,
        thumbnail: review.user?.thumbnail,
        snippet: review.extracted_snippet?.original || review.snippet,
        date: review.date,
      })),
  });
  console.log("Review", reviews);
  useEffect(() => {
    if (isSuccess && data) setRooms(data);
  }, [isSuccess, data]);
  useEffect(() => {
    if (isReviewSuccess && Reviews) setReviews(Reviews);
  }, [isReviewSuccess, Reviews]);
  // useEffect(() => {
  //   // if(Reviews){
  //   console.log("Goole_Review_Response", Reviews);
  //   // }
  // }, [Reviews]);

  // if (isError) return <p>Error</p>;
  // console.log("Data", data);
  // console.log("Store data", rooms);
  const allowedCategories = ["Deluxe", "Executive", "Presidential", "Standard"];

  const filtered = useMemo(() => {
    return (Array.isArray(rooms) ? rooms : [])
      .filter((cat) => allowedCategories.includes(cat.categoryName))
      .map((cat) => ({
        categoryName: cat.categoryName,
        room: cat.rooms[0],
      }))
      .filter((cat) => cat.room);
  }, [rooms]); // sirf rooms change hone par recompute hoga

  console.log("Filtered Data", filtered);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  // if (isLoading) return <FrontLogo />;
  return (
    <>
      {/* Landing page */}
      <section className="relative">
        <Suspense fallback={<FrontLogo />}>
          <Hero slides={slides} autoPlayInterval={5000} />
        </Suspense>
        <div className="absolute -bottom-60 lg:bottom-[-110px] w-full 2xl:w-[80%] 2xl:left-52 z-30">
          <Suspense>
            <BookingWidget />
          </Suspense>
        </div>
      </section>
      {/* about section */}
      <section className="relative overflow-hidden w-full bg-[#fff2db] pt-64 py-24 md:pt-72 lg:py-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header section */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-[3px] bg-[hsl(41,63%,58%)] mr-4"></div>
              <span className="poppins-medium-italic text-[hsl(41,63%,58%)] uppercase tracking-wider text-sm sm:text-2xl">
                Luxury & Comfort
              </span>
              <div className="w-12 h-[3px] bg-[hsl(41,63%,58%)] ml-4"></div>
            </div>

            <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block poppins-italic text-gray-800">
                Experience Refined
              </span>
              <span className="block poppins-bold text-primary mt-2">
                Luxury Hospitality
              </span>
            </h1>

            <p className="poppins-medium text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Timeless elegance, secure surroundings, and thoughtfully designed
              luxury rooms crafted for your comfort and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Image/Content */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px] group">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  className="h-full w-full"
                  navigation={{
                    nextEl: ".hotel-swiper-next",
                    prevEl: ".hotel-swiper-prev",
                  }}
                >
                  {[
                    "https://hsq-crm-invoices.s3.ap-south-1.amazonaws.com/images/rooms/1762338445307-NEW+1.webp",
                    "https://hsq-crm-invoices.s3.ap-south-1.amazonaws.com/images/rooms/1762338492371-NEW+3.webp",
                    "https://hsq-crm-invoices.s3.ap-south-1.amazonaws.com/images/rooms/1762338568574-NEW+1.webp",
                  ].map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt={`Luxury Hotel View ${index + 1}`}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation Buttons - Matching About.tsx structure */}
                <div className="hotel-swiper-prev absolute top-1/2 left-4 z-50 w-10 h-10 md:w-14 md:h-14 bg-white/30 hover:bg-[#D49237] backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer text-white transition-all duration-300 -translate-y-1/2 shadow-lg border border-white/20 hover:scale-110 active:scale-95 group/btn">
                  <ArrowRight className="rotate-180 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div
                  onClick={() => {
                    console.log("heelo world");
                  }}
                  className="hotel-swiper-next absolute top-1/2 right-4 z-50 w-10 h-10 md:w-14 md:h-14 bg-white/30 hover:bg-[#D49237] backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer text-white transition-all duration-300 -translate-y-1/2 shadow-lg border border-white/20 hover:scale-110 active:scale-95 group/btn"
                >
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 pt-6 sm:p-6 shadow-lg border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-[#fff2db] mr-4">
                      <GiHistogram
                        className="text-[hsl(41,63%,58%)]"
                        size={24}
                      />
                    </div>
                    <div>
                      <div className="poppins-bold text-3xl text-gray-900">
                        99%
                      </div>
                      <div className="poppins-medium text-gray-700 text-sm">
                        Guest Satisfaction
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 pt-6 sm:p-6 shadow-lg border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-[#fff2db] mr-4">
                      <FaAward className="text-[hsl(41,63%,58%)]" size={24} />
                    </div>
                    <div>
                      <div className="poppins-bold text-3xl text-gray-900">
                        51+
                      </div>
                      <div className="poppins-medium text-gray-700 text-sm">
                        Fivestar Reviews
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Content */}
            <div>
              <div className="mb-10">
                <h2 className="poppins-bold text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                  <span className="text-[hsl(41,63%,58%)]">Defined</span> by
                  Service, <br /> Distinguished by{" "}
                  <span className="text-[hsl(41,63%,58%)]">Style</span>
                </h2>

                <p className="poppins-medium text-gray-700 text-lg mb-6 leading-relaxed">
                  HSQ Tower isn't just a destination; it's a masterpiece of
                  modern hospitality. We blend architectural grandeur with the
                  warmth of home, ensuring every moment of your stay is curated
                  to perfection.
                </p>

                <p className="poppins-medium text-gray-700 text-lg leading-relaxed">
                  From our cloud-touch bedding to our skyline amenities, we
                  invite you to step into a world where your comfort is our only
                  ambition. Experience the art of living well.
                </p>
              </div>
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {/* 🛎 Guest Assistance */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 mr-4">
                    <FaConciergeBell
                      className="text-[hsl(41,63%,58%)]"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="poppins-bold text-gray-900 text-xl mb-2">
                      Guest Assistance
                    </h4>
                    <p className="poppins-medium text-gray-700">
                      Friendly staff available anytime to help with bookings,
                      requests, and anything you need during your stay.
                    </p>
                  </div>
                </div>

                {/* 🍽 Restaurant & Dining */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 mr-4">
                    <GiForkKnifeSpoon
                      className="text-[hsl(41,63%,58%)]"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="poppins-bold text-gray-900 text-xl mb-2">
                      Restaurant & Dining
                    </h4>
                    <p className="poppins-medium text-gray-700">
                      Enjoy fresh, delicious meals prepared by experienced chefs
                      in a relaxed and comfortable setting.
                    </p>
                  </div>
                </div>
                {/* 🛏 Luxury Rooms */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 mr-4">
                    <FaBed className="text-[hsl(41,63%,58%)]" size={24} />
                  </div>
                  <div>
                    <h4 className="poppins-bold text-gray-900 text-xl mb-2">
                      Luxury Rooms
                    </h4>
                    <p className="poppins-medium text-gray-700">
                      Spacious, soundproof rooms with premium bedding, elegant
                      interiors, and smart controls for ultimate comfort.
                    </p>
                  </div>
                </div>

                {/* 🛡 Safety & Security */}
                <div className="flex items-start group">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 mr-4">
                    <FaShieldAlt className="text-[hsl(41,63%,58%)]" size={24} />
                  </div>
                  <div>
                    <h4 className="poppins-bold text-gray-900 text-xl mb-2">
                      Safety & Security
                    </h4>
                    <p className="poppins-medium text-gray-700">
                      24/7 surveillance, controlled access, and trained staff
                      ensuring a secure and worry-free stay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews section */}
      <section
        className="bg-cover relative bg-center w-full h-64"
        style={{ backgroundImage: `url(${reviewbg})` }}
      >
        <div className="absolute inset-0 bg-black/20 h-64 " />
        <div className="pt-10  flex flex-col relative text-center space-y-3">
          <h1 className="poppins-bold text-2xl  lg:text-3xl text-white 2xl:text-5xl">
            What Our Guests Are Really Saying
          </h1>
          <a
            href="https://g.page/r/CUELIdypdTzcEBM/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CommanButton label="Write A Review" className="underline" />
          </a>
        </div>
        {/* cards with crousel */}
        <div className="w-full absolute mt-2 ">
          <Swiper
            modules={[Navigation, Autoplay]}
            // spaceBetween={30}
            loop={true}
            // centeredSlides={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 40 }, // mobile → 1 card
              400: {
                slidesPerView: 1,
                spaceBetween: 30,
                // centeredSlides: true,
              },
              411: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: -130,
                centeredSlides: true,
              }, // tablet → 2 cards
              1024: { slidesPerView: 2.2 }, // desktop → 3 cards
              1280: {
                slidesPerView: 2.2,
                spaceBetween: -100,
                centeredSlides: true,
              }, // large desktop → 4 cards
              1536: {
                slidesPerView: 2.9,
                spaceBetween: 0,
                centeredSlides: true,
              },
            }}
            className="w-full"
          >
            {reviews?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=" mt-8 sm:mt-10  mx-10">
                  {/* <img
                    src={dummmyreview}
                    alt={`Review ${index}`}
                    className="w-full rounded-2xl shadow-md"
                  /> */}
                  {/* {console.log("Review map", typeof)} */}
                  {/* {.map((data, index) => ( */}
                  {/* // <p>hello world</p> */}
                  {/* // <p>{d} </p> */}
                  {/* <p>{item.name}</p> */}
                  <Suspense>
                    <GoogleReviewCard
                      name={item.name}
                      thumbnail={item.thumbnail}
                      snippet={item.snippet}
                      date={item.date}
                    />
                  </Suspense>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Aminities Section */}
      <section className="w-full  pt-32 backgroundcolor">
        <div
          className="bg-cover relative bg-center w-[90%] rounded-3xl m-auto h-full md:h-[70%] lg:h-full lg:w-[85%]  "
          style={{ backgroundImage: `url(${amenitiebg})` }}
        >
          <div className="absolute  inset-0 bg-black/50  rounded-3xl" />
          {/* content */}
          <div className="flex flex-col lg:flex-row w-full space-y-3 md:space-y-5  relative pt-3 md:pt-10 lg:pt-20 pb-10 ">
            {/* heading */}
            <div className="w-full flex flex-col items-center justify-center text-center order-1 lg:order-2 m-auto lg:w-1/2">
              <img
                className="w-[50%] md:w-[40%] h-32 object-contain mx-auto 2xl:h-[30%] 2xl:w-[30%]"
                src={logo}
                loading="lazy"
                alt=""
              />
              <h1 className="text-white poppins-extrabold mt-4 sm:text-2xl 2xl:text-4xl 2xl:mt-1">
                Hotel Guest Facilities
                <p className="text-white text-sm sm:text-base font-normal 2xl:text-lg">
                  Where Every Detail Meets Luxury
                </p>
              </h1>
              {/* <Link to="/aminities">
                <div className="flex justify-center mt-4">
                  <Suspense>
                    <CommanButton label="Learn More" />
                  </Suspense>
                </div>
              </Link> */}
            </div>
            <div className="flex flex-row justify-center  order-1 lg:order-2 gap-3 w-full md:w-[60%] m-auto lg:w-[75%] 2xl:w-[50%] flex-wrap">
              {Aminities.map((data, index) => (
                <div
                  key={index}
                  className=" w-28 h-28 lg:h-32 lg:w-32 rounded-2xl bg-white/5 border-[1px] transition-all duration-300 ease-out hover:shadow-xl hover:cursor-pointer hover:scale-110  border-white/20 backdrop-blur-lg flex flex-col items-center justify-center  shadow-lg"
                >
                  <data.icon />
                  <p className="text-white text-[12px] poppins-semibold pt-1 2xl:text-[14px]">
                    {data.lable}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Rooms and Suites */}
      <section className="backgroundcolor flex pt-10 justify-center flex-col items-center pb-10  ">
        <h1 className="poppins-bold text-2xl sm:text-3xl 2xl:text-4xl">
          Rooms & Suites
        </h1>
        <p className="text-sm poppins-medium 2xl:text-lg">
          Discover Our Collection of Elegant Rooms
        </p>
        <div className="flex flex-col lg:flex-row gap-4 mt-10">
          {filtered.map((value, index) => (
            <div key={value.room.id}>
              <Suspense>
                <RoomCard
                  price={value.room.rate}
                  title={value.room.publicName}
                  image={value.room.images[0]}
                />
              </Suspense>
            </div>
          ))}
        </div>
        {/* button */}
        <div className="mt-5">
          <Link to="/book">
            <Suspense>
              <CommanButton label="View All" />
            </Suspense>
          </Link>
        </div>
      </section>
      {/* Gallery */}
      <section
        className="relative w-full lg:h-96 bg-cover bg-center flex flex-col  items-center pt-10 pb-5  sm:pt-16 text-white"
        style={{ backgroundImage: `url(${galleryimage})` }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-[#FFDC92]/20" />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center  space-y-3 text-center px-4">
          <h1 className="Tuesdaynight text-lg md:text-4xl 2xl:text-7xl">
            Look at The
          </h1>
          <p className="poppins-bold  sm:w-[70%] text-xl md:text-3xl lg:text-5xl 2xl:text-6xl">
            PHOTO GALLERY OF OUR HOTEL
          </p>
          <p className="text-sm 2xl:text-xl">Welcome to our photo gallery</p>
          {/* Button */}
          <Link to="/gallery">
            <Suspense>
              <Viewbutton label="  View Gallery" />
            </Suspense>
          </Link>
        </div>
      </section>
      {/* Restaurent*/}
      <section className="w-full backgroundcolor py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <div className="space-y-3 sm:space-y-6 px-6 md:px-12 lg:px-20">
            <h2 className="text-2xl text-center md:text-4xl poppins-bold text-black 2xl:text-4xl">
              Our Restaurant
            </h2>
            <p className="text-center lg:leading-relaxed poppins-regular max-w-md md:m-auto 2xl:w-[80%] 2xl:m-auto 2xl:text-lg">
              Indulge in a gourmet buffet breakfast, thoughtfully served in our
              sophisticated lounge or on the serene patio for a touch of
              open-air luxury.
            </p>

            {/* Accordion List */}
            <div className="space-y-3">
              {kitchens.map((kitchen, index) => (
                <div key={index} className="bg-[#F7E3BB] rounded-md shadow-sm">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between px-4 py-2 transition"
                  >
                    <span className="text-black poppins-medium 2xl:text-xl">
                      {kitchen.title}
                    </span>
                    {activeIndex === index ? (
                      <Minus className="text-black w-5 h-5 bg-gradient-to-r from-[#D7A94D] to-[#D49237] rounded-sm 2xl:w-9 2xl:h-9" />
                    ) : (
                      <Plus className="text-black w-5 h-5 bg-gradient-to-r from-[#D7A94D] to-[#D49237] rounded-sm 2xl:w-9 2xl:h-9" />
                    )}
                  </button>

                  {/* Description */}
                  {activeIndex === index && (
                    <div className="px-4 pb-4 poppins-reguler text-sm text-black 2xl:text-lg">
                      <div className="border-t opacity-15 border-black" />{" "}
                      <p className="pt-1">{kitchen.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex w-[90%] md:m-auto 2xl:w-[50%] ">
            <img
              src={restaurent}
              alt="Restaurant 1"
              className="object-cover w-full h-auto md:h-96 md:w-fit md:m-auto  top-24 2xl:w-full 2xl:h-full"
            />
          </div>
        </div>
      </section>
      {/* Map section */}
      <section className="bg-black w-full  p-1 md:p-10 flex flex-col sm:flex-row justify-between text-white">
        {/* left */}
        <div className="p-5 oder-1 flex items-baseline flex-col space-y-7">
          <h1 className="poppins-extrabold text-2xl text-center lg:text-3xl 2xl:text-4xl">
            Near HSQ Towers
          </h1>
          {/* location1 */}
          <div className="flex flex-row items-center gap-4">
            <div className="relative bg-primary py-2 px-2 rounded-full"></div>
            <p className="2xl:text-lg">3 mins Mall Road Murree</p>
          </div>
          {/* location2 */}
          <div className="flex flex-row items-center gap-4">
            <div className=" relative bg-primary py-2 px-2 rounded-full"></div>
            <p className="2xl:text-lg">5 mins Mcdonalds,lower topa</p>
          </div>
          {/* location3 */}
          <div className="flex flex-row items-center gap-4">
            <div className=" relative bg-primary py-2 px-2 rounded-full" />
            <p className="2xl:text-lg">6 mins Coffee bean and tea leaf</p>
          </div>
          {/* location4 */}
          <div className="flex flex-row items-center gap-4">
            <div className="relative bg-primary py-2 px-2 rounded-full" />
            <p className="2xl:text-lg"> 10 mins Gloria Jeans, Chaye Khana</p>
          </div>
          {/* google direction */}
          <div className="flex flex-row items-center gap-4">
            <div className=" relative bg-primary py-2 px-2 rounded-full" />
            <p className="2xl:text-lg"> Get Directions on Google/Apple Maps</p>
          </div>
          {/* Review */}
          <a
            href="https://maps.app.goo.gl/fcSZV2ReQKyBtRGp7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-64 h-fit  text-black my-4">
              <div className="bg-[#D7AB4E] p-2">
                <h1 className="poppins-semibold">
                  Hsq towers,Jhika Gali, Murree
                </h1>
                <p>4.8 29 Google reviews</p>
              </div>
              <div className="bg-[#FFD680] p-2 flex justify-center poppins-semibold flex-row gap-3 items-center">
                <p className="underline text-sm text-center hover:cursor-pointer">
                  View larger map
                </p>
                <div className="relative bg-black w-7 h-7 rounded-full">
                  <ArrowRight
                    color="white"
                    className="absolute top-1 left-1"
                    size={20}
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* right */}
        <div className="w-full sm:w-1/2 ">
          {/* <img className="order-2" src={bookbg} alt="" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.0013501276594!2d73.41395537442568!3d33.91536482494771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfd78972fd4569%3A0xdc3c75a9dc210b41!2sHSQ%20Towers!5e0!3m2!1sen!2s!4v1758212472901!5m2!1sen!2s"
            width="600"
            height="450"
            // style={{ border: 0 }}
            className="w-full pb-3 h-56 sm:h-full sm:w-full"
            //  allowFullScreen=
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <div className="relative">
        <Suspense>
          <WhatsAppButton />
        </Suspense>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
      {/* <NewFooter></NewFooter> */}
    </>
  );
};

export default Index;
