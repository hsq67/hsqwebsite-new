import { addDays, differenceInDays } from "date-fns";
import React, { useState, lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Mutation, useMutation } from "@tanstack/react-query";
import Toastify from "@/components/Toastify";
import tembookingform from "@/assets/tembookingform.webp";
import { ChevronRight, ArrowRight } from "lucide-react";
import BookingFoam from "@/components/BookingFoam";
import Footer from "@/components/layout/Footer";
import { useRoomStore } from "../store/store";
import { CreateReservation } from "@/api/roomsApi";
import { PostBookingData } from "@/types/BookingForm";
import { toast } from "react-toastify";
// import ConfirmationDialog from "@/components/ConfirmationDialog";
const ConfirmationDialog = React.lazy(
  () => import("@/components/ConfirmationDialog")
);
function BookingFormpage() {
  const [Confirmation, setConfirmation] = useState(false);
  const { Bookingwidget, BookingFormData } = useRoomStore();
  const { state } = useLocation();
  const room = state;
  const firstAvailableRoom = room?.availableRooms?.[0];
  const Firstimage = firstAvailableRoom?.images?.[0];
  // console.log("FirstAvaileRoom", firstAvailableRoom);
  // console.log("RoomID", firstAvailableRoom?._id);
  // console.log("First Imge", Firstimage);
  const checkin = new Date(Bookingwidget.checkin);
  const checkout = new Date(Bookingwidget.checkout);
  const totalNights = differenceInDays(checkout, checkin);
  // const TotalRent = room?.startingRate * totalNights;
  // console.log("TotalRent", TotalRent);
  // console.log("TotalNights", totalNights);

  // const finaldate = addDays(Bookingwidget.checkin, Bookingwidget.checkout);

  // console.log("Navigate Rooms", room);
  // console.log("BED TYPE", room.bedType);
  // const firstimage = room.availableRooms.map((value) => value.images[0]);
  // console.log("Firsimage", firstimage);
  // console.log("bookigcheckin", Bookingwidget.checkin);
  // console.log("bookingcheckout", Bookingwidget.checkout);
  // console.log("booking name", BookingFormData.name);
  // console.log("contact", BookingFormData);
  const { mutate, isPending } = useMutation({
    mutationFn: (data: PostBookingData) => CreateReservation(data),
    onSuccess: (res) => {
      console.log("Booking created successfully:", res);
      console.log("ResponseSucessMessage", res.message);
      toast.success(res.message, {
        position: "top-center",
        style: {
          background: "#dfab4e", // light orange background
          color: "black", // deep amber text
          border: "1px solid #fbbf24",
          fontWeight: "600",
        },
      });
      setConfirmation(true);
    },
    onError: (err: any) => {
      const message =
        err?.res?.data?.message || // from backend
        err?.message || // from JS Error
        "Something went wrong!";
      console.log("MessageReservation", message);
      // <Toastify message={message} />;
      Toastify({ message: message });
    },
  });
  const HandleValidation = () => {
    let isValid = true; // assume valid until proven otherwise
    const errors: Record<string, string> = {}; // store field-wise errors

    if (!BookingFormData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }
    if (!BookingFormData.address.trim()) {
      errors.address = "Address is required";
      isValid = false;
    }
    if (!BookingFormData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(BookingFormData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }
    if (!BookingFormData.contact.trim()) {
      errors.contact = "Contact number is required";
      isValid = false;
    } else if (!/^\d{10,15}$/.test(BookingFormData.contact)) {
      errors.contact = "Contact must be 10–15 digits";
      isValid = false;
    }
    if (!BookingFormData.cnic.trim()) {
      errors.cnic = "CNIC is required";
      isValid = false;
    } else if (!/^\d{13}$/.test(BookingFormData.cnic)) {
      errors.cnic = "CNIC must be 13 digits";
      isValid = false;
    }
    if (!BookingFormData.arrivaltime.trim()) {
      errors.arrivaltime = "Arrival time is required";
      isValid = false;
    }
    if (!BookingFormData.paymentmethod.trim()) {
      errors.paymentmethod = "Payment method is required";
      isValid = false;
    }
    if (!BookingFormData.terms.trim()) {
      errors.paymentmethod = "Please checked Terms&Conditions";
      isValid = false;
    }
    if (!isValid) {
      Object.values(errors).forEach((msg) => Toastify({ message: msg }));
    }

    return { isValid, errors };
  };
  const HandleSubmit = async () => {
    const { isValid } = HandleValidation();
    if (isValid) {
      console.log("✅ Form is valid, proceeding...");
      const mergeData = {
        fullName: BookingFormData.name,
        phone: BookingFormData.contact,
        address: BookingFormData.address,
        email: BookingFormData.email,
        cnic: BookingFormData.cnic,
        expectedArrivalTime: BookingFormData.arrivaltime,
        promoCode: BookingFormData.promocode,
        specialRequest: BookingFormData.requestmsg,
        paymentMethod: BookingFormData.paymentmethod,
        checkInDate: Bookingwidget.checkin,
        checkOutDate: Bookingwidget.checkout,
        roomId: firstAvailableRoom?._id,
      };
      mutate(mergeData);
    }
  };
  const getSafeImage = (img) => {
    if (!img || img === "" || img === null || img === undefined) {
      return tembookingform; // fallback image
    }
    return img;
  };

  return (
    <>
      {Confirmation ? (
        <Suspense fallback="Loading ">
          <ConfirmationDialog />
        </Suspense>
      ) : (
        <div>
          {/* upper section */}
          <div
            className="relative w-full bg-cover bg-bottom h-[50vh] lg:h-[90vh]"
            style={{
              backgroundImage: `url(${getSafeImage(Firstimage)})`,
            }}
          >
            {/* shadow div */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute left-[20%] top-[30%] md:left-[30%] md:top-[40%] lg:left-[35%] lg:top-[30%] 2xl:top-[40%]">
              <h1 className="text-white poppins-extrabold uppercase text-2xl  md:text-4xl lg:text-5xl 2xl:text-6xl ">
                {room?.category ? room?.category : null} Room
              </h1>
            </div>
            <div className="absolute flex flex-col bottom-0 md:left-16  lg:left-24 sm:bottom-24 text-white">
              <h1 className="poppins-extrabold text-2xl sm:text-5xl">
                RS.{room?.startingRate ? room?.startingRate : 0}
                <span className="poppins-regular text-lg lg:text-2xl">
                  /Night
                </span>
              </h1>
              <p className="text-primary pt-3 text-sm poppins-regular sm:text-xl">
                Preferred by Guests
              </p>
            </div>
            <div className="absolute  text-white right-0 bottom-3  sm:bottom-10 md:right-10 lg:right-32">
              <p className="text-primary poppins-bold  2xl:text-2xl">
                Room Details:
              </p>
              <ul className="text-sm 2xl:text-lg">
                <li>Free Wi-Fi</li>
                <li>Complimentary Breakfast</li>
                <li>Mountain View</li>
                <li>24/7 Room Service</li>
              </ul>
            </div>
          </div>
          {/* form section */}
          <div className="backgroundcolor w-full pt-10 pb-20 space-y-5 lg:space-y-0 lg:space-x-10 grid grid-cols-1 lg:grid-cols-2">
            <div className="pl-4 pr-4 lg:ml-20">
              <BookingFoam />
            </div>
            <div className="pr-4 pl-4 lg:pl-0 lg:pr-0">
              <div className=" w-full  lg:w-[70%] bg-[#FFFAF1] rounded-3xl shadow-xl">
                {/* top heading */}
                <div className="bg-black p-4 text-white rounded-tr-3xl rounded-tl-3xl">
                  <h1 className="poppins-bold text-xl">Booking Summery</h1>
                </div>
                {/* Stays */}
                <div className="m p-4">
                  <h1 className="poppins-bold text-xl">Stays</h1>
                </div>
                {/* line */}
                <div className="border-t-2 text-neutral-500 w-[90%] lg:w-[350px] m-auto  2xl:w-full" />
                {/* room type */}
                <div className="flex flex-col p-4">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Room type:</h1>
                    <p className="uppercase ">
                      {room?.bedType}
                      <span className="pl-1"> {room?.category}</span>
                      {/* ONE BED DELUXE ROOM */}
                    </p>
                  </div>
                </div>
                {/* room number */}
                <div className="flex flex-col p-4">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Room number:</h1>
                    <p>{firstAvailableRoom?.roomNumber}</p>
                  </div>
                </div>
                {/* check-in */}
                <div className="flex flex-col p-4">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Check-in:</h1>
                    <p>
                      {Bookingwidget?.checkin
                        ? Bookingwidget?.checkin
                        : "2025-08-29"}
                    </p>
                  </div>
                </div>
                {/* check-out */}
                <div className="flex flex-col p-4">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Check-out:</h1>
                    <p>
                      {Bookingwidget?.checkout
                        ? Bookingwidget?.checkout
                        : "2025-10-30"}
                    </p>
                  </div>
                </div>
                {/* nights */}
                <div className="flex flex-col p-4 mb-5">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Nights:</h1>
                    <p className="pr-2">{totalNights}</p>
                  </div>
                </div>
                {/* line */}
                <div className="border-t-2 text-neutral-500 w-[90%] lg:w-[350px] m-auto  2xl:w-full" />
                {/* One Day Rate  */}
                <div className="m p-4">
                  <h1 className="poppins-bold text-xl">One Day Rate </h1>
                </div>
                {/* one day date */}
                <div className="flex flex-col p-4">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">
                      {Bookingwidget?.checkin
                        ? Bookingwidget?.checkin
                        : "2025-08-29"}
                    </h1>
                    <p>Rs.{room?.startingRate ? room?.startingRate : 0}/-</p>
                  </div>
                </div>
                {/* Price Summary */}
                <div className="m p-4">
                  <h1 className="poppins-bold text-xl">Price Summary</h1>
                </div>
                {/* room rent */}
                <div className="flex flex-col p-4 bg-[#FFF2DD]  w-[90%] lg:w-96 2xl:w-full rounded-md m-auto">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Room Rate:</h1>
                    <p>
                      PKR {room?.startingRate ? room?.startingRate : "20000"}
                    </p>
                  </div>
                </div>
                {/* tax */}
                <div className="flex flex-col p-4 ">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Tax</h1>
                    <p className="pr-5">PKR 0.0</p>
                  </div>
                </div>
                {/* line */}
                <div className="border-t-2 text-neutral-500 w-[90%] lg:w-[350px] m-auto 2xl:w-full " />
                {/* total */}
                <div className="flex flex-col p-4">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Total</h1>
                    <p className="poppins-bold">
                      PKR {room?.startingRate * totalNights}
                    </p>
                  </div>
                </div>
                {/* booking button */}
                {/* <Link to={"/confirmation"}> */}
                <div onClick={HandleSubmit} className="pt-8 pb-10">
                  <button className="bg-gradient-to-r from-[#D7AA4D] to-[#D49237] text-black w-80 m-auto py-2 rounded-full flex items-center pl-24 gap-2 poppins-bold hover:bg-neutral-200 transition relative">
                    Book Now
                    <div className="absolute right-1 bg-black p-2 rounded-full">
                      <ChevronRight color="white" size={18} />
                    </div>
                  </button>
                </div>
                {/* </Link> */}
              </div>
              {/* Review */}
              <div className=" flex md:justify-center lg:justify-start ">
                {/* review card */}
                <div className="w-full  md:w-[90%] lg:w-[70%] text-black my-4 2xl:my-7">
                  <div className="bg-[#D7AB4E]  rounded-xl 2xl:h-36">
                    <h1 className="poppins-semibold pt-5 pl-5 2xl:text-xl">
                      Hsq towers,Jhika Gali, Murree
                    </h1>
                    <p className="pl-5 pb-2 poppins-bold 2xl:text-lg">
                      4.8 ★★★★★{" "}
                      <span className="underline pl-4 text-sm">
                        49Google reviews
                      </span>
                    </p>
                    <a
                      href="https://maps.app.goo.gl/fcSZV2ReQKyBtRGp7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-[#FFD680] rounded-xl p-2 flex justify-center poppins-semibold flex-row gap-3 items-center">
                        <p className="underline text-sm text-center hover:cursor-pointer 2xl:text-lg">
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
          <Footer></Footer>
        </div>
      )}
    </>
  );
}

export default BookingFormpage;
