import React from "react";

const InputLabel = ({ title, type}) => {
  return (
    <div className="text-tableTextColor mb-3 text-base ">
      {/* <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title} Email
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          defaultValue="adamwathan"
          id="email"
          name="email"
          type={type}
          placeholder="you@example.com"
          aria-invalid="true"
          aria-describedby="email-error"
          className="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
        />
      </div>
      <p id="email-error" className="mt-2 text-sm text-red-600">
        Not a valid email address.
      </p> */}

      <label htmlFor="email" className="block font-[750] ">
        {title}
      </label>
      <div className="pt-1">
        <input
          id="email"
          name="email"
          type={type}
          className="bg-[#F6F8F9] block w-full md:w-[45%] rounded-md border border-[#666666] py-3 px-3 focus:ring-[#666666] sm:text-sm sm:leading-6 "
        />
      </div>

    </div>
  );
};

export default InputLabel;
