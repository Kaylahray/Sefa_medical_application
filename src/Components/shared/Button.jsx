import React from "react";

const Button = ({ children, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      className="btn bg-buttonBg btn-sm md:btn-md text-white font-normal md:px-[2.5em] hover:bg-[#8c9493]">
      {children}
    </button>
  );
};

export default Button;
