import { useContext } from "react";
import UsersContext from "../../../context/AuthContext";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import TableHeader from "../../shared/TableHeader";
import TableBody from "../../shared/TableBody";
import Spinner from "../../shared/Spinner";

const OverviewTable = () => {
  const { currentItems, loading } = useContext(UsersContext);
  // const users = people.slice(0, 10);
  // const handleClick = () => {
  //   const menu = document.getElementById("moreMenu");
  //   if (menu.style.display === "none") {
  //     menu.style.display = "block";
  //   } else {
  //     menu.style.display = "none";
  //   }
  // };
  return (
    <div className="w-full overflow-x-auto ">
      <div className="flex justify-between font-semibold">
        <p className="text-boldColorText text-base ">Patients Queued</p>
        <Link to="#" className="underline text-[#799794] text-sm ">
          View full list
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="table w-full border-separate border-spacing-y-2 text-tableTextColor">
          <TableHeader>
            <th>
              <span className="pr-1">I.D</span>
              <FaAngleDown className="inline text-sm" />
            </th>
            <th>
              <span className="pr-1"> Name</span>
              <FaAngleDown className="inline text-sm" />
            </th>
            <th>
              <span className="pr-1">Email Address</span>
              <FaAngleDown className="inline text-sm" />
            </th>
            <th>
              <span className="pr-1">Gender</span>
              <FaAngleDown className="inline text-sm" />
            </th>
            <th>
              <span className="pr-1">Age</span>
              <FaAngleDown className="inline text-sm" />
            </th>
            <th>
              <span className="pr-1">Time Queued</span>
              <FaAngleDown className="inline text-sm" />
            </th>
          </TableHeader>
          <TableBody>
            {currentItems.map((user) => {
              const { patients } = user;
              return (
                <tr key={user.id} className="shadow-custom">
                  <td className="relative px-3 py-7 sm:w-12 sm:px-6 border-r-0 rounded-s-lg border border-[#E0E0E0]">
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-[#8F8F8F] text-indigo-600 focus:ring-indigo-600"
                    />
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    {patients.ID_Number}
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    {patients.firstName} {patients.lastName}
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 normal-case ">
                    {patients.email}
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    {patients.gender}
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    {patients.age}
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    {patients.timeQueued}
                  </td>
                  <td className="px-3 rounded-e-lg border border-[#E0E0E0] border-l-0">
                    <IoMdMore className="cursor-pointer" />
                  </td>
                </tr>
              );
            })}
          </TableBody>
        </table>
      )}
    </div>
  );
};

export default OverviewTable;
