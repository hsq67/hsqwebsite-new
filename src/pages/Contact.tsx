import Contactus from "@/assets/ContactUs/Contactus.webp";
import contactpage from "@/assets/ContactUs/contactpage.webp";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ContactCard from "@/components/cards/ContactCard";
import Footer from "@/components/layout/Footer";

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
          <div className="lg:w-3/4">
            <ContactForm />
          </div>
        </div>

        {/* We’d Love to Hear From You */}
        <div className="px-5 sm:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-4 text-center sm:text-left">
              <h2 className=" text-3xl md:text-4xl poppins-bold leading-tight">
                We’d Love To <br /> Hear From You
              </h2>
              <p className="text-sm poppins-medium">
                We value your comfort and privacy. <br />
                Review our Terms.
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
      <Footer />
    </>
  );
}

export default Contact;
