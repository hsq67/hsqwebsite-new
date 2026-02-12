// import React from "react";

import React from "react";

interface nameprop {
  label: string;
  className?: string;
}

const CommanButton: React.FC<nameprop> = ({ label, className }) => {
  return (
    <button
      className={`px-3 py-1 rounded-2xl w-36 poppins-semibold bg-gradient-to-r from-[#D7AA4D] to-[#D49237]  hover:shadow-2xl hover:cursor-pointer  ${className} `}
    >
      {label}
    </button>
  );
};

export default CommanButton;
