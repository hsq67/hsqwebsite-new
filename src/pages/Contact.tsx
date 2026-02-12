import Contactus from "@/assets/ContactUs/Contactus.webp";
import contactpage from "@/assets/ContactUs/contactpage.webp";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ContactCard from "@/components/cards/ContactCard";
import Footer from "@/components/layout/Footer";
import Viewbutton from "@/components/buttons/Viewbutton";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      {/* main section */}
      <section
        className="relative w-full h-[50vh]  lg:h-[80vh] bg-cover bg-bottom flex justify-center items-center"
        style={{ backgroundImage: `url(${Contactus})` }}
      >
        <div className="flex flex-col justify-center items-center text-white space-y-4">
          <h1 className="Tuesdaynight text-3xl lg:text-5xl 2xl:text-8xl">
            Info
          </h1>
          <h1 className="poppins-bold text-4xl lg:text-7xl">CONTACT US</h1>
          <p className="text-center 2xl:text-xl">
            We value your comfort and privacy. Review our Terms.
          </p>
        </div>
      </section>

      {/* body section */}
      <section className="backgroundcolor pb-20 relative">
        {/* Contact Form Container - Negative Margin Overlap */}
        <div className="container mx-auto px-4 md:px-10 lg:px-60 flex justify-center -mt-32 md:-mt-48 lg:-mt-52 relative z-20 mb-20">
          <div className="w-full g:w-3/4">
            <ContactForm />
          </div>
        </div>

        {/* We’d Love to Hear From You */}
        <div className="px-5 sm:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-4 text-center sm:text-left">
              <h2 className=" text-3xl md:text-4xl poppins-bold leading-tight">
                We’d Love To Hear From You
              </h2>
              <p className="text-sm poppins-medium">
                We value your comfort and privacy. Review our Terms.
              </p>
            </div>

            {/* RIGHT IMAGE CARD */}
            <div className="relative w-full mt-10 md:mt-0">
              {/* Circle Icon */}
              <div className="absolute -top-8 -left-5 bg-[#D6A53F] p-3 rounded-full shadow-lg z-10">
                <MessageCircle className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>

              <img
                src={contactpage}
                alt="roompic"
                className="w-full md:w-[90%] h-[250px] md:h-[300px] bg-bottom object-cover shadow-md rounded-lg"
              />
              <div className="flex justify-center py-10">
                {/* book now button  */}
                <Link to={"/rooms"}>
                  <Viewbutton label="Book Now" />
                </Link>
              </div>
            </div>
          </div>

          {/* CONTACT INFO CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-6xl mx-auto">
            {/* CALL */}
            <ContactCard
              heading="Make a Call"
              description="+92 3300491479"
              icon={Phone}
            />
            {/* EMAIL */}
            <ContactCard
              heading="Send a Mail"
              description="hsqtowers@gmail.com"
              icon={Mail}
            />
            {/* LOCATION */}
            <ContactCard
              icon={MapPin}
              heading="Location"
              description="Hsq towers,Jhika Gali, Murree, Rawalpindi, Punjab"
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
      <Footer />
    </>
  );
}

export default Contact;
