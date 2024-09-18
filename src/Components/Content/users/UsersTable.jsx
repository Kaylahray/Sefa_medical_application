import { useContext } from "react";
import UsersContext from "../../../context/AuthContext";
import TableHeader from "../../shared/TableHeader";
import TableBody from "../../shared/TableBody";
import Spinner from "../../shared/Spinner";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import Pagination from "../../shared/Pagination";

const UsersTable = () => {
  const { currentItems, loading, handleClick } = useContext(UsersContext);

  return (
    <div className="w-full overflow-x-auto ">
      <h1>Users List</h1>
      {loading ? (
        <Spinner />
      ) : (
        <table className="table w-full border-separate border-spacing-y-2 text-tableTextColor">
          <TableHeader>
            <th>
              <span className="pr-1">I.D</span>
              {/* <FaAngleDown className="inline text-sm" /> */}
            </th>
            <th>
              <span className="pr-1"> Name</span>
              {/* <FaAngleDown className="inline text-sm" /> */}
            </th>
            <th>
              <span className="pr-1">Email Address</span>
              {/* <FaAngleDown className="inline text-sm" /> */}
            </th>
            <th>
              <span className="pr-1">Role</span>
              {/* <FaAngleDown className="inline text-sm" /> */}
            </th>
            <th>
              <span className="pr-1">User Status</span>
              {/* <FaAngleDown className="inline text-sm" /> */}
            </th>
          </TableHeader>
          <TableBody>
            {currentItems.map((user) => {
              const { admin } = user;
              return (
                <tr key={user.id} className="">
                  <td className="relative px-3 sm:w-12 sm:px-6 border-r-0 rounded-s-lg border border-[#E0E0E0]">
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-[#8F8F8F] text-indigo-600 focus:ring-indigo-600"
                    />
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    <Link to={`/users/${user.id}`}>{admin.ID_Number}</Link>
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    <Link to={`/users/${user.id}`}>
                      {admin.firstName} {admin.lastName}
                    </Link>
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 normal-case ">
                    <Link to={`/users/${user.id}`}>{admin.email}</Link>
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    <Link to={`/users/${user.id}`}>{admin.role}</Link>
                  </td>
                  <td className="px-3 border border-[#E0E0E0] border-x-0 ">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                        admin.status === "online"
                          ? "bg-green-100 text-[#03A300]"
                          : "bg-orange-100 text-[#A35800]"
                      }`}
                    >
                      <Link to={`/users/${user.id}`}>{admin.status}</Link>
                    </span>
                  </td>
                  <td className="px-3 rounded-e-lg border border-[#E0E0E0] border-l-0">
                    <IoMdMore
                      onClick={handleClick}
                      className="cursor-pointer"
                    />
                    <div
                      id="moreMenu"
                      className="hidden absolute right-2 z-10 mt-2 w-28 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
                    >
                      <div className="py-1">
                        <Link
                          to={`/finance/patients-report/${user.id}`}
                          className="block px-4 py-2 text-sm border-b hover:bg-[#E4EAEA] "
                        >
                          View
                        </Link>
                        <Link
                          to={`/finance/patients-report/${user.id}`}
                          className="block px-4 py-2 text-sm hover:bg-[#E4EAEA]"
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
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

export default UsersTable;
