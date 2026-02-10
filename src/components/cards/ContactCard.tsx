import React from "react";

import { LucideIcon } from "lucide-react";

interface data {
  heading?: string;
  description?: string;
  icon?: LucideIcon;
}
const ContactCard: React.FC<data> = ({ heading, description, icon: Icon }) => {
  return (
    <div className="relative flex flex-col justify-center items-center pt-2 bg-[#FFF9EE] rounded-lg shadow-md h-36 m-auto w-64 lg:w-72">
      <div className="absolute -top-8 bg-[#D6A53F] p-3 rounded-md mb-3">
        <Icon className=" w-8 h-8 lg:w-10 lg:h-10" color="white" />
      </div>
      <h3 className="poppins-bold mb-2">{heading}</h3>
      <p className="text-sm text-black text-center w-[70%]">{description}</p>
    </div>
  );
};

export default ContactCard;
