import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchPatient = ({ placeholder = "Search", value, onChange }) => {
    return (
        <div className="mb-3 md:w-full max-w-sm">
          <div className="relative mt-3 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <CiSearch aria-hidden="true" className="h-6 w-6 text-[#7A7A7A]" />
            </div>
            <input
              id="search"
              name="search"
              type="search"
              value={value} // Controlled input valu
              onChange={onChange} // Handle input change via props
              placeholder={placeholder} // Dynamic placeholder
              className="bg-white block w-full rounded-md border-[0.5px] border-[#E0E0E0] py-3 pl-12 pr-3 placeholder:text-[#666666] placeholder:text-base placeholder:font-normal outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      );
}

export default SearchPatient
