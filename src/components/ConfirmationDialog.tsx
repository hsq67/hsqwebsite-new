
import BookingConfirmation from "@/assets/Book/BookingConfirmation.webp";
import logo from "@/assets/logo.webp";
import { Link } from "react-router-dom";
function ConfirmationDialog() {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-bottom flex justify-center items-center"
        style={{ backgroundImage: `url(${BookingConfirmation})` }}
      >
        {/* Decorative background shades */}

        {/* Main card */}
        <div className="bg-black relative rounded-[40px] p-10 w-[90%] lg:w-1/2 flex flex-col justify-center items-center z-10">
          <div className="absolute bottom-0 left-0 h-12 w-1/3 bg-primary/40 blur-xl rounded-tr-[100px]" />
          <div className="absolute top-0 right-10 h-12 w-1/3 bg-primary/40 blur-xl rounded-bl-[100px]" />

          <img className="w-[70%] lg:w-80" src={logo} alt="logo" />
          <div className="text-white text-center space-y-3 my-3">
            <h1 className="Tuesdaynight text-3xl">Thank you!</h1>
            <p className="poppins-bold text-lg lg:text-xl">
              You will shortly receive a <p>confirmation call for our site</p>
            </p>
          </div>
          <Link to={"/"}>
            <div className="my-3 lg:my-10">
              <button className="bg-primary px-10 poppins-semibold py-2 rounded-xl">
                Home Page
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ConfirmationDialog;
