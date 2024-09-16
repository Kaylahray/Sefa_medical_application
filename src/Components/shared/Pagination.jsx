import React, { useContext } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import UsersContext from "../../context/AuthContext";

const Pagination = () => {
  const { currentPage, totalItems, itemsPerPage, paginate } =
    useContext(UsersContext);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex gap-3 items-center justify-end mt-3 text-sm">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-[#d2dcdb] px-[2px] text-[#3D4C4A] rounded-full w-5 h-5 disabled:text-gray-200"
      >
        <FaAngleLeft />
      </button>
      <span className="text-[#3D3D3D] font-normal tracking-wide">
        {itemsPerPage * currentPage} of {totalItems}
      </span>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-[#d2dcdb] text-[#3D4C4A] px-1 rounded-full w-5 h-5 disabled:text-gray-200"
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
