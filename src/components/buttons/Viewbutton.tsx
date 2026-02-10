import React from "react";
import { ChevronRight } from "lucide-react";
interface Label {
  label: string;
  className?: string;
  onClick?: () => void;
}
const Viewbutton: React.FC<Label> = ({ label, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-[#D7AA4D] to-[#D49237] poppins-semibold text-black w-40 py-2 rounded-full flex items-center px-4 gap-2  hover:bg-neutral-200 transition relative ${className}`}
    >
      {label}
      <div className="absolute right-1 bg-black p-2 rounded-full">
        <ChevronRight color="white" size={18} />
      </div>
    </button>
  );
};

export default Viewbutton;
