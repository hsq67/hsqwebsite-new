import React, { useState, useEffect } from "react";
import formbg from "../assets/BG/foambg.svg";
import { useRoomStore } from "@/store/store";
import { useNavigate } from "react-router-dom";

interface BookingFoamProps {
  errors?: Record<string, string>;
}

function BookingFoam({ errors = {} }: BookingFoamProps) {
  const navigate = useNavigate();
  const { setBookingFormData, bookingFormData } = useRoomStore();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    email: "",
    cnic: "",
    arrivaltime: "",
    promocode: "",
    requestmsg: "",
    paymentmethod: "",
    terms: "",
  });

  // Step 2: Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData, // keep old values
      [name]: value, // update only the changed field
    });
  };
  useEffect(() => {
    setBookingFormData(formData);
  }, [formData, setBookingFormData]);
  return (
    <>
      <div className="bg-[#FFFAF1] w-full rounded-lg h-full pb-5">
        {/* heading */}
        <div className="bg-primary h-12 p-4 text-white  rounded-tl-3xl rounded-tr-3xl">
          <h1 className="poppins-bold lg:text-xl">Guest Details</h1>
        </div>
        <div className="pt-10 p-3 ">
          <form className="">
            {/* NAME AND CONTACT NUMBER */}
            <div className="flex flex-col lg:flex-row gap-4 mb-5">
              <div className="flex flex-col lg:w-1/2 flex-1">
                <input
                  className={`pl-5 py-2 rounded-md border ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-400"
                  } focus:outline-none focus:ring-2 2xl:py-3`}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span
                    id="name-error"
                    className="text-red-500 text-sm mt-1 poppins-regular"
                  >
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="flex flex-col lg:w-1/2 flex-1">
                <input
                  className={`pl-5 py-2 rounded-md border ${
                    errors.contact
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-400"
                  } focus:outline-none focus:ring-2 2xl:py-3`}
                  type="tel"
                  placeholder="03123456789"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  aria-invalid={!!errors.contact}
                  aria-describedby={
                    errors.contact ? "contact-error" : undefined
                  }
                />
                {errors.contact && (
                  <span
                    id="contact-error"
                    className="text-red-500 text-sm mt-1 poppins-regular"
                  >
                    {errors.contact}
                  </span>
                )}
              </div>
            </div>
            {/*  Address Email*/}
            <div className="flex  flex-col lg:flex-row gap-4 mb-5">
              <div className="flex flex-col lg:w-1/2 flex-1">
                <input
                  className={`pl-5 py-2 rounded-md border ${
                    errors.address
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-400"
                  } focus:outline-none focus:ring-2 2xl:py-3`}
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address:"
                  aria-invalid={!!errors.address}
                  aria-describedby={
                    errors.address ? "address-error" : undefined
                  }
                />
                {errors.address && (
                  <span
                    id="address-error"
                    className="text-red-500 text-sm mt-1 poppins-regular"
                  >
                    {errors.address}
                  </span>
                )}
              </div>
              <div className="flex flex-col lg:w-1/2 flex-1">
                <input
                  className={`pl-5 py-2 rounded-md border ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-400"
                  } focus:outline-none focus:ring-2 2xl:py-3`}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email:"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span
                    id="email-error"
                    className="text-red-500 text-sm mt-1 poppins-regular"
                  >
                    {errors.email}
                  </span>
                )}
              </div>
            </div>
            {/* CNIC Arrival Time */}
            <div className="flex  flex-col lg:flex-row gap-4 mb-5">
              <div className="flex flex-col lg:w-1/2 flex-1">
                <input
                  className={`pl-5 py-2 rounded-md border ${
                    errors.cnic
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-400"
                  } focus:outline-none focus:ring-2 2xl:py-3`}
                  type="text"
                  name="cnic"
                  value={formData.cnic}
                  onChange={handleChange}
                  placeholder="CNIC WithOut Dash"
                  aria-invalid={!!errors.cnic}
                  aria-describedby={errors.cnic ? "cnic-error" : undefined}
                />
                {errors.cnic && (
                  <span
                    id="cnic-error"
                    className="text-red-500 text-sm mt-1 poppins-regular"
                  >
                    {errors.cnic}
                  </span>
                )}
              </div>
              <div className="flex flex-col lg:w-1/2 flex-1">
                <input
                  className={`pl-5 py-2 rounded-md border ${
                    errors.arrivaltime
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-400"
                  } focus:outline-none focus:ring-2 2xl:py-3`}
                  type="time"
                  name="arrivaltime"
                  value={formData.arrivaltime}
                  onChange={handleChange}
                  placeholder="Arrival Time: 12:00AM"
                  aria-invalid={!!errors.arrivaltime}
                  aria-describedby={
                    errors.arrivaltime ? "arrivaltime-error" : undefined
                  }
                />
                {errors.arrivaltime && (
                  <span
                    id="arrivaltime-error"
                    className="text-red-500 text-sm mt-1 poppins-regular"
                  >
                    {errors.arrivaltime}
                  </span>
                )}
              </div>
            </div>
            {/* Promo code */}
            <div className="flex  flex-col lg:flex-row gap-4 mb-5">
              <input
                className="pl-5 py-2 rounded-md  border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400 2xl:py-3"
                type="text"
                name="promocode"
                value={formData.promocode}
                onChange={handleChange}
                placeholder="Promo Code:"
              />
            </div>
            {/* special request  */}
            <div className="w-full mb-5">
              <textarea
                name="requestmsg"
                value={formData.requestmsg}
                onChange={handleChange}
                rows={4}
                cols={50}
                placeholder="Special message...."
                className="border p-2 w-full rounded-md border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400 2xl:p-8"
              ></textarea>
            </div>
            {/* payment method */}
            <p className="poppins-reguler text-gray-400 2xl:text-xl">
              Payment Method
            </p>
            <div className="pt-3 gap-2 flex  flex-col lg:flex-row poppins-reguler text-neutral-700">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="card"
                  name="paymentmethod"
                  value="Card"
                  checked={formData.paymentmethod === "Card"}
                  onChange={handleChange}
                  className="accent-blue-600"
                  aria-invalid={!!errors.paymentmethod}
                />
                <label className="2xl:text-lg" htmlFor="card">
                  Credit/Debit Card
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="hotel"
                  name="paymentmethod"
                  value="PayAtHotel"
                  checked={formData.paymentmethod === "PayAtHotel"}
                  onChange={handleChange}
                  className="accent-blue-600"
                  aria-invalid={!!errors.paymentmethod}
                />
                <label className="2xl:text-lg" htmlFor="hotel">
                  Pay At Hotel
                </label>
              </div>
            </div>
            {errors.paymentmethod && (
              <span className="text-red-500 text-sm mt-2 poppins-regular block">
                {errors.paymentmethod}
              </span>
            )}
            {/* terms and condition */}
            <div className="flex  items-center space-x-2 mt-10 mb-2">
              <input
                type="checkbox"
                id="term"
                name="terms"
                checked={formData.terms === "terms"}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    terms: e.target.checked ? "terms" : "",
                  });
                }}
                className="accent-blue-600 w-4 h-4"
                aria-invalid={!!errors.terms}
                aria-describedby={errors.terms ? "terms-error" : undefined}
              />
              <label className="2xl:text-xl cursor-pointer" htmlFor="term">
                I agree with{" "}
                <span
                  className="underline hover:cursor-pointer text-blue-600"
                  onClick={() => navigate("/terms")}
                >
                  terms conditions
                </span>{" "}
                and{" "}
                <span
                  className="underline hover:cursor-pointer text-blue-600"
                  onClick={() => navigate("/terms")}
                >
                  privacy policy
                </span>
              </label>
            </div>
            {errors.terms && (
              <span
                id="terms-error"
                className="text-red-500 text-sm poppins-regular"
              >
                {errors.terms}
              </span>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingFoam;
