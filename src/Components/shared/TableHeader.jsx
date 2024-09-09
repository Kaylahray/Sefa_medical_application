import React from "react";

const TableHeader = ({children}) => {
  return (
    <thead className="bg-[#E4EAEA] text-left text-base font-semibold">
      <tr>
        <th
          scope="col"
          className="relative px-7 py-6 sm:w-12 sm:px-6 rounded-tr-none rounded-t-lg"
        >
          <input
            type="checkbox"
            className="absolute left-4 top-1/2 -mt-2 h-4 w-4  rounded border-[#8F8F8F] text-indigo-600 focus:ring-indigo-600"
          />
        </th>
        {children}
        <th
          scope="col"
          className="pl-3 pr-4 sm:pr-3 rounded-tl-none rounded-t-lg"
        >
          <span className="sr-only">Edit</span>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
