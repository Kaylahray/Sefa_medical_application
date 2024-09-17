import React from "react";

const MyForm = () => {
  return (
    <div className="p-4">
      {/* First Row: Name and Email (flex layout) */}
      <div className="flex space-x-4">
        <div className="flex-1">
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-[#F6F8F9] block w-full rounded-md border border-[#666666] py-3 px-3 focus:ring-[#666666] sm:text-sm sm:leading-6"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-[#F6F8F9] block w-full rounded-md border border-[#666666] py-3 px-3 focus:ring-[#666666] sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Second Row: Dropdown */}
      <div className="mt-4">
        <label htmlFor="options" className="block font-semibold mb-1">
          Role
        </label>
        <select
          id="options"
          name="options"
          className="bg-[#F6F8F9] block w-full md:w-[45%] rounded-md border border-[#666666] py-3 px-3 focus:ring-[#666666] sm:text-sm sm:leading-6"
          style={{ height: "3rem", width: "49%" }}>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>
    </div>
  );
};

export default MyForm;
