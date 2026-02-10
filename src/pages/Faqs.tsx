import roomimage from "@/assets/BG/Faqbg.webp";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    //  only one open at a time
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "HOW DO I BOOK A ROOM?",
      answer: "Book Online, Call Us, Or Whatsapp For Instant Confirmation.",
    },
    {
      question: "WHAT'S YOUR CANCELLATION POLICY?",
      answer:
        "Free Cancellation Up To 48 Hours Before Check-In (On Standard Bookings).",
    },
    {
      question: "DO YOU OFFER GROUP/EVENT PACKAGES?",
      answer:
        "Yes, Customized Wedding, Birthday & Corporate Packages Are Available.",
    },
    {
      question: "CAN I REQUEST EARLY CHECK-IN OR LATE CHECK-OUT?",
      answer: "Yes, Based On Availability (Extra Charges May Apply).",
    },
    {
      question: "WHAT DO I NEED FOR CHECK-IN?",
      answer: "ID Card Verification For All Guests.",
    },
    {
      question: "WHAT ROOM TYPES DO YOU OFFER?",
      answer: "Standard, Executive,Deluxe,Presedential, And Family Suites.",
    },
    {
      question: "IS BREAKFAST INCLUDED?",
      answer: "Yes, Complimentary Gourmet Breakfast For All Guests.",
    },
    {
      question: "DO YOU HAVE WI-FI?",
      answer: "Yes, Free High-Speed Wi-Fi Throughout The Hotel.",
    },
    {
      question: "CAN I REQUEST EXTRA BEDS OR CRIBS?",
      answer:
        "Yes, Available On Request, But Only 1 If You Need More (Charges Will Be Applied)",
    },
    {
      question: "CAN YOU ARRANGE CANDLELIGHT DINNERS?",
      answer: "Yes, Romantic And Private Dining Setups Are Available.",
    },
    {
      question: "DO YOU HAVE VALET PARKING?",
      answer:
        "Yes, Complimentary Valet Parking Is Available For All Guests, Ensuring A Hassle-Free Arrival And Departure.",
    },
    {
      question: "WHAT PAYMENT METHODS DO YOU ACCEPT?",
      answer: "Cash, Bank Transfer, Debit/Credit Cards.",
    },
    {
      question: "DO YOU HAVE FAMILY ROOMS?",
      answer: "Yes, Spacious Family-Friendly Rooms.",
    },
    {
      question: "WHERE IS THE HOTEL LOCATED?",
      answer:
        "Ideally Located In Jhika Gali, Murree Just Minutes From Mall Road And Local Attractions, Offering Both Convenience And Tranquility.",
    },
    {
      question: "IS HOT WATER AVAILABLE?",
      answer:
        "Yes, We Provide 24/7 Hot And Cold Water In All Rooms To Ensure Your Comfort Throughout Your Stay.",
    },
    {
      question: "IS THERE A FIRE SAFETY SYSTEM IN PLACE?",
      answer:
        "Yes, Our Hotel Is Fully Equipped With Fire Extinguishers, Alarms, And Clearly Marked Fire Exits On Every Floor. We Follow Strict Safety Protocols To Ensure The Well-Being And Security Of All Our Guests In Case Of Any Emergency.",
    },
    {
      question: "DOES THE HOTEL HAVE A GYM OR FITNESS CENTER?",
      answer:
        "Yes, Our Gym Is Equipped With Modern Fitness Equipment, Allowing You To Stay Active During Your Stay.",
    },
    {
      question: "IS ROOM SERVICE AVAILABLE 24/7?",
      answer:
        "Yes, Our Staff Is Available Around The Clock To Serve Meals, Refreshments, Or Assist With Any In-Room Needs.",
    },
    {
      question: "IS THERE A GAMING AREA FOR ENTERTAINMENT?",
      answer:
        "Yes, Our Dedicated Gaming Arena Features Fun Indoor Games And Activities For Guests Of All Ages.",
    },
    {
      question: "DOES THE HOTEL HAVE A LIFT?",
      answer:
        "Yes, Our Hotel Is Equipped With A Modern Lift For Convenient Access To All Floors.",
    },
    {
      question: "ARE ROOM HEATERS AVAILABLE DURING WINTER?",
      answer:
        "Absolutely. All Rooms Are Equipped With Efficient Heating Systems To Keep You Warm And Cozy During The Cold Murree Weather.",
    },
    {
      question: "DOES THE HOTEL HAVE AN ON-SITE RESTAURANT?",
      answer:
        "Yes, Our Rooftop Restaurant Offers A Variety Of Cuisines And Scenic Views, Perfect For Any Time Of The Day.",
    },
  ];

  return (
    <>
      <div className="w-full">
        {/* Hero Section */}
        <section
          className="bg-cover bg-bottom h-[50vh] lg:h-[90vh]"
          style={{ backgroundImage: `url(${roomimage})` }}
        >
          <div className="relative flex flex-col text-white justify-center items-center space-y-3 pt-24 sm:pt-36 px-4 2xl:pt-56">
            <h1 className="Tuesdaynight text-[25px] sm:text-[50px] text-center 2xl:text-8xl">
              FAQS
            </h1>
            <h1 className="poppins-bold text-2xl md:text-5xl lg:text-6xl text-center leading-tight 2xl:text-7xl">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-center w-full sm:w-3/4 md:w-1/2 px-2 2xl:text-lg">
              We’ve Got All the Answers You’re Looking For
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full backgroundcolor py-10 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between gap-6 mb-10 text-center md:text-left">
              <h2 className="text-2xl poppins-extrabold lg:text-4xl">
                Your Queries Answered
              </h2>
              <div className="relative">
                <Link to={"/contact"}>
                  <button className="text-black poppins-semibold px-8 pl-3 py-2 bg-gradient-to-r from-[#D7AA4D] to-[#D49237] transition rounded-full">
                    Ask a Question
                  </button>
                </Link>
                <div className="absolute right-1 rounded-full bg-black px-[3px] py-[3px]  top-[7px] md:top-[6px]">
                  <ChevronRight size={20} color="white" />
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div className="grid md:grid-cols-2 gap-6 2xl:grid-cols-1">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border-l-4 border-black px-4 py-3 cursor-pointer "
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-sm text-gray-900 break-words 2xl:text-[15px]">
                      {faq.question}
                    </p>
                    <ChevronDown
                      className={`w-5 h-5 text-black transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {openIndex === index && (
                    <p className="mt-2 text-gray-600 text-sm break-words 2xl:text-[14px]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Faqs;
