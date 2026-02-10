import React, { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import Datepicker from "../components/Datepicker";
import { useNavigate } from "react-router-dom";
import { Search, Plus, Minus, Users } from "lucide-react";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { SearchAvailableRooms } from "@/api/roomsApi";
import { toast } from "react-toastify";
import { AvailableRoomGroupedResponse } from "@/types/Room";
import { useRoomStore } from "@/store/store";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

function BookingWidget() {
  const [departure, setDeparture] = useState<string | null>(null);
  const [arrival, setArrival] = useState<string | null>(null);

  // Guest state
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [guests, setGuests] = useState<string | null>(null);

  const { setAvaibleRooms, setBookingwidget, Bookingwidget } = useRoomStore();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    arrival: false,
    departure: false,
    guests: false,
  });

  // Update total guests when adults or children change
  useEffect(() => {
    const totalGuests = adults + children;
    setGuests(totalGuests > 0 ? totalGuests.toString() : null);
    if (totalGuests > 0) {
      setErrors((prev) => ({ ...prev, guests: false }));
    }
  }, [adults, children]);

  const { refetch } = useQuery<AvailableRoomGroupedResponse>({
    queryKey: ["available-rooms", arrival, departure, guests],
    queryFn: () =>
      SearchAvailableRooms({ checkin: arrival, checkout: departure, guests }),
    enabled: false,
  });

  const handleDepartureChange = (date: Date | null) => {
    setDeparture(date ? format(date, "yyyy-MM-dd") : null);
    setErrors((prev) => ({ ...prev, departure: false }));
  };

  const handleArrivalChange = (date: Date | null) => {
    setArrival(date ? format(date, "yyyy-MM-dd") : null);
    setErrors((prev) => ({ ...prev, arrival: false }));
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
            {/* Arrival */}
            <div className="flex items-center h-12">
              <Datepicker
                title="Check-in"
                value={arrival}
                hasError={errors.arrival}
                onChange={handleArrivalChange}
              />
            </div>
            {/* Departure */}
            <div className="flex items-center h-12">
              <Datepicker
                title="Check-out"
                value={departure}
                hasError={errors.departure}
                onChange={handleDepartureChange}
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
                          {adults === 0 && children === 0
                            ? "Select Guests"
                            : `${adults} ${adults === 1 ? "Adult" : "Adults"}, ${children} ${children === 1 ? "Child" : "Children"}`}
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
                          Set the number of adults and children.
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

                        {/* Children Row */}
                        <div className="flex items-center justify-between">
                          <div className="grid gap-0.5">
                            <label className="text-sm poppins-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Children
                            </label>
                            <span className="text-sm poppins-light text-muted-foreground">
                              Ages 2–12
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 border-none"
                              onClick={() =>
                                setChildren(Math.max(0, children - 1))
                              }
                              disabled={children <= 0}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-4 text-center text-sm poppins-light">
                              {children}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 border-none"
                              onClick={() => setChildren(children + 1)}
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
            <Link to="/book">
              <button
                // onClick={Validation}
                className="bg-gradient-to-l w-[270px] sm:w-fit px-12 py-2
      text-black rounded-full from-[#D7AB4E] to-[#D49136]"
              >
                Search
              </button>
            </Link>

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
