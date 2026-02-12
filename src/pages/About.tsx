import React from "react";
import { Link } from "react-router-dom";
import aboutbg from "@/assets/about/aboutbg.webp";
import logo from "@/assets/logo.webp";
import hotelimage from "@/assets/about/hotelimage.webp";
import Viewbutton from "@/components/buttons/Viewbutton";
import cardbg from "@/assets/about/cardbg.webp";
import { PiUsersFourFill, PiUsersThreeFill } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { IoBedSharp } from "react-icons/io5";
import AboutCard from "@/components/cards/AboutCard";
import Footer from "@/components/layout/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "General Manager",
    description:
      "Leads the hotel team and ensures guests enjoy a comfortable, safe, and high-quality stay.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Head Chef",
    description:
      "Responsible for preparing delicious meals and maintaining high food quality in our restaurant.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Guest Relations Manager",
    description:
      "Helps guests with requests, feedback, and ensures everyone feels welcome and cared for.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "David",
    role: "Hotel Operations Manager",
    description:
      "Manages daily hotel operations to make sure all services run smoothly and efficiently.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Housekeeping Supervisor",
    description:
      "Ensures rooms and public areas are clean, comfortable, and ready for every guest.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "James",
    role: "Front Desk Manager",
    description:
      "Handles guest check-ins, check-outs, and ensures friendly service at the reception desk.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
];

function About() {
  return (
    <>
      <div className="">
        {/* hero section */}
        <section
          className="relative w-full bg-center lg:bg-top h-[60vh]  lg:h-[80vh] bg-cover"
          style={{ backgroundImage: `url(${aboutbg})` }}
        >
          {/* Overlay for dark effect */}
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center h-full pt-6 ">
            <h1 className="text-3xl md:text-5xl poppins-bold text-white mb-6 sm:mb-2 2xl:text-8xl">
              ABOUT HSQ TOWER
            </h1>
            <p className="text-white text-sm poppins-medium  w-fit lg:w-[550px] leading-relaxed mb-6 2xl:text-xl 2xl:w-[50%]">
              At HSQ Tower, we believe that true luxury lies in the perfect
              blend of comfort, elegance, and thoughtful service. Our hotel is
              designed for travelers who seek more than just a place to stay —
              they seek an experience.
            </p>
            <div className="flex justify-betweenflex-row items-center gap-3 sm:gap-4">
              <div className="border-t-0 border  w-20 md:w-48 lg:w-96 border-white" />
              <Link to={"/rooms"}>
                <Viewbutton label="Book Now"></Viewbutton>
              </Link>

              <div className="border-t-0 border w-20 md:w-48 lg:w-96 border-white" />
            </div>
          </div>
        </section>
        {/* hotel card section */}
        <section className="backgroundcolor h-[85vh] lg:h-64 2xl:h-96">
          <section className="w-full flex flex-col  pt-10 lg:pt-0  justify-center lg:-bottom-10  items-center  lg:mt-0 absolute ">
            <div className="bg-[#FFF3DB] rounded-[30px] shadow-[0px_20px_0px_rgb(215,171,78),0_35px_60px_-15px_rgba(0,0,0,0.3)]  flex flex-col lg:flex-row items-center justify-center space-y-7 md:space-y-2 lg:space-y-0  pt-10 pb-7 lg:pt-0 w-[90%] md:w-[60%] lg:w-full  max-w-5xl h-full lg:h-48 2xl:h-64 2xl:py-36 ">
              {/* Left Content */}
              <div className="flex-flex flex-col lg:ml-16 poppins-extrabold items-center lg:items-start text-5xl  lg:text-4xl text-center md:text-left">
                <h2 className=" mb-4 2xl:text-4xl poppins-bold">
                  Welcome To <br />
                  <span className="text-primary">HSQ Tower</span>
                </h2>
              </div>

              {/* Middle Image */}
              <div className="flex-1 flex justify-center mb-4 md:mb-0">
                <img
                  src={hotelimage} // replace with your image
                  alt="HSQ Tower"
                  className="w-52 md:w-60 lg:w-52 lg:pt-32  lg:ml-32 2xl:ml-5 2xl:w-72 "
                />
              </div>

              {/* Right Content */}
              <div className="w flex justify-center ">
                <p className="text-black  poppins-medium leading-relaxed md:pt-10 lg:pt-0 text-center text-sm lg:text-left w-[80%] md:w-full  max-w-sm 2xl:text-lg">
                  At HSQ Tower, elegance meets convenience — the perfect stay
                  for guests who seek charm, comfort, and the ideal location to
                  explore Murree.
                </p>
              </div>
            </div>
          </section>
        </section>
        {/* Exceeding Expectations */}
        <section className="backgroundcolor pt-4  flex justify-center flex-col items-center">
          <p className="poppins-medium text-[#D49237] 2xl:text-2xl">
            Pure Hospitality
          </p>
          <h1 className="poppins-bold text-2xl lg:text-3xl 2xl:text-5xl mt-3">
            Exceeding Expectations!
          </h1>
          {/* card div */}
          <div
            className="flex flex-col lg:flex-row justify-center items-center
             w-[90%] lg:w-[80%] mx-auto h-full lg:h-[80vh] 
             mt-10 mb-10 rounded-2xl p-4 md:p-8 2xl:p-10
             bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${cardbg})` }}
          >
            {/* Left section */}
            <div className="flex flex-row lg:flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10">
              <AboutCard
                total="5+"
                title="Conference"
                icon={<PiUsersFourFill />}
              />
              <AboutCard
                total="50+"
                title="Lavish room"
                icon={<IoBedSharp />}
              />
            </div>

            {/* Center logo section */}
            <div className="flex justify-center items-center p-8 sm:p-10 lg:p-14 2xl:p-40 hover:scale-105 duration-200 ease-out">
              <div
                className="w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44 2xl:w-80 2xl:h-80 
                    bg-white/10 backdrop-blur-md border border-gray-300 
                    rounded-full shadow-lg flex justify-center items-center"
              >
                <div
                  className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 2xl:w-44 2xl:h-44 
                      border border-gray-300 rounded-full flex justify-center items-center"
                >
                  <img
                    className="w-20 sm:w-24 lg:w-28 2xl:w-36 object-contain"
                    src={logo}
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            {/* Right section */}
            <div className="flex flex-row lg:flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10">
              <AboutCard
                total="3000+"
                title="Customers"
                icon={<PiUsersThreeFill />}
              />
              <AboutCard total="96%" title="Hospitality" icon={<TiTick />} />
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="backgroundcolor py-16 md:py-20 2xl:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16 2xl:mb-20">
              <p className="poppins-medium text-[#D49237] text-sm sm:text-base md:text-lg 2xl:text-2xl">
                Meet Our Experts
              </p>
              <h1 className="poppins-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl mt-3 mb-4">
                Our Professional Team
              </h1>
              <p className="poppins-medium text-gray-600 max-w-2xl mx-auto text-sm sm:text-base 2xl:text-lg">
                Dedicated professionals committed to delivering exceptional
                hospitality and creating unforgettable experiences for every
                guest.
              </p>
            </div>

            {/* Team Carousel */}
            <div className="relative px-4 sm:px-8 w-full lg:px-12 2xl:px-16">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  // xs: 0px
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    // sm
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    // md
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  1024: {
                    // lg
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1280: {
                    // xl
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1440: {
                    // 2xl
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                }}
                className="pb-12"
              >
                {teamMembers.map((member) => (
                  <SwiperSlide
                    key={member.id}
                    className="flex justify-center pb-10"
                  >
                    <div className="bg-white rounded-2xl shadow-lg w-72 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      {/* Team Member Image */}
                      <div className="h-48 sm:h-52 md:h-56 lg:h-64 2xl:h-72 overflow-hidden">
                        <img
                          src={member.img}
                          alt={member.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Team Member Info */}
                      <div className="p-4 sm:p-5 md:p-6 2xl:p-8">
                        <h3 className="poppins-bold text-lg sm:text-xl md:text-2xl 2xl:text-3xl text-gray-800 mb-1">
                          {member.name}
                        </h3>
                        <p className="poppins-medium text-[#D49237] text-sm sm:text-base md:text-lg 2xl:text-xl mb-3 md:mb-4">
                          {member.role}
                        </p>
                        <p className="poppins-regular text-gray-600 text-xs sm:text-sm md:text-base 2xl:text-lg leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons - Styled like Booking Page */}
              <button className="swiper-button-prev !hidden sm:!flex !w-12 !h-12 !bg-[#D7AB4E] !rounded-full !shadow-lg !text-white hover:!bg-[#c69a3d] hover:!scale-110 !transition-all !duration-300 !left-0 !after:content-[''] justify-center items-center">
                <ChevronLeft size={24} />
              </button>
              <button className="swiper-button-next !hidden sm:!flex !w-12 !h-12 !bg-[#D7AB4E] !rounded-full !shadow-lg !text-white hover:!bg-[#c69a3d] hover:!scale-110 !transition-all !duration-300 !right-0 !after:content-[''] justify-center items-center">
                <ChevronRight size={24} />
              </button>

              {/* Custom Pagination */}
              <div className="swiper-pagination !relative !mt-8 !bottom-0"></div>
            </div>

            {/* Additional Team Info - Enhanced Styling */}
            <div className="mt-16 md:mt-20 2xl:mt-24 max-w-7xl mx-auto px-4">
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-[#D7AB4E]/20 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D7AB4E]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

                <h3 className="poppins-bold text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl text-center mb-10 text-gray-900 relative z-10">
                  Why Our Team Makes the Difference
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                  {/* Card 1 */}
                  <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-[#FFF9EF] transition-colors duration-300 group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#D7AB4E] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl font-bold">24/7</span>
                    </div>
                    <h4 className="poppins-bold text-gray-900 text-lg mb-2">
                      Round-the-Clock Service
                    </h4>
                    <p className="poppins-medium text-gray-600 text-sm">
                      Always available to assist you with any request, day or
                      night.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-[#FFF9EF] transition-colors duration-300 group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#D7AB4E] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl font-bold">15+</span>
                    </div>
                    <h4 className="poppins-bold text-gray-900 text-lg mb-2">
                      Years Experience
                    </h4>
                    <p className="poppins-medium text-gray-600 text-sm">
                      Decades of combined hospitality expertise at your service.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-[#FFF9EF] transition-colors duration-300 group sm:col-span-2 lg:col-span-1">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#D7AB4E] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl font-bold">20+</span>
                    </div>
                    <h4 className="poppins-bold text-gray-900 text-lg mb-2">
                      Successful Projects
                    </h4>
                    <p className="poppins-medium text-gray-600 text-sm">
                      Proven experience turning ideas into reliable, scalable
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default About;
