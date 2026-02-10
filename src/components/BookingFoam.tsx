import React, { useState, useEffect } from "react";
import formbg from "../assets/BG/foambg.svg";
import { useRoomStore } from "@/store/store";
import { useNavigate } from "react-router-dom";
// import
function BookingFoam() {
  const navigate = useNavigate();
  const { setBookingFormData, BookingFormData } = useRoomStore();
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
    // console.log("", name, value);

    setFormData({
      ...formData, // keep old values
      [name]: value, // update only the changed field
    });
    // setBookingFormData({
    //   ...BookingFormData,
    //   name: formData.name,
    //   contact: formData.contact,
    //   address: formData.address,
    //   email: formData.email,
    //   cnic: formData.cnic,
    //   arrivaltime: formData.arrivaltime,
    //   promocode: formData.promocode,
    //   requestmsg: formData.requestmsg,
    //   paymentmethod: formData.paymentmethod,
    // });
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
              <input
                className="pl-5 py-2 rounded-md lg:w-1/2 border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400 2xl:py-3"
                type="text"
                name="name"
                id=""
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
              <input
                className="pl-5 py-2 rounded-md lg:w-1/2 border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400 2xl:py-3"
                type="text"
                placeholder="03123456789"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
            {/*  Address Email*/}
            <div className="flex  flex-col lg:flex-row gap-4 mb-5">
              <input
                className="pl-5 py-2 rounded-md lg:w-1/2 border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400 2xl:py-3"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                // id=""
                placeholder="Address:"
              />
              <input
                className="pl-5 py-2 rounded-md lg:w-1/2 border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400 2xl:py-3"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email:"
              />
            </div>
            {/* CNIC Arrival Time */}
            <div className="flex  flex-col lg:flex-row gap-4 mb-5">
              <input
                className="pl-5 py-2 rounded-md lg:w-1/2 border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400 2xl:py-3"
                type="text"
                name="cnic"
                value={formData.cnic}
                onChange={handleChange}
                id=""
                placeholder="CNIC WithOut Dash"
              />
              <input
                className="pl-5 py-2 rounded-md lg:w-1/2 border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400 2xl:py-3"
                type="text"
                name="arrivaltime"
                value={formData.arrivaltime}
                onChange={handleChange}
                placeholder="Arrival Time: 12:00AM"
              />
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
                // id=""
                placeholder="Promo Code:"
              />
            </div>
            {/* special request  */}
            <div className="w-full">
              <textarea
                name="requestmsg"
                value={formData.requestmsg}
                onChange={handleChange}
                // id="message"
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
              <div className="flex  items-center space-x-2">
                {/* <input
                  type="radio"
                  id="cash"
                  name="paymentmethod"
                  value="Cash"
                  checked={formData.paymentmethod === "Cash"}
                  onChange={handleChange}
                  className="accent-blue-600"
                /> */}
                {/* <label htmlFor="cash">Cash</label> */}
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="card"
                  name="paymentmethod"
                  value="Card"
                  checked={formData.paymentmethod === "Card"}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                <label className="2xl:text-lg" htmlFor="card">
                  Credit/Debit Card
                </label>
              </div>
              <div className="flex items-center space-x-2">
                {/* <input
                  type="radio"
                  id="online"
                  name="paymentmethod"
                  value="Online"
                  checked={formData.paymentmethod === "Online"}
                  onChange={handleChange}
                  className="accent-blue-600"
                /> */}
                {/* <label htmlFor="online">Online</label> */}
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
                />
                <label className="2xl:text-lg" htmlFor="hotel">
                  Pay At Hotel
                </label>
              </div>
            </div>
            {/* terms and condition */}
            <div className="flex  items-center space-x-2 mt-10">
              <input
                type="radio"
                id="term"
                name="terms"
                value="terms"
                checked={formData.terms === "terms"}
                onChange={handleChange}
                className="accent-blue-600"
              />
              <label
                className="2xl:text-xl"
                onClick={() => navigate("/terms")}
                htmlFor="term"
              >
                I agree with{" "}
                <span className="underline hover:cursor-pointer">
                  terms conditions
                </span>{" "}
                and{" "}
                <span className="underline hover:cursor-pointer">
                  privacy policy
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingFoam;
