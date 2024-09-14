import { useContext } from "react";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import TableHeader from "../shared/TableHeader";
import TableBody from "../shared/TableBody";
import UsersContext from "../../context/AuthContext";
import Pagination from "../shared/Pagination";
import Spinner from "../shared/Spinner";

const AppointmentTable = () => {
  const { currentItems, loading } = useContext(UsersContext);
  const users = currentItems;

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (loading) return <Spinner />;

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-between font-semibold">
        <p className="text-boldColorText text-base  ">Patients Queued</p>
      </div>
      <table className="table w-full border-separate border-spacing-y-2 text-tableTextColor">
        <TableHeader>
          <th>
            <span className="pr-1"> ID</span>
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
          {users.map((user) => {
            const { patients } = user;
            // console.log(users[1], "from lab");
            return (
              <tr key={user.id}>
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
                  {patients.time || currentTime}
                </td>
                <td className="px-3 rounded-e-lg border border-[#E0E0E0] border-l-0">
                  <IoMdMore className="cursor-pointer" />
                </td>
              </tr>
            );
          })}
        </TableBody>
      </table>
      <Pagination />
    </div>
  );
};

export default AppointmentTable;
