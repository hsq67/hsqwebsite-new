import React from "react";
import Termsconditionbg from "@/assets/TermsandCondition/Termsconditionbg.webp";
import { useRef } from "react";

import { ChevronUp, Mail, Phone, PhoneCall } from "lucide-react";

function TermsAndCondition() {
  const scrollRef = useRef(null);
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <section
        className="w-full  bg-cover  bg-bottom h-[60vh] lg:h-[85vh]"
        style={{ backgroundImage: `url(${Termsconditionbg})` }}
      >
        <div className=" flex flex-col text-white justify-center items-center space-y-3 pt-36 sm:pt-40 2xl:pt-56">
          <h1 className="Tuesdaynight text-[30px] sm:text-[50px] text-center 2xl:text-8xl">
            Privacy Policy
          </h1>
          {/* <h1 className="poppins-bold  text-3xl md:text-5xl lg:text-7xl">
          ROOMS AND SUITES
        </h1> */}
          <h1 className="text-center text-3xl  poppins-extrabold w-96 lg:text-6xl sm:w-1/2 2xl:text-7xl">
            Terms & Conditions
          </h1>
          <p className="text-center 2xl:text-xl">
            We value your comfort and privacy. Review our Terms.
          </p>
        </div>
      </section>
      <section className="backgroundcolor text-neutral-900 rounded-xl p-6 md:pl-32 md:pt-24   shadow-sm">
        <div
          ref={scrollRef}
          role="region"
          aria-label="Reservations & Billing"
          tabIndex={0}
          className="h-full overflow-y-auto no-scrollbar pr-2"
        >
          {/* Reservation and billing */}
          <div>
            <h3 className="poppins-bold text-lg mb-3 2xl:text-2xl">
              Reservations & Billing :
            </h3>

            <ul className="list-disc poppins-medium pl-5 space-y-2 2xl:text-xl">
              <li>
                Reservations can be made via our website, phone, or email.
              </li>
              <li>
                All guests must provide accurate personal and payment details.
              </li>
              <li>
                Payments may be required in full or partially in advance,
                depending on the booking type.
              </li>
              <li>
                HSQ Towers reserves the right to cancel bookings with invalid or
                incomplete information.
              </li>
            </ul>
            <ul className="list-disc pl-5 poppins-medium space-y-2 mt-5 2xl:text-xl">
              <li>
                Free cancellation is available up to [insert number] days before
                arrival.
              </li>
              <li>
                Cancellations made after this period may be subject to a [insert
                %] charge of the total booking.
              </li>
              <li>No-shows will be charged 100% of the booking amount.</li>
              <li>
                Refunds (if applicable) will be processed within 1–2 business
                days.
              </li>
            </ul>
          </div>
          {/* check in guest */}
          <div>
            <h3 className="poppins-bold text-lg mb-3 mt-3 2xl:text-2xl">
              Check-In & Check-Out
            </h3>

            <ul className="list-disc poppins-medium pl-5 space-y-2 2xl:text-xl">
              <li>Standard check-in time: 12:00.</li>

              <li>Standard check-out time: 12:00</li>
              <li>
                Early check-in/late check-out is subject to availability and may
                include additional charges.
              </li>
              <li>Valid government-issued ID is required at check-in.</li>
            </ul>
          </div>
          {/* Guest Responsibilities */}
          <div>
            <h3 className="poppins-bold text-lg mb-3 mt-3 2xl:text-2xl">
              Guest Responsibilities
            </h3>

            <ul className="list-disc poppins-medium pl-5 space-y-2 2xl:text-xl">
              <li>
                Guests are responsible for any damage caused to hotel property
                during their stay.
              </li>

              <li>Smoking is restricted to designated areas (Terrace). </li>
              <li>Pets are [not allowed] unless specifically agreed upon.</li>
              <li>
                Drinking not allowed in the premises,if found -a heavy fine will
                be imposed.{" "}
              </li>
              <li>
                Illegal activities or disruptive behavior will result in
                immediate eviction without refund.
              </li>
            </ul>
          </div>
          {/* Sharing of Information */}
          <div>
            <h3 className="poppins-bold text-lg mb-3 mt-3 2xl:text-2xl">
              Sharing of Information
            </h3>

            <ul className="list-disc poppins-medium pl-5 space-y-2 2xl:text-xl">
              <li>
                We may share data with trusted third parties such as payment
                processors or booking platforms.
              </li>

              <li>
                We will never sell or rent your personal information to third
                parties.{" "}
              </li>
            </ul>
          </div>
          {/* Policy Updates: */}
          <div>
            <h3 className="poppins-bold text-lg mb-3 mt-3 2xl:text-2xl">
              Policy Updates:
            </h3>
            <ul className="list-disc poppins-medium pl-5 space-y-2 2xl:text-xl">
              <li>
                We may update this Privacy Policy occasionally. Any changes will
                be posted on this page with a revised date
              </li>
            </ul>
          </div>
          {/* Hotel’s Rights: */}
          <div>
            <h3 className="poppins-bold text-lg mb-3 mt-3 2xl:text-2xl">
              Hotel’s Rights:{" "}
            </h3>
            <ul className="list-disc poppins-medium pl-5 space-y-2 2xl:text-xl">
              <li>
                HSQ Towers reserves the right to refuse service to anyone who
                violates these Terms & Conditions.
              </li>
              <li>
                Prices, services, and policies may change without prior notice.
              </li>
              <li>
                The hotel is not liable for loss of valuables; guests are
                encouraged to use the in-room safe
              </li>
            </ul>
          </div>
          {/* Governing Law: */}
          <div>
            <h3 className="poppins-bold text-lg mb-3 mt-3 2xl:text-2xl">
              Governing Law:
            </h3>
            <ul className="list-disc poppins-medium pl-5 space-y-2 2xl:text-xl">
              <li>
                These Terms & Conditions shall be governed by and construed in
                accordance with the laws of Pakistan.
              </li>
              <p>For any queries, please contact us at</p>
              <p className="flex gap-1">
                <Mail />
                Email: hsqtower@gmail.com
              </p>
              <p className="flex gap-1">
                <Phone />
                Phone: +92 3300491479
              </p>
            </ul>
          </div>
          {/* Important Notice: */}
          <div>
            <h3 className="poppins-bold text-lg mb-3 mt-3 2xl:text-2xl">
              Important Notice:{" "}
            </h3>
            <ul className="list-disc poppins-medium pl-5 space-y-2 2xl:text-xl">
              <li>
                Please switch off all electrical and gas appliances and hand
                over your room key to the reception when leaving
              </li>
              <li>
                Ironing is not allowed in the room under any circumstance.
              </li>
              <li>
                The management is not responsible for any accident, loss of
                item,Ordeath.
              </li>
            </ul>
          </div>
          {/* Information We Collect: */}
          <div>
            <h3 className="poppins-bold text-lg mb-3 mt-3 2xl:text-2xl">
              Information We Collect:{" "}
            </h3>
            <ul className="list-disc poppins-medium pl-5 space-y-2 2xl:text-xl">
              <li>Personal details: name, email, phone number, address.</li>
              <li>
                Booking information: dates of stay, room type, preferences.
              </li>
              <li>
                Payment details: processed securely via third-party payment
                providers.
              </li>
            </ul>
          </div>
          {/* Data Protection & Security: */}
          <div>
            <h3 className="poppins-bold text-lg mb-3 mt-3 2xl:text-2xl">
              Data Protection & Security:
            </h3>
            <ul className="list-disc poppins-medium pl-5 space-y-2 2xl:text-xl  ">
              <li>
                We use secure servers and encryption to protect your personal
                data.
              </li>
              <li>
                Access to your data is restricted to authorized staff only.
              </li>
            </ul>
          </div>
          {/* Your Rights: */}
          <div>
            <h3 className="poppins-bold text-lg mb-3 mt-3 2xl:text-2xl">
              Your Rights:
            </h3>
            <ul className="list-disc poppins-medium pl-5 space-y-2 2xl:text-xl">
              <li>Access, update, or correct your personal data.</li>
              <li>
                Request deletion of your information, subject to legal
                requirements.
              </li>
              <li>Opt out of promotional communications at any time.</li>
            </ul>
          </div>
          {/* Amenities: */}
          <div>
            <h3 className="poppins-bold text-lg mb-3 mt-3 2xl:text-2xl">
              Amenities:
            </h3>
            <ul className="list-disc poppins-medium pl-5 space-y-2 2xl:text-xl">
              <li>
                Amenities offered may differ depending on your selected room and
                package. Please check with the reception for{" "}
              </li>
              <p> details about what’s included in your booking.</p>
            </ul>
          </div>
          {/* Feedback: */}
          <div className="  md:w-[80%]">
            <h3 className="poppins-bold text-lg mb-3 mt-3 2xl:text-2xl">
              Feedback:
            </h3>
            <ul className="list-disc poppins-medium pl-5 space-y-2 2xl:text-xl">
              <li>
                Your suggestions help us refine our services and make your
                experience even better. If you have any feedback, questions, or
                requests
              </li>
              <p> our team is always ready to listen and respond with care.</p>
              <li>
                By confirming a booking with HSQ Towers, you agree to follow our
                terms and conditions. These may be updated from time to time to
                maintain the highest standards of comfort and hospitality for
                our guests.
              </li>
              <li>
                We can’t wait to welcome you to the serene beauty of Murree and
                ensure your stay with us is nothing short of remarkable.
              </li>
              <li>
                For bookings or any queries, reach out to us at +92 3300491479 —
                your comfort and satisfaction remain our top priority.
              </li>
            </ul>
          </div>
        </div>
        {/* scrool button */}
        <div className="flex justify-center mt-5">
          <button
            type="button"
            onClick={handleBackToTop}
            aria-label="Back to top"
            className="h-11 w-11 rounded-full border-2 border-neutral-900 text-neutral-900 inline-flex items-center justify-center transition hover:bg-black/5 active:scale-95"
          >
            <ChevronUp strokeWidth={2.4} />
          </button>
        </div>
      </section>
    </>
  );
}

export default TermsAndCondition;
