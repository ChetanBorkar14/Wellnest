import React from "react";

const Button1 = ({ label, children }) => {
  return (
    <button
      className="px-7 py-1 rounded-2xl border-double border-8 font-semibold text-gray-900 bg-[#4d53f8] border-[#000]
    transition-all 
      duration-300 
      ease-in-out
      hover:bg-gradient-to-b 
      hover:from-[#4d53f8] 
      hover:to-[#4d53f8]
      hover:shadow-lg 
      hover:scale-105
      hover:border-[#000]
    "
    >
      {label}
      {children}
    </button>
  );
};

export default Button1;
