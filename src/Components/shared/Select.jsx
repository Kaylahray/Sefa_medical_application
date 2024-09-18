import React from "react";

const Select = () => {
  return (
    <div className="mb-2 relative">
      <select
        id="date"
        name="date"
        className="bg-[#E4EAEA] block w-[87px] border-0 rounded-md py-1 px-2 appearance-none outline-none focus:ring-border-[#666666] sm:text-sm sm:leading-6"
      >
        <option>Today</option>
        <option>Monday</option>
        <option>Tuesday</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default Select;
