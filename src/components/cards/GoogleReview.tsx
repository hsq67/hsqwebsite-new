import React from "react";
import { FcGoogle } from "react-icons/fc";
import { PiStarFill } from "react-icons/pi";
import { ReviewSummary } from "@/types/Review";
import logo from "@/assets/logo.webp";
const GoogleReviewCard: React.FC<ReviewSummary> = ({
  name,
  snippet,
  thumbnail,
  date,
}) => {
  return (
    // shadow-[0_14px_40px_rgba(0,0,0,0.12)]
    <section className="relative mx-auto h-36 w-[300px] p-2 sm:w-[500px] sm:h-40 sm:pt-5  rounded-[24px] bg-white ring-1 ring-black/5">
      <div
        className="absolute -top-6 left-8 h-10 w-10 sm:-top-8 sm:h-14 sm:w-14 rounded-full bg-white
        shadow-[0_12px_30px_rgba(0,0,0,0.25)] ring-1 ring-black/5
        flex items-center justify-center"
      >
        {/* <svg width="26" height="26" viewBox="0 0 24 24" fill="#C9902D">
          <path d="M6 6c-2 0-3.5 1.6-3.5 3.5S4 13 6 13h2v5H3v-5c0-3.3 2.7-6 6-6V6H6z" />
          <path d="M16 6c-2 0-3.5 1.6-3.5 3.5S14 13 16 13h2v5h-5v-5c0-3.3 2.7-6 6-6V6h-3z" />
        </svg> */}
        <img
          src={thumbnail}
          className="w-12 h-12 border-0"
          onError={(e) => (e.currentTarget.src = logo)}
          alt="no image"
        />
      </div>
      {/* <QuoteBadge /> */}

      {/* Header: Name + Google G */}
      <div className="flex items-center justify-center gap-2">
        <h3 className="text-xl sm:text-2xl poppins-semibold text-[#0F172A]">
          {name}
          {/* Dummy */}
        </h3>
        <FcGoogle size={25} />
        {/* <GoogleGIcon className="h-5 w-5" /> */}
      </div>

      {/* Review content */}
      <p className=" text-sm  text-center mt-1 sm:text-[16px] sm:mt-3 text-[#111827]">
        {/* {snippet} */}
        {/* <p> */}
        {snippet.length > 90 ? (
          <>
            {snippet.slice(0, 97)}
            <span className="text-blue-600">...read more</span>
          </>
        ) : (
          snippet
        )}
        {/* </p> */}

        {/* <a href={readMoreHref} className="text-[#1A73E8] hover:underline"> */}
        {/* read more */}
        {/* </a> */}
      </p>

      {/* Stars */}
      <div className=" mt-1 sm:mt-3 flex items-center justify-center gap-2.5">
        <PiStarFill size={20} color="#C9902D" />
        <PiStarFill size={20} color="#C9902D" />
        <PiStarFill size={20} color="#C9902D" />
        <PiStarFill size={20} color="#C9902D" />
        <PiStarFill size={20} color="#C9902D" />
      </div>
    </section>
  );
};
export default GoogleReviewCard;
