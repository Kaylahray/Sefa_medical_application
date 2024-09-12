import React, { useState, useContext } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import UsersContext from "../../context/AuthContext";

const Pagination = ({ totalItems, itemsPerPage }) => {
  const { people } = useContext(UsersContext);
  const users = people.slice(0, 10);
  const [currentPage, setCurrentPage] = useState(10);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 10);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 10);
    }
  };

  return (
    <div className="flex gap-3 items-center justify-end mt-3 text-sm">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 10}
        className="bg-[#d2dcdb] px-[2px] text-[#3D4C4A] rounded-full w-5 h-5 disabled:text-gray-200"
      >
        <FaAngleLeft />
      </button>
      <span className="text-[#3D3D3D] font-normal tracking-wide ">
        {people.length < 1 ? 0 : currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="bg-[#d2dcdb] text-[#3D4C4A] px-1 rounded-full w-5 h-5 disabled:text-gray-200"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
