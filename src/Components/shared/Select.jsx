import React from "react";

const Select = () => {
  return (
    <div className="mb-2 ">
      <select
        id="date"
        name="date"
        className="bg-[#E4EAEA] block w-[87px] border-0 rounded-md py-3 px-1 outline-none focus:ring-border-[#666666] sm:text-sm sm:leading-6"
      >
        <option>Today</option>
        <option>Monday</option>
        <option>Tuesday</option>
      </select>
    </div>
  );
};

export default Select;
