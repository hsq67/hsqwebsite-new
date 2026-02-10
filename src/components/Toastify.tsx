import React from "react";
import { toast } from "react-toastify";

interface TostProps {
  message: string;
}
const Toastify: React.FC<TostProps> = ({ message }) => {
  return toast.error(message, {
    position: "top-center",
    style: {
      background: "#dfab4e", // light orange background
      color: "black", // deep amber text
      border: "1px solid #fbbf24",
      fontWeight: "600",
    },
  });
};

export default Toastify;
