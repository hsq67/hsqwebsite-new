import React, { useState, FormEvent } from "react";
import { ChevronRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const EMAIL_API_KEY = import.meta.env.VITE_EMAIL_API_KEY;
function ContactForm() {
  const [contactForm, setcontactForm] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    message: "",
  });
  // console.log("First name", contactForm.firstName);

  const SendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);

    try {
      const response = await emailjs.send(
        "service_iht1fpf", // e.g. service_123xyz
        "template_8lgky9l", // e.g. template_abc456
        contactForm,
        `${EMAIL_API_KEY}` // e.g. 0aBcDeFgHiJk
      );

      // console.log("SUCCESS!", response.status, response.text);
      // alert();
      toast.success("Email sent successfully!", {
        position: "top-center",
        style: {
          background: "#dfab4e", // light orange background
          color: "black", // deep amber text
          border: "1px solid #fbbf24",
          fontWeight: "600",
        },
      });
      // Reset form
      setcontactForm({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ FAILED...", error);
      alert("Failed to send email. Please try again.");
    } finally {
      // setLoading(false);
    }
  };
  // Step 2: Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // console.log("", name, value);
    setcontactForm({
      ...contactForm, // keep old values
      [name]: value, // update only the changed field
    });
  };
  // console.log(
  //   "LastName",
  //   contactForm.lastName,
  //   contactForm.lastName,
  //   contactForm.email,
  //   contactForm.message,
  //   contactForm.contact
  // );
  return (
    <>
      {/* main card */}
      <div className="relative  z-10 bg-[#FFF9EF] shadow-xl rounded-3xl">
        {/* Top Right Clip Shape */}
        <div
          className="absolute top-0 right-0 bg-primary rounded-3xl w-[400px] lg:w-[500px] h-[400px]"
          style={{
            clipPath: "polygon(100% 0, 83% 0, 100% 19%)",
          }}
        />
        {/* bottom left Clip Shape*/}
        <div
          className="absolute  rounded-3xl bottom-0 left-0 bg-primary w-[300px] md:w-[450px] lg:w-[500px] h-[400px]"
          style={{
            clipPath: "ellipse(62% 8% at 2% 100%)",
          }}
        />
        <div className="p-10">
          <h1 className="poppins-bold text-2xl">Send Your</h1>
          <h1 className="poppins-bold text-2xl">Message To Us</h1>
          <form
            onSubmit={SendEmail}
            className="grid grid-cols-1 sm:grid-cols-2 pt-5 gap-5"
          >
            {/* first  */}
            <div className="">
              <input
                className="px-5 py-[10px] rounded-md focus:outline-blue-500"
                type="text"
                name="firstName"
                value={contactForm.firstName}
                onChange={handleChange}
                placeholder="First Name:"
              />
            </div>
            {/* last name */}
            <div className="">
              <input
                className="px-5 py-[10px] rounded-md focus:outline-blue-500"
                type="text"
                name="lastName"
                value={contactForm.lastName}
                onChange={handleChange}
                placeholder="Last Name:"
              />
            </div>
            {/* contact */}
            <div className="">
              <input
                className="px-5 py-[10px] rounded-md focus:outline-blue-500"
                type="text"
                name="contact"
                value={contactForm.contact}
                onChange={handleChange}
                placeholder="Contact Num:"
              />
            </div>
            {/* email */}
            <div className="">
              <input
                name="email"
                value={contactForm.email}
                onChange={handleChange}
                className="px-5 py-[10px] rounded-md focus:outline-blue-500"
                type="text"
                placeholder="Email Address:"
              />
            </div>
            {/* message */}
            <div className="md:col-span-2">
              <textarea
                placeholder="Message...."
                name="message"
                value={contactForm.message}
                onChange={handleChange}
                rows={5}
                className="p-4 rounded-lg border-none outline-none bg-white focus:outline-blue-500 shadow-sm w-full md:col-span-2"
              ></textarea>
            </div>
            {/* button */}
            <div className="relative flex  justify-end md:col-span-2">
              <button className="text-left pl-3 w-[35%] lg:w-1/6 py-1 poppins-semibold bg-gradient-to-r from-[#D7AA4D] to-[#D49237] transition-all duration-300 ease-out hover:shadow-xl hover:cursor-pointer rounded-lg">
                Send
              </button>
              <div className="absolute right-2 top-[6px] bg-black rounded-full">
                <ChevronRight color="white" size={20} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
