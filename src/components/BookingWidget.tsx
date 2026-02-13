import React, { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import Datepicker from "../components/Datepicker";
import { useNavigate } from "react-router-dom";
import { Search, Plus, Minus, Users } from "lucide-react";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { searchAvailableRooms } from "@/api/roomsApi";
import { toast } from "react-toastify";
import { AvailableRoomCategoryResponse } from "@/types/Room";
import { useRoomStore } from "@/store/store";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

function BookingWidget() {
  const [checkout, setCheckout] = useState<string | null>(null);
  const [checkin, setCheckin] = useState<string | null>(null);

  // Guest state
  const [adults, setAdults] = useState(0);
  const [infants, setInfants] = useState(0);
  const [guests, setGuests] = useState<string | null>(null);

  const { setAvailableRooms, setBookingWidget, bookingWidget } = useRoomStore();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    checkin: false,
    checkout: false,
    guests: false,
  });

  // Update total guests when adults or infants change
  useEffect(() => {
    const totalGuests = adults + infants;
    setGuests(totalGuests > 0 ? totalGuests.toString() : null);
    if (totalGuests > 0) {
      setErrors((prev) => ({ ...prev, guests: false }));
    }
  }, [adults, infants]);

  const { refetch } = useQuery<AvailableRoomCategoryResponse>({
    queryKey: ["available-rooms", checkin, checkout, adults, infants],
    queryFn: () =>
      searchAvailableRooms({
        checkin: checkin,
        checkout: checkout,
        adults,
        infants,
      }),
    enabled: false,
  });

  const handleCheckoutChange = (date: Date | null) => {
    setCheckout(date ? format(date, "yyyy-MM-dd") : null);
    setErrors((prev) => ({ ...prev, checkout: false }));
  };

  const handleCheckinChange = (date: Date | null) => {
    setCheckin(date ? format(date, "yyyy-MM-dd") : null);
    setErrors((prev) => ({ ...prev, checkin: false }));
  };

  const handleBookNow = () => {
    // Validation
    // const newErrors = {
    //   checkin: !checkin,
    //   checkout: !checkout,
    //   guests: guests === null,
    // };
    // setErrors(newErrors);

    if (!checkin || !checkout || guests === null) {
      return navigate("/rooms");
      //  toast.error("Please fill all booking details", {
      //   position: "top-center",
      //   style: {
      //     background: "#dfab4e",
      //     color: "black",
      //     border: "1px solid #fbbf24",
      //     fontWeight: "600",
      //   },
      // });
    }

    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    if (checkoutDate <= checkinDate) {
      return toast.error("Check-out must be after check-in.", {
        position: "top-center",
        style: {
          background: "#dfab4e",
          color: "black",
          border: "1px solid #fbbf24",
          fontWeight: "600",
        },
      });
    }

    // Store booking data in global store
    setBookingWidget({
      checkin: checkin,
      checkout: checkout,
      adults,
      infants,
    });

    // Navigate to rooms with search parameters
    const searchParams = new URLSearchParams({
      checkin: checkin,
      checkout: checkout,
      adults: adults.toString(),
      infants: infants.toString(),
    });

    navigate(`/rooms?${searchParams.toString()}`);
  };

  // const Validation = async () => {
  //   const newErrors = {
  //     arrival: !arrival,
  //     departure: !departure,
  //     guests: !guests,
  //   };
  //   setErrors(newErrors);

  //   if (!arrival || !guests || !departure) {
  //     return toast.error("All Fields Required", {
  //       position: "top-center",
  //       style: {
  //         background: "#dfab4e",
  //         color: "black",
  //         border: "1px solid #fbbf24",
  //         fontWeight: "600",
  //       },
  //     });
  //   }

  //   const arrivalDate = new Date(arrival);
  //   const departureDate = new Date(departure);

  //   if (departureDate < arrivalDate) {
  //     return toast.error("Check-out must be after check-in.", {
  //       position: "top-center",
  //       style: {
  //         background: "#dfab4e",
  //         color: "black",
  //         border: "1px solid #fbbf24",
  //         fontWeight: "600",
  //       },
  //     });
  //   }

  //   try {
  //     const { data } = await refetch();
  //     setAvaibleRooms(data);
  //     navigate("/rooms");
  //     setBookingwidget({
  //       ...Bookingwidget,
  //       checkout: departure,
  //       checkin: arrival,
  //     });
  //   } catch (err: any) {
  //     setDeparture("");
  //     setArrival("");
  //     // Reset guests
  //     setAdults(0);
  //     setChildren(0);
  //     setGuests(null);

  //     toast.error(err.message || "Something went wrong", {
  //       position: "top-center",
  //     });
  //   }
  // };

  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="border-t-[#D7AB4E] border-l-[#D7AB4E] border-r-[#666666] border-b-[#666666]
    border-2 rounded-3xl lg:rounded-full bg-gradient-to-l from-[#303030] to-[#111111]
    w-full xs:w-[95%] md:w-[80%] lg:w-[80%] xl:w-[90%] 2xl:w-full
    m-auto h-fit lg:h-32 p-0 lg:p-14
    gap-5 flex flex-col items-center lg:flex-row  lg:justify-center
    2xl:gap-14 2xl:p-16"
        >
          {/* LOGO */}
          <div className="flex justify-center items-center">
            <img
              className="w-28 h-20 2xl:h-24 2xl:w-32"
              src={logo}
              alt="Hsqlogo"
            />
          </div>

          {/* INPUT ROW */}
          <div className="flex gap-2 pl-2 xs:pl-4 lg:gap-7 2xl:gap-10 xs:flex-row items-center">
            {/* Check-in */}
            <div className="flex items-center h-12">
              <Datepicker
                title="Check-in"
                value={checkin}
                hasError={errors.checkin}
                onChange={handleCheckinChange}
              />
            </div>
            {/* Check-out */}
            <div className="flex items-center h-12">
              <Datepicker
                title="Check-out"
                value={checkout}
                hasError={errors.checkout}
                onChange={handleCheckoutChange}
              />
            </div>

            {/* Guests */}
            <div className="flex items-center h-12">
              <div className="flex flex-col gap-1 w-full">
                <label className="text-white px-1 pb-1 poppins-light text-sm">
                  Guests :
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      // variant="outline"
                      className={`
                        w-[140px] sm:w-[180px] lg:w-[200px] justify-between text-left font-normal bg-white text-black 
                        ${errors.guests ? "border-2 border-red-800" : "border-0 shadow-sm"}
                        h-10 px-3 py-2 text-sm
                      `}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Users className="h-4 w-4 opacity-50 shrink-0" />
                        <span className="truncate">
                          {adults === 0 && infants === 0
                            ? "Select Guests"
                            : `${adults} ${adults === 1 ? "Adult" : "Adults"}, ${infants} ${infants === 1 ? "Infant" : "Infants"}`}
                        </span>
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-72 sm:w-80 p-4 bg-white"
                    align="center"
                  >
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="poppins-bold text-lg leading-none text-primary">
                          Select Guests
                        </h4>
                        <p className="text-sm poppins-light text-muted-foreground">
                          Set the number of adults and infants.
                        </p>
                      </div>
                      <div className="grid gap-4">
                        {/* Adults Row */}
                        <div className="flex items-center justify-between">
                          <div className="grid gap-0.5">
                            <label className="text-sm poppins-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Adults
                            </label>
                            <span className="text-sm poppins-light text-muted-foreground">
                              Ages 13 or above
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 border-none"
                              onClick={() => setAdults(Math.max(0, adults - 1))}
                              disabled={adults <= 0}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-4 text-center text-sm poppins-light">
                              {adults}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 border-none"
                              onClick={() => setAdults(adults + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="h-[1px] w-full bg-slate-200" />

                        {/* Infants Row */}
                        <div className="flex items-center justify-between">
                          <div className="grid gap-0.5">
                            <label className="text-sm poppins-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Infants
                            </label>
                            <span className="text-sm poppins-light text-muted-foreground">
                              Under 2 years
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 border-none"
                              onClick={() =>
                                setInfants(Math.max(0, infants - 1))
                              }
                              disabled={infants <= 0}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-4 text-center text-sm poppins-light">
                              {infants}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 border-none"
                              onClick={() => setInfants(infants + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* SEARCH BUTTON */}
          <div className="poppins-semibold relative flex justify-center w-full sm:w-fit items-end mb-5 lg:mb-3 h-[72px]">
            <button
              onClick={handleBookNow}
              className="bg-gradient-to-l w-[270px] sm:w-fit px-12 py-2
      text-black rounded-full from-[#D7AB4E] to-[#D49136] hover:opacity-90 transition-opacity"
            >
              Book now
            </button>

            <div className="absolute left-16 xs:left-20 md:left-2 lg:left-3 top-10 bg-black rounded-full px-1 py-1">
              <Search size={18} color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingWidget;
